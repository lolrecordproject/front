"use client";

import React, { useRef } from "react";
import useGetProGameData from "@/lib/hooks/useGetProGames";
import { useInView } from "react-intersection-observer";
import PlayerCard from "@/components/PlayerCard";
import Link from "next/link";

export default function Main() {
  const { gameData, isLoading, isError } = useGetProGameData();
  const [ref1, inView1] = useInView({ threshold: 0.7 });
  const [ref2, inView2] = useInView({ threshold: 0.7 });
  const [ref3, inView3] = useInView({ threshold: 0.7 });

  console.log(gameData);

  return (
    <div className="bg-black overflow-y-auto">
      <div ref={ref1} className={"flex justify-center h-screen"}>
        <div className={`w-[30%] min-w-[400px] max-w-[600px]`}>
          {gameData &&
            Object.keys(gameData).map((gameId) => (
              <div key={gameId}>
                <Link href="/match/[matchid]" as={`/match/${gameId}`}>
                  <div className="border rounded-3xl border-white p-5">
                    <h2 className="text-white">Game ID: {gameId}</h2>
                    {gameData[gameId].map((player: any, index: any) => (
                      <div
                        key={index}
                        className={`${
                          inView1
                            ? "opacity-100 transition-opacity duration-1000 delay-300"
                            : "opacity-0 delay-10000"
                        }`}
                      >
                        <PlayerCard
                          name={player.name}
                          team={player.team}
                          position={player.position}
                        />
                      </div>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div ref={ref2} className={"flex justify-center h-screen"}>
        <div className={`w-[30%] min-w-[400px] max-w-[600px]`}>
          <div
            className={`${
              inView1
                ? "opacity-100 transition-opacity duration-1000 delay-300"
                : "opacity-0 delay-10000"
            }
            text-white`}
          >
            하이용
          </div>
        </div>
      </div>
    </div>
  );
}
