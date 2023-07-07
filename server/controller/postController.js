const { ethers, BigNumber } = require("ethers");
const { Post, ServerAccount, Users } = require("../models");
const jwt = require("jsonwebtoken");

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
      if (!req.headers.authorization) {
        return res.status(400).send("no authorization");
      } else {
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        const p_userId = data.userId;
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
          process.env.LOCAL_ENDPOINT
        );
        const serverWallet = new ethers.Wallet(
          // serverAccount.privatekey,
          process.env.SERVER_SECRET,
          provider
        );

        const tokenContractAddress = process.env.ERC20_CONTRACT;
        const tokenContractABI =
          require("../../contracts/out/SweetToken.sol/SweetToken.json").abi;
        const tokenContract = new ethers.Contract(
          tokenContractAddress,
          tokenContractABI,
          serverWallet
        );

        // 토큰을 다른 주소로 전송합니다.
        const transferTx = await tokenContract.transfer(
          recipientAccount.address,
          SWT_REWARD
        );
        await transferTx.wait();

        const tokenBalanceContract = await tokenContract.balanceOf(
          // serverAccount.address
          process.env.SERVER_ADDRESS
        );
        const tokenBalanceContractFormatted =
          ethers.utils.formatEther(tokenBalanceContract);
        const tokenBalanceRecipient = await tokenContract.balanceOf(
          recipientAccount.address
        );
        const tokenBalanceRecipientFormatted = ethers.utils.formatEther(
          tokenBalanceRecipient
        );

        await serverAccount.update({
          token_amount: String(tokenBalanceContractFormatted),
        });
        await recipientAccount.update({
          token_amount: String(tokenBalanceRecipientFormatted),
          where: {
            id: p_userId,
          },
        });

        return res.status(200).json({
          message: "Posting & SWT reward complete",
          postId: post.id,
          reward: recipientAccount.token_amount,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
