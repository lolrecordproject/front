"use client";

import useGetMatchData from "@/lib/hooks/useGetMatch";

const MatchDetailPage = (props: any) => {
  const { matchData, isLoading, isError } = useGetMatchData(
    props.params.matchid
  );
  
  console.log(matchData);

  return (
    <div className="bg-white h-screen overflow-auto">
      <h1 className="text-black">{props.params.matchid}</h1>
    </div>
  );
};

export default MatchDetailPage;
