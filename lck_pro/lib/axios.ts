import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export default axiosInstance;

export const swrGetFetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw new Error("데이터를 가져오는 중에 오류가 발생했습니다.");
  }
};
