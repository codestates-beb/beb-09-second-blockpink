const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
require("dotenv").config();

const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({ pinataJWTKey: process.env.JWT });

const storage = multer.diskStorage({
  destiation: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res, next) => {
  const readableStreamForFile = fs.createReadStream(
    "./uploads/" + req.file.filename
  );
  const options = {
    pinataMetadata: {
      name: SweeterNFT,
      keyvalues: {
        customKey: "customValue",
        customKey2: "customValue2",
      },
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      //handle results here
      console.log(result);
    })
    .catch((err) => {
      //handle error here
      console.log(err);
    });
});

module.exports = router;
