"use client";

import { useEffect } from "react";
import PlayerCard from "@/components/PlayerCard";
import useGetPlayerData from "@/lib/hooks/useGetPlayers";

const TeamDetailPage = (props: any) => {
  // 라우트 데이터를 매개변수로 데이터 요청 후 저장
  const { playerData, isLoading, isError } = useGetPlayerData(
    props.params.teamname
  );

  useEffect(() => {
    console.log(playerData);
  }, [playerData]);

  return (
    <div className="bg-white h-screen overflow-auto">
      <h1 className="text-black">Players List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: Unable to fetch player data</p>
      ) : (
        <div className="w-[80%] mx-auto max-w-4xl min-w-xs">
          {Array.isArray(playerData) &&
            playerData.map((player, index: number) => (
              <PlayerCard
                key={player.id} // 고유한 key를 제공합니다.
                name={player.name}
                team={player.team}
                position={player.position}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default TeamDetailPage;
