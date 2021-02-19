import { FC } from "react";
import Leaderboard from "./leaderboard";
import Stats from "./stats";
import TopTeam from "./top-team";

const Huds: FC = () => {
  return (
    <>
      <Leaderboard />
      <Stats />
      <TopTeam />
    </>
  ) 
}

export default Huds;