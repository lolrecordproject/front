import useSWR from "swr";
import { swrGetFetcher } from "../axios";

const useGetPlayerData = (teamName: string) => {
  const { data, error } = useSWR(`/getplayerbyteam/${teamName}`, swrGetFetcher);

  return {
    playerData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetPlayerData;
