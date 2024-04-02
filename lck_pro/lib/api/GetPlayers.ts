import axios, { AxiosError } from "axios";

interface Player {
  name: string;
}

const getPlayersByTeam = async (teamName: string): Promise<Player[]> => {
  try {
    const response = await axios.get<Player[]>(
      `http://localhost:8000/getplayerbyteam/${teamName}`
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // 서버로부터 응답이 왔지만 응답 코드가 2xx가 아닌 경우
      throw new Error(
        `Request failed with status ${axiosError.response.status}`
      );
    } else if (axiosError.request) {
      // 요청이 만들어졌지만 응답을 받지 못한 경우
      throw new Error("No response received");
    } else {
      // 요청을 설정하는 중에 문제가 발생한 경우
      throw new Error("Error setting up the request");
    }
  }
};

export default getPlayersByTeam;
