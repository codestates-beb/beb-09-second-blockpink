import axios from "axios";

export const getUserInfo = async (userId) => {
  const result = await axios({
    url: `http:/localhost:8080/users/${userId}`,
    method: "get",
  });
};
