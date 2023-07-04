const express = require("express");
const router = express.Router();

// 로그인 미들웨어
router.post("/login", (req, res, next) => {
  // 로그인 처리 로직 작성
});

// 로그아웃 미들웨어
router.post("/logout", (req, res, next) => {
  // 로그아웃 처리 로직 작성
});

module.exports = router;
