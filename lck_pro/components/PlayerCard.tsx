import { FC } from "react";

interface PlayerCardProps {
  name: string;
  team: string;
  position: string;
}

// LCK 각 선수를 나타낼 카드
const PlayerCard: FC<PlayerCardProps> = ({ name, team, position }) => {
  return (
    <div>
      <div className="flex justify-between bg-gray-600 border border-solid border-black rounded-lg my-[3%] px-[3%]">
        <img
          className="w-[30%] p-5 my-auto"
          src={`/${team}.svg`}
          alt="Gengar"
        />
        <div className="w-[70%] flex mx-auto justify-center">
          <p className="my-auto text-black font-bold font-xl text-[36px] text-center pb-2">
            {name}
          </p>
          <img
            className="w-[40%] p-5 my-auto"
            src={`/${position}.svg`}
            alt="Gengar"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
