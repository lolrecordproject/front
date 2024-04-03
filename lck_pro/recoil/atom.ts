import { Player, Team } from "@/types/global";
import { atom } from "recoil";

// 현재 선택된 플레이어 상태 관리
export const selectedPlayerState = atom<Player>({
  key: "selectedPlayerState",
  default: {
    name: "playerName",
    nickname: "playerNickname",
    tagline: "#kr1",
    team: "playerTeam",
  },
});

export const selectedTeamState = atom<Team>({
  key: "teamState",
  default: {
    name: "teamName",
  },
});
