// 1.게시판 GET API
// 2.게시글 조회 GET API(특정 게시글 눌렸을 때)
// 3.게시글 작성 시 보상 토큰 API.

const express = require("express");
const router = express.Router();

const {
  getPostAll,
  getPostById,
  registerPostWithTokenReward,
} = require("../controller/postController");

// 모든 게시글 조회 GET API
router.get("/", getPostAll);

// 특정 게시글 조회 GET API(특정 게시글 눌렸을 때)
router.get("/:id", getPostById);

// 글 작성 시 보상 토큰 API
router.post("/register", registerPostWithTokenReward);

module.exports = router;
