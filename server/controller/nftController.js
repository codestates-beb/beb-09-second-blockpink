const { ethers } = require("ethers");

module.exports = {
  mintNft: async (req, res) => {
    // 1. 유저에게 이미지 파일을 받는다.
    // 2. 이미지 파일을 IPFS에 올리고 pinning 한다.
    // 3. tokenURI를 얻어온 후, db의 ipfs_hash, n_userId 업데이트
    // 4. NFTLootBox에게 유저의 100 SWT를 approve 해준다.
    // 3. 서버 계정으로 NFTLootBox의 mintNFT를 호출한다.
    const { image } = req.body;

    try {
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error");
    }
  },
};
