import FrametimeCalculator from "api/FrametimeCalculator/FrametimeCalculator";
import { changeGameServerToken, changeGameToken, updateGameServersList } from "redux/game/actions";
import { IGameServer } from "redux/game/types";
import { setFacebookLoggedIn, setGoogleLoggedIn } from "redux/profiles/actions";
import { setFirstTabStatus, setSecondTabStatus, setSpectatorTabStatus } from "redux/settings/UI/stats/actions";
import { TStatsTabStatus } from "redux/settings/UI/stats/types";
import { TStore } from "redux/store";
import { addChatMessage, setGameLoaderStatus, setGameSocketConnecting, setGhostCells, setIsPlayerPlaying, setLeaderboardPlayers, setPlayerMass, setStats, setTopTeamPlayers } from "redux/UI/actions";
import { thunkSetGameLoaderShown } from "redux/UI/thunks";
import { IGhostCell, ILeaderboardPlayer, ITopTeamPlayer, TChatMessageType } from "redux/UI/types";

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

  window.FrontAPI.updateGhostCells = (ghostCells) => {
    store.dispatch(setGhostCells(ghostCells));
  }

  window.FrontAPI.updateTopTeam = (players) => {
    store.dispatch(setTopTeamPlayers(players));
  }

  window.FrontAPI.setRegions = (regions) => {
    store.dispatch(updateGameServersList(regions));
  }

  window.FrontAPI.setEllapsedFrametime = (ms) => {
    FrametimeCalculator.updateElapsed(ms);
  }

  window.FrontAPI.setIsPlayerPlaying = (value) => {
    store.dispatch(setIsPlayerPlaying(value));
  }

  window.FrontAPI.setFacebookLoggedIn = (value) => {
    store.dispatch(setFacebookLoggedIn(value));
  }

  window.FrontAPI.setGoogleLoggedIn = (value) => {
    store.dispatch(setGoogleLoggedIn(value));
  }

  window.FrontAPI.addChatMessage = (nick, message, type, key) => {
    store.dispatch(addChatMessage({ nick, message, type, key }))
  }

  window.FrontAPI.setToken = (value) => {
    store.dispatch(changeGameToken(value));
  }

  window.FrontAPI.setServerToken = (value) => {
    store.dispatch(changeGameServerToken(value));
  }

  window.FrontAPI.setSocketConnecting = (value) => {
    store.dispatch(setGameSocketConnecting(value));
  }

  window.FrontAPI.setFirstTabStatus = (value) => {
    store.dispatch(setFirstTabStatus(value));
  }

  window.FrontAPI.setSecondTabStatus = (value) => {
    store.dispatch(setSecondTabStatus(value));
  }

  window.FrontAPI.setSpectatorTabStatus = (value) => {
    store.dispatch(setSpectatorTabStatus(value));
  }

  window.FrontAPI.setMyMass = (value) => {
    store.dispatch(setPlayerMass(value));
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
      updateGhostCells: (ghostCells: Array<IGhostCell>) => void,
      updateTopTeam: (players: Array<ITopTeamPlayer>) => void,
      setRegions: (regions: Array<IGameServer>) => void,
      setEllapsedFrametime: (ms: number) => void,
      setIsPlayerPlaying: (value: boolean) => void,
      setGoogleLoggedIn: (value: boolean) => void,
      setFacebookLoggedIn: (value: boolean) => void,
      addChatMessage: (nick: string, message: string, type: TChatMessageType, key: number) => void,
      setToken: (value: string) => void,
      setServerToken: (value: string) => void,
      setSocketConnecting: (value: boolean) => void,
      setFirstTabStatus: (value: TStatsTabStatus) => void,
      setSecondTabStatus: (value: TStatsTabStatus) => void,
      setSpectatorTabStatus: (value: TStatsTabStatus) => void,
      setMyMass: (value: number) => void
    }
  }
}