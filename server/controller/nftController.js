const { ethers } = require("ethers");
const { NFT } = require("../models");

module.exports = {
  mintNft: async (req, res) => {
    // 1. 유저에게 이미지 파일을 받는다.
    // 2. 이미지 파일을 IPFS에 올리고 pinning 한다.
    // 3. tokenURI를 얻어온 후, db의 ipfs_hash, n_userId 업데이트
    // 4. NFTLootBox에게 유저의 100 SWT를 approve 해준다.
    // 3. 서버 계정으로 NFTLootBox의 mintNFT를 호출한다.
    try {
      const { tokenURI, tokenId } = req.body;
      const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:8545"
      );
      const serverWallet = new ethers.Wallet(
        process.env.SERVER_SECRET,
        provider
      );
      const NFTLootBoxAbi =
        require("../../contracts/out/NFTLootBox.sol/NFTLootBox.json").abi;
      const NFTLootBox = new ethers.Contract(
        process.env.ERC721_CONTRACT,
        NFTLootBoxAbi,
        serverWallet
      );
      const ERC20Abi =
        require("../../contracts/out/SweetToken.sol/SweetToken.json").abi;
      const ERC20 = new ethers.Contract(
        process.env.ERC20_CONTRACT,
        ERC20Abi,
        testWallet
      );
      const approveTx = await ERC20.approve(process.env.ERC721_CONTRACT, 101); // return boolean
      await approveTx.wait();
      const mintNFTTx = await NFTLootBox.mintNFT(testAddress, tokenURI); // return new token id
      await mintNFTTx.wait();

      const nft = await NFT.create({
        n_userId: 0,
        token_id: mintNFTTx,
        ipfs_hash: tokenURI,
        tx_hash: "",
        description: "",
      });

      return res.status(200).json({
        message: "nft minted",
        data: { mintNFTTx },
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
};
