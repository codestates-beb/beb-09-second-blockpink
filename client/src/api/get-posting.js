import axios from "axios";

export const getPosting = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/post/${userId}`);
    const postData = {
      id: response.data.id,
      title: response.data.title,
      content: response.data.content,
      createdAt: response.data.createdAt,
      updatedAt: response.data.updatedAt,
    };
    return postData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
