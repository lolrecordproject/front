import Link from "next/link";
import { FC } from "react";

interface TeamCardProps {
  name: string;
}

// LCK 각 팀을 나타낼 카드
const TeamCard: FC<TeamCardProps> = ({ name }) => {
  return (
    <div>
      <Link href="/team/[teamname]" as={`/team/${name}`}>
        <div className="bg-gray-200 border border-solid border-black rounded-lg my-[1%]">
          <p className="text-black mx-36">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default TeamCard;
