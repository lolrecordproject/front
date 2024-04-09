import useSWR from "swr";
import { secondFetcher, swrGetFetcher } from "../axios";

const useGetMatchData = () => {
  const { data, error } = useSWR(`/matches/KR_7021918161`, secondFetcher);

  return {
    matchData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetMatchData;
