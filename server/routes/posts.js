// 1.게시판 GET API
// 2.게시글 조회 GET API(특정 게시글 눌렸을 때)
// 3.게시글 작성 시 보상 토큰 API.

const express = require("express");
const router = express.Router();

// 특정 게시글 조회 GET API(특정 게시글 눌렸을 때)
router.post("/", (req, res, next) => {

});

// 글 작성 시 보상 토큰 API
router.post("/register", (req, res, next) => {

});

module.exports = router;