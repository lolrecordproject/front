"use client";
import { getPlayerByTeam } from "@/lib/api/GetPlayers";
import { useEffect, useState } from "react";

const TeamPage = (props: any) => {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await getPlayerByTeam(props.params.teamname); // 해당 팀의 플레이어 데이터 가져오기
        if (playerData) {
          setPlayers(playerData); // 플레이어 데이터 설정
        }
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchData();
  }, [props.params.teamname]); // props.params.teamname이 변경될 때마다 실행

  console.log(players);

  return (
    <div className="bg-white h-screen">
      {props.params.teamname}
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li> // 플레이어의 이름 등을 출력
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
