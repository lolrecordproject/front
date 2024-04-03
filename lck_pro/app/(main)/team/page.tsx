"use client";

import TeamCard from "@/components/TeamCard";
import useGetTeamData from "@/lib/hooks/useGetTeams";
import { Team } from "@/types/global";

const TeamPage = () => {
  const { teamData } = useGetTeamData();

  console.log(teamData);

  return (
    <div className="bg-white h-screen">
      {teamData?.map((team: Team, index: number) => (
        <TeamCard key={index} name={team.name} />
      ))}
    </div>
  );
};

export default TeamPage;
