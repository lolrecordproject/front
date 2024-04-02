"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const TeamPage = (props: any) => {
  const [players, setPlayers] = useState([]);
  const [teamName, setTeamName] = useState(props.params.teamname);

  console.log(teamName);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await axios.get(
          `http://localhost:8000/getplayerbyteam/${teamName}`
        );
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchPlayers();
  }, [teamName]);

  console.log(players);

  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
