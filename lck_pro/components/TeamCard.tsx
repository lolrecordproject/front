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
        <div className="border border-solid border-black rounded-lg text-black">
          {name}
        </div>
      </Link>
    </div>
  );
};

export default TeamCard;
