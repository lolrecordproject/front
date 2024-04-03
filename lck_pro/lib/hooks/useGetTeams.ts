import useSWR from "swr";
import { swrGetFetcher } from "../axios";

const useGetTeamData = () => {
  const { data, error } = useSWR("/getteamlist", swrGetFetcher);

  return {
    teamData: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetTeamData;
