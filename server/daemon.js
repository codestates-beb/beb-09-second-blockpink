require('dotenv').config();
const cron = require("node-cron");
const { ethers } = require("ethers");
const { Txes } = require("./models");

// Ethereum 네트워크 연결
const provider = new ethers.providers.JsonRpcProvider(process.env.LOCAL_ENDPOINT);

// 이전에 조회한 가장 최신 블록 번호와 트랜잭션 인덱스
let lastBlockNumber = 0;
let lastTransactionIndex = 0;

// 노드의 최신 블록 번호 조회
const getLatestBlock = async () => {
  return await provider.getBlockNumber();
};

// 트랜잭션 내역 DB에 저장
const saveTransactionToDB = async (transaction) => {
  await Txes.create({
    tx_hash: transaction.hash,
    block: transaction.blockNumber,
  });
};

// DB의 트랜잭션 내역 모두 삭제
const clearTransactions = async () => {
  await Txes.destroy({ where: {} });
};

// DB의 트랜잭션 내역 모두 삭제
clearTransactions();

// 매 초마다 실행 (실행 주기를 설정할 수 있습니다.)
const task = cron.schedule(
  "* * * * * *",
  async () => {
    try {
      // 주기적으로 실행하고자 하는 함수
      const latestBlockNumber = await getLatestBlock();

      // 이전에 저장한 트랜잭션 이후의 새로운 트랜잭션 조회
      for (let blockNumber = lastBlockNumber; blockNumber <= latestBlockNumber; blockNumber++) {
        const block = await provider.getBlock(blockNumber);

        // 이전 블록의 경우 인덱스 초기화. 이후 블록의 경우 인덱스 0부터 시작
        let startTransactionIndex = 0;
        if (blockNumber === lastBlockNumber) {
          startTransactionIndex = lastTransactionIndex + 1;
        }

        for (let i = startTransactionIndex; i < block.transactions.length; i++) {
          const transaction = await provider.getTransaction(block.transactions[i]);

          // 트랜잭션 내역이 있는 경우에만 DB에 저장  -> 토큰 전송 트랜잭션만 저장
          if (transaction.data !== "0x") {
            console.log(`Data: ${transaction.data}`);
            await saveTransactionToDB(transaction);
          }   

        }

        // 최신 블록 번호와 트랜잭션 인덱스 갱신
        lastBlockNumber = blockNumber;
        lastTransactionIndex = block.transactions.length - 1;
      }

      console.log("task is running");
    } catch (err) {
      console.error("Error in task:", err);
    }
  },
  {
    scheduled: false,
  }
);

task.start();
