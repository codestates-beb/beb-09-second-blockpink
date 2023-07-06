//1.유저 NFT 민팅 API
const express = require("express");
const router = express.Router();
const { mintNft } = require("../controller/nftController");

// NFT 민팅 API
router.post("/mint", mintNft);

module.exports = router;
