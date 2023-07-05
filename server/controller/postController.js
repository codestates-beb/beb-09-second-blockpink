const { ethers } = require("ethers");
const { Post } = require("../models");

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
    try {
      const { title, content } = req.body;
      const post = await Post.create({
        title: title,
        content: content,
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
};
