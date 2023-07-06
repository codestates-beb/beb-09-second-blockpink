const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
require("dotenv").config();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 이메일과 비밀번호를 사용하여 사용자를 검색합니다.
    const user = await Users.findOne({ where: { email, password } });

    if (!user) {
      // 사용자를 찾을 수 없는 경우, 로그인 실패를 응답합니다.
      res.status(401).json({ msg: "로그인에 실패했습니다." });
    } else {
      // JWT 토큰 생성을 위한 비밀키(salt)를 설정합니다.
      const secretKey = process.env.ACCESS_SECRET; // 비밀키(salt)는 보안상의 이유로 별도의 보안 저장소에 보관하는 것이 좋습니다.

      // 사용자 정보를 기반으로 JWT 토큰을 생성합니다.  // 유효시간: 1시간.
      const token = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: "1h",
      });

      // 로그인 성공 및 토큰을 응답합니다.
      res.status(200).json({ msg: "로그인에 성공했습니다.", token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "서버 에러" });
    next(err);
  }
});

module.exports = router;
