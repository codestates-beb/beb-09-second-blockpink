const { ethers } = require("ethers");
const jwt = require("jsonwebtoken");
const { Post, NFT, Users } = require("../models");

module.exports = {
  getUserById: async (req, res) => {
    try {
      if (!req.headers.authorization) {
        return res.status(400).send("no authorization");
      } else {
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, process.env.ACESS_SECRET);
        const userId = data.userId;

        const userInfo = Users.findOne({
          where: {
            id: userId,
          },
        });

        const userNft = NFT.findAll({
          where: {
            n_userId: userId,
          },
        });

        return res.status(200).json({
          msg: "ok",
          address: userInfo.address,
          token_amount: userInfo.token_amount,
          eth_amount: userInfo.eth_amount,
          nfts: {
            tokenURI: "",
            tokenId: 0,
            txHash: "",
            description: "",
            createdAt: "",
          },
          posts: {
            postId: 0,
            title: "",
            content: "",
            createdAt: "",
          },
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
