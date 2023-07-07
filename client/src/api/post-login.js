import axios from "axios";

export const postLogin = async (email, password) => {
  const result = await axios({
    url: "http://localhost:8080/auth/login",
    method: "post",
    data: {
      email,
      password,
    },
  });

  return result.data;
};
