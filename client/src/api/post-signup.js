import axios from "axios";

export const postSignup = async (nickname, email, password) => {
  try {
    const result = await axios({
      url: "http://localhost:8080/join",
      method: "post",
      data: { nickname, email, password },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return e.response.data;
  }
};
