import axios from "axios";

export const ethFaucet = async (accessToken) => {
  const result = await axios({
    url: "http://localhost:8080/eth-faucet",
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result.data;
};
