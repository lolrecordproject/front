import useSWR from "swr";
import { swrGetFetcher } from "../axios";

const useGetProGameData = () => {
  const { data, error } = useSWR(`/isplayedpro`, swrGetFetcher);

  return {
    gameData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetProGameData;
