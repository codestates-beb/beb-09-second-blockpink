import axios from "axios";

export const updatePosting = async (accessToken, data) => {
  try {
    const result = await axios.put(
      `http://localhost:8080/post/${data.id}`,
      {
        title: data.title,
        content: data.content,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.log(e);
    return e.response.data;
  }
};
