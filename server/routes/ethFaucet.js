require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const { ethers } = require('ethers');

// ETH Faucet을 지급받는 API
router.post('/', async (req, res, next) => {
  try {
    // 클라이언트로부터 받은 헤더에서 토큰 추출
    const token = req.headers.authorization.split('Bearer ')[1];
    // const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: '토큰이 필요합니다.' });
    }
    console.log(token);
    // 토큰이 유효한지 확인
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: '토큰이 유효하지 않습니다.' });
      }

      // 유저의 계정 정보 가져오기
      const userId = decoded.userId;
      const user = await Users.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ message: '유저를 찾을 수 없습니다.' });
      }

      // 계정 정보를 사용하여 ETH Faucet에서 ETH 전송
      const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
      const wallet = new ethers.Wallet(process.env.FAUCET_SECRET, provider);

      // 전송할 ETH 양 설정 (0.1 ETH)
      const amount = ethers.utils.parseEther('0.1');

      // 전송 수행
      const transaction = await wallet.sendTransaction({
        to: user.address,
        value: amount,
      });

      // 트랜잭션 해시 반환
      const txHash = transaction.hash;



       // 유저의 ETH 양 조회
       const userWallet = new ethers.Wallet(user.privatekey, provider);
       const userBalance = await userWallet.getBalance();
       const updatedEthAmount = ethers.utils.formatEther(userBalance);
 
       // 유저의 ETH 양 업데이트
       await user.update({ eth_amount: updatedEthAmount });




      return res.status(200).json({ message: `ETH를 성공적으로 전송했습니다. 현재 User의 ether양: ${user.eth_amount}`, txHash });
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
