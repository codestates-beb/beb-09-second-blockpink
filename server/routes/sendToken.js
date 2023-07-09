require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const { ethers } = require("ethers");


// 사용자간 토큰 교환
router.post("/", (req, res, next) => {

    try {
        const token = req.headers.authorization.split('Bearer ')[1];

        if (!token) {
            return res.status(401).json({ msg: "토큰이 필요합니다." });
        }

        jwt.verify(token, process.env.ACCESS_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ msg: "토큰이 만료되었습니다." });
            }

            // 발신자 아이디 가져오기.
            const senderId = decoded.userId;
            const sender = await Users.findOne({ where: { id: senderId } });

            // 수신자 아이디, 전송 jwt양 가져오기.
            const { receiver_email, swt_amount } = req.body;
            const receiver = await Users.findOne({ where: { email: receiver_email } });

            // 발신자의 잔액이 전송할 양보다 적으면 에러.
            if (sender.token_amount < swt_amount) {
                return res.status(400).json({ msg: "잔액이 부족합니다." });
            }
            // 수신자가 존재하지 않으면 에러.
            if (!receiver) {
                return res.status(400).json({ msg: "수신자가 존재하지 않습니다." });
            }

            

            //로컬 블록체인 연결
            const provider = new ethers.providers.JsonRpcProvider(process.env.LOCAL_ENDPOINT);

            //발신자 및 수신자 지갑 연결
            const senderWallet = new ethers.Wallet(sender.privatekey, provider);
            const receiverWallet = new ethers.Wallet(receiver.privatekey, provider);

            //SWT 토큰 컨트랙트 정보 설정
            const tokenContractAddress = process.env.ERC20_CONTRACT;
            const tokenContractABI = require("../../contracts/out/SweetToken.sol/SweetToken.json")
                .abi;
            const tokenContract = new ethers.Contract(
                tokenContractAddress,
                tokenContractABI,
                senderWallet
            );

            const transferTx = await tokenContract.transfer(
                receiver.address,
                swt_amount
            );

            await transferTx.wait();
        


            //발신자, 수신자의 지갑계정을 조회하고 이를 통해 토큰 양을 DB에 업데이트

            const senderBalance = ethers.BigNumber.from(await tokenContract.balanceOf(sender.address)).toString();
            const receiverBalance =ethers.BigNumber.from(await tokenContract.balanceOf(receiver.address)).toString();

            await Users.update(
                { token_amount: senderBalance },
                { where: { id: senderId } }
            );
            await Users.update(
                { token_amount: receiverBalance },
                { where: { email: receiver_email } }
            );

            console.log(`sender : ${senderBalance} , receiver : ${receiverBalance}` );

            return res.status(200).json({ msg: "토큰 전송이 완료되었습니다." });
            



        });


    } catch (err) {
        console.log(err);
        res.status(500).send("서버 에러");
    }

});

module.exports = router;