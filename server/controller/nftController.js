const { ethers } = require("ethers");
const { NFT, Users } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  mintNft: async (req, res) => {
    try {
      if (!req.headers.authorization) {
        return res.status(400).send("no authorization");
      } else {
        const token = req.headers.authorization.split(" ")[1];
        const data = await jwt.verify(token, process.env.ACCESS_SECRET);
        const n_userId = data.userId;
        const { tokenURI } = req.body;

        const provider = new ethers.providers.JsonRpcProvider(
          process.env.LOCAL_ENDPOINT
        );
        const serverWallet = new ethers.Wallet(
          process.env.SERVER_SECRET,
          provider
        );
        const user = await Users.findOne({
          where: {
            id: n_userId,
          },
        });
        // const userWallet = new ethers.Wallet(user.privatekey, provider);
        const userWallet = new ethers.Wallet(user.privatekey, provider);

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
          userWallet
        );
        const approveTx = await ERC20.approve(
          process.env.ERC721_CONTRACT,
          BigInt(101e18),
          { gasLimit: 210000 }
        );
        await approveTx.wait();
        const setTokenTx = await NFTLootBox.setToken(
          process.env.ERC20_CONTRACT,
          {
            gasLimit: 210000,
          }
        );
        await setTokenTx.wait();
        const mintNftTx = await NFTLootBox.mintNFT(
          userWallet.address,
          tokenURI,
          {
            gasLimit: 500000,
          }
        );
        const mintNftTxReceipt = await mintNftTx.wait();
        // console.log(parseInt(Number(mintNftTxReceipt.logs[3].data), 16));
        // console.log(typeof parseInt(Number(mintNftTxReceipt.logs[3].data), 16));

        const nft = await NFT.create({
          n_userId: n_userId,
          token_id: parseInt(Number(mintNftTxReceipt.logs[3].data), 16),
          ipfs_hash: tokenURI,
          tx_hash: mintNftTxReceipt.transactionHash,
          description: "",
        });

        return res.status(200).json({
          message: "nft minted",
          data: {
            n_userId: n_userId,
            token_id: parseInt(Number(mintNftTxReceipt.logs[3].data), 16),
            ipfs_hash: tokenURI,
            tx_hash: mintNftTxReceipt.transactionHash,
            description: "",
          },
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
};
