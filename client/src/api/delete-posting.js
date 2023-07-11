import axios from "axios";

export const deletePosting = async (accessToken, postId) => {
  try {
    const result = await axios({
      method: "delete",
      url: `http://localhost:8080/post/${postId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return e.response.data;
  }
};
