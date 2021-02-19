import { updateGameServersList } from "redux/game/actions";
import { IGameServer } from "redux/game/types";
import { TStore } from "redux/store";
import { setGameLoaderStatus, setLeaderboardPlayers, setStats, setTopTeamPlayers } from "redux/UI/actions";
import { thunkSetGameLoaderShown } from "redux/UI/thunks";
import { ILeaderboardPlayer, ITopTeamPlayer } from "redux/UI/types";

export const initFrontCommunicationService = (store: TStore) => {
  // @ts-ignore
  window.FrontAPI = {};

  window.FrontAPI.setGameLoaderShown = (shown) => {
    store.dispatch(thunkSetGameLoaderShown(shown));
  };

  window.FrontAPI.setGameLoaderStatus = (status) => {
    store.dispatch(setGameLoaderStatus(status));
  };

  window.FrontAPI.updateStats = (fps, loss) => {
    store.dispatch(setStats({ fps, loss }));
  }

  window.FrontAPI.updateLeaderboard = (leaderboard) => {
    store.dispatch(setLeaderboardPlayers(leaderboard));
  }

  window.FrontAPI.updateTopTeam = (players) => {
    store.dispatch(setTopTeamPlayers(players));
  }

  window.FrontAPI.setRegions = (regions) => {
    store.dispatch(updateGameServersList(regions));
  }
}


declare global {
  interface Window {
    FrontAPI: {
      setGameLoaderStatus: (version: string) => void,
      setGameLoaderShown: (shown: boolean) => void,
      setGameLoaded: (value: boolean) => void,
      updateStats: (fps: number, loss: number) => void,
      updateLeaderboard: (leaderboard: Array<ILeaderboardPlayer>) => void,
      updateTopTeam: (players: Array<ITopTeamPlayer>) => void,
      setRegions: (regions: Array<IGameServer>) => void,
    }
  }
}