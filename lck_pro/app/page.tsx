"use client";

import React from "react";
import useGetProGameData from "@/lib/hooks/useGetProGames";

export default function Main() {
  const { gameData, isLoading, isError } = useGetProGameData();

  console.log(gameData);

  return <div className="bg-white h-screen">asd</div>;
}
