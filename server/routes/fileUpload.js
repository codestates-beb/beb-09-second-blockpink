const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
require("dotenv").config();

const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({ pinataJWTKey: process.env.JWT });

// 스토리지 & 저장 위치 & 저장 파일 이름 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

// 파일 업로드 및 라우팅
router.post("/", upload.single("file"), (req, res, next) => {
  const readableStreamForFile = fs.createReadStream(
    "./uploads/" + req.file.filename
  );
  const options = {
    pinataMetadata: {
      name: "SweeterNFT",
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "pinning image to ipfs",
        ipfsHash: result.IpfsHash,
      });
    })
    .catch((err) => {
      //handle error here
      console.log(err);
      res.status(400).send("improper request");
    });
});

module.exports = router;
