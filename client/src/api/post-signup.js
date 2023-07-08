import axios from "axios";

export const postSignup = async (nickname, email, password) => {
  const result = await axios({
    url: "http://localhost:8080/join",
    method: "post",
    data: { nickname, email, password },
  });
  return result.data;
};
