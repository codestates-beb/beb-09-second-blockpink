import axios from "axios";

export const getPosting = async (id) => {
  try {
    const result = await axios({
      url: `http://localhost:8080/post/${id}`,
      method: "get",
    });
    return result.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
