import axios from "axios";

export const getUserInfo = async (accessToken) => {
  const result = await axios({
    url: `http:/localhost:8080/users/`,
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
