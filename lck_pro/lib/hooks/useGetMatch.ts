import useSWR from "swr";
import { secondFetcher, swrGetFetcher } from "../axios";

const useGetMatchData = (gameId: string) => {
  const { data, error } = useSWR(`/matches/KR_${gameId}`, secondFetcher);

  return {
    matchData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetMatchData;
