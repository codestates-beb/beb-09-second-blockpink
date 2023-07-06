const express = require("express");
const router = express.Router();
const {ethers} = require("ethers");
const { Users } = require("../models");

//회원가입 미들웨어
router.post("/", (req, res, next) => {

    // 사용자의 정보를 요청의 본문(body)에서 추출합니다.
    const { email, password, nickName } = req.body;

    // 새로운 지갑을 생성합니다.
    const wallet = ethers.Wallet.createRandom();

    // 생성된 지갑과 로컬 Ethereum provider를 연결합니다.
    const userWallet = wallet.connect(ethers.provider);

    // 사용자의 Ethereum 주소와 개인 키를 가져옵니다.
    const userAddress = userWallet.address;
    const privateKey = userWallet.privateKey; //개인 키는 암호화해서 저장하면 좋음?? -> 찾아보자. 


    // 사용자 정보를 데이터베이스에 저장합니다.
    Users.create({
        email: email,
        password: password,
        nickname: nickName,
        address: userAddress,
        privatekey: privateKey,
        token_amount: 0,
        eth_amount: 0,
    })
        .then((user) => {
            // 생성된 사용자 정보를 응답합니다.
            res.status(201).json(user);
        })
        .catch((err) => {
            // 에러가 발생한 경우, 에러를 처리합니다.
            console.error(err);
            next(err);
        });
});
module.exports = router;