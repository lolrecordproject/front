import { FC } from "react";

interface PlayerCardProps {
  name: string;
  team: string;
  position: string;
}

// LCK 각 선수를 나타낼 카드
const PlayerCard: FC<PlayerCardProps> = ({ name, team, position }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between bg-gray-600 border border-solid border-black rounded-3xl my-[3%] px-[3%]">
        <img
          className="w-[33%] p-5 my-auto"
          src={`/${team}.svg`}
          alt="Team Logo"
        />
        <div className="w-[33%] flex mx-auto justify-center">
          <p className="my-auto text-black font-bold font-xl text-[36px] text-center pb-2">
            {name}
          </p>
        </div>
        <div className="w-[33%]">
          <img
            className="p-5 my-auto"
            src={`/${position}.svg`}
            alt="Position Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
