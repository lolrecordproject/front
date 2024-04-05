"use client";

import React, { useRef } from "react";
import useGetProGameData from "@/lib/hooks/useGetProGames";
import { useInView } from "react-intersection-observer";
import PlayerCard from "@/components/PlayerCard";

export default function Main() {
  const { gameData, isLoading, isError } = useGetProGameData();
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const [ref3, inView3] = useInView({ threshold: 0.3 });

  console.log(gameData);

  return (
    <div className="bg-black">
      <div
        ref={ref1}
        className={`flex justify-center h-screen bg-black ${
          inView1
            ? "opacity-100 transition-opacity duration-1000 delay-300"
            : "opacity-0 delay-10000"
        }`}
      >
        <div className="text-white font-bold my-auto">
          LCK 프로선수들의 솔로랭크 현황을 확인 하세요.
        </div>
      </div>
      <div
        ref={ref2}
        className={`flex justify-center h-screen ${
          inView2
            ? "opacity-100 transition-opacity duration-1000 delay-300"
            : "opacity-0 delay-10000"
        }`}
      >
        <div className="text-white font-bold my-auto text-lg items-center">
          현재 게임중인 프로게이머는
        </div>
      </div>
      <div
        ref={ref3}
        className={`flex justify-center h-screen ${
          inView3
            ? "opacity-100 transition-opacity duration-1000 delay-300"
            : "opacity-0 delay-10000"
        }`}
      >
        <div className="w-[15%] min-w-[300px]">
          <PlayerCard name="Chovy" team="geng" position="mid" />
          <PlayerCard name="gumayusi" team="t1" position="ad" />
        </div>
      </div>
    </div>
  );
}
