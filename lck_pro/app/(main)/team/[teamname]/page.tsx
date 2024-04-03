"use client";

import useGetPlayerData from "@/lib/hooks/useGetPlayers";

const TeamPage = (props: any) => {
  // 라우트 데이터를 매개변수로 데이터 요청 후 저장
  const { playerData, isLoading, isError } = useGetPlayerData(
    props.params.teamname
  );

  console.log(playerData);

  return (
    <div className="bg-white h-screen">
      <h1 className="text-black">Players List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: Unable to fetch player data</p>
      ) : (
        <ul className="text-black">
          {Array.isArray(playerData) &&
            playerData.map((player, index: number) => (
              <li key={index}>{player.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TeamPage;
