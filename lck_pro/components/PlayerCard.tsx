import { FC } from "react";

interface PlayerCardProps {
  name: string;
}

// LCK 각 팀을 나타낼 카드
const PlayerCard: FC<PlayerCardProps> = ({ name }) => {
  return (
    <div>
      <div className="bg-gray-200 border border-solid border-black rounded-lg my-[3%]">
        <p className="text-black">{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
