const { ethers, BigNumber } = require("ethers");
const { Post, ServerAccount, Users } = require("../models");

module.exports = {
  getPostAll: async (req, res) => {
    try {
      const result = await Post.findAll({});
      const output = result.map((el) => {
        return el.dataValues;
      });
      //   console.log(output);
      res.status(200).json({
        message: "ok",
        posts: output,
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
  getPostById: async (req, res) => {
    try {
      const postId = req.params.id;
      const result = await Post.findOne({
        where: {
          id: postId,
        },
      });
      //   console.log(result.dataValues);
      const output = result.dataValues;
      res.status(200).json({
        message: "ok",
        post: output,
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
  registerPostWithTokenReward: async (req, res) => {
    const SWT_REWARD = BigInt(200e18);

    try {
      const p_userId = req.header("p_userId");
      console.log(p_userId);
      const { title, content } = req.body;

      // create new post
      const post = await Post.create({
        p_userId: p_userId,
        title: title,
        content: content,
      });
      //   console.log(post.dataValues);

      // transfer token to users
      const serverAccount = await ServerAccount.findOne();
      const recipientAccount = await Users.findOne({
        where: {
          id: p_userId,
        },
      });
      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545"
      );
      const serverWallet = new ethers.Wallet(
        serverAccount.privatekey,
        provider
      );

      // test
      const testWallet = await ethers.Wallet.createRandom();
      const testWalletWithProvider = await testWallet.connect(provider);
      console.log(testWalletWithProvider);

      // 토큰 컨트랙트 주소
      const tokenContractAddress = process.env.ERC20_CONTRACT;
      // 토큰 컨트랙트 ABI
      const tokenContractABI =
        require("../../contracts/out/SweetToken.sol/SweetToken.json").abi;
      // 토큰 컨트랙트 인스턴스 생성
      const tokenContract = new ethers.Contract(
        tokenContractAddress,
        tokenContractABI,
        serverWallet
      );

      // 서버 계정의 토큰 수량을 확인합니다.
      const serverTokenAmount = serverAccount.token_amount;
      //   console.log(BigInt(serverTokenAmount));
      // 토큰을 다른 주소로 전송합니다.
      const transferTx = await tokenContract.transfer(
        // recipientAccount.address,
        // test
        testWalletWithProvider.address,
        SWT_REWARD
      );
      // 토큰 전송 트랜잭션이 완료될 때까지 대기합니다.
      await transferTx.wait();
      const tokenBalance = await tokenContract.balanceOf(serverAccount.address);
      // DB에서 token_amount 값을 업데이트합니다.
      await serverAccount.update({
        token_amount: String(tokenBalance),
      });
      // user 추가하는 api 만들고 난 후에 주석 해제하기!
      //   await recipientAccount.update({
      //     token_amount: toString(SWT_REWARD),
      //     where: {
      //       id: p_userId,
      //     },
      //   });

      return res.status(200).json({
        message: "Posted & SWT rewarded",
        postId: post.id,
        reward: String(SWT_REWARD),
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
