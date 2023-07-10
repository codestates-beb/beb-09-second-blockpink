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
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        const userId = data.userId;

        const userInfo = await Users.findOne({
          where: {
            id: userId,
          },
        });
        console.log(userInfo);
        const userNft = await NFT.findAll({
          where: {
            n_userId: userId,
          },
        });
        console.log(userNft);
        const nftData = userNft.map((nft) => {
          return {
            tokenURI: nft.ipfs_hash,
            tokenId: nft.token_id,
            txHash: nft.tx_hash,
            description: nft.description,
            createdAt: nft.createdAt,
          };
        });

        const userPost = await Post.findAll({
          where: {
            p_userId: userId,
          },
        });
        const postData = userPost.map((post) => {
          return {
            postId: post.id,
            title: post.title,
            content: post.content,
            createdAt: post.createdAt,
          };
        });

        return res.status(200).json({
          msg: "ok",
          nickname: userInfo.nickname,
          address: userInfo.address,
          token_amount: userInfo.token_amount,
          eth_amount: userInfo.eth_amount,
          nfts: nftData,
          posts: postData,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
