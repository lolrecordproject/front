"use client";

import React, { useRef } from "react";
import useGetProGameData from "@/lib/hooks/useGetProGames";
import { useInView } from "react-intersection-observer";
import PlayerCard from "@/components/PlayerCard";

export default function Main() {
  const { gameData, isLoading, isError } = useGetProGameData();
  const [ref1, inView1] = useInView({ threshold: 0.7 });
  const [ref2, inView2] = useInView({ threshold: 0.7 });
  const [ref3, inView3] = useInView({ threshold: 0.7 });

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
        <div className="text-white font-bold my-auto text-4xl">
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
        <div className="text-white font-bold my-auto text-4xl">
          현재 게임중인 프로게이머는
        </div>
      </div>
      <div ref={ref3} className={"flex justify-center h-screen"}>
        <div className={`w-[30%] min-w-[400px] max-w-[600px]`}>
          <div
            className={`${
              inView3
                ? "opacity-100 transition-opacity duration-1000 delay-300"
                : "opacity-0 delay-10000"
            }`}
          >
            <PlayerCard name="Chovy" team="geng" position="mid" />
          </div>
          <div
            className={`${
              inView3
                ? "opacity-100 transition-opacity duration-1000 delay-700"
                : "opacity-0 delay-10000"
            }`}
          >
            <PlayerCard name="Gumayusi" team="t1" position="ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
