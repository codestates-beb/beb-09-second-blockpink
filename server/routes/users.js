// 특정 유저 정보를 가져오는 API
const express = require("express");
const router = express.Router();
const { getUserById } = require("../controller/usersController");

router.get("/", getUserById);

module.exports = router;
