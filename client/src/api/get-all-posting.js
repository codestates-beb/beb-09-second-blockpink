import axios from "axios";

export const getAllPosting = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/post`);
    const result = response.data.posts.map((el) => {
      return el.id;
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
