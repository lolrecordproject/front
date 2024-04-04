"use client";

import TeamCard from "@/components/TeamCard";
import useGetTeamData from "@/lib/hooks/useGetTeams";
import { Team } from "@/types/global";

const TeamPage = () => {
  const { teamData } = useGetTeamData();

  console.log(teamData);

  return (
    <div className="bg-white h-screen">
      <div className="w-[80%] mx-auto max-w-4xl min-w-xs">
        {teamData?.map((team: Team, index: number) => (
          <TeamCard key={index} name={team.name} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
