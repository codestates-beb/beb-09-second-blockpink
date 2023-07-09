import axios from "axios";

export const registerPosting = async (title, content, token) => {
  try {
    const result = await axios({
      url: "http://localhost:8080/post/register",
      method: "post",
      data: {
        title: title,
        content: content,
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
