import axios from "axios";

export const mintNft = async (tokenURI, token) => {
  try {
    const result = await axios({
      url: "http://localhost:8080/nft/mint",
      method: "post",
      data: {
        tokenURI: tokenURI,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return;
  }
};
