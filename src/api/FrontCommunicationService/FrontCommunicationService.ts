import FrametimeCalculator from 'api/FrametimeCalculator/FrametimeCalculator';
import { updateGameServersList } from 'redux/game/actions';
import { IGameServer } from 'redux/game/types';
import { setFacebookLoggedIn, setGoogleLoggedIn } from 'redux/profiles/actions';
import { TStore } from 'redux/store';
import {
  addChatMessage,
  setGameLoaderStatus,
  setIsPlayerPlaying,
  setLeaderboardPlayers,
  setStats,
  setTopTeamPlayers,
} from 'redux/UI/actions';
import { thunkSetGameLoaderShown } from 'redux/UI/thunks';
import { ILeaderboardPlayer, ITopTeamPlayer, TChatMessageType } from 'redux/UI/types';

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
  };

  window.FrontAPI.updateLeaderboard = (leaderboard) => {
    store.dispatch(setLeaderboardPlayers(leaderboard));
  };

  window.FrontAPI.updateTopTeam = (players) => {
    store.dispatch(setTopTeamPlayers(players));
  };

  window.FrontAPI.setRegions = (regions) => {
    store.dispatch(updateGameServersList(regions));
  };

  window.FrontAPI.setEllapsedFrametime = (ms) => {
    FrametimeCalculator.updateElapsed(ms);
  };

  window.FrontAPI.setIsPlayerPlaying = (value) => {
    store.dispatch(setIsPlayerPlaying(value));
  };

  window.FrontAPI.setFacebookLoggedIn = (value) => {
    store.dispatch(setFacebookLoggedIn(value));
  };

  window.FrontAPI.setGoogleLoggedIn = (value) => {
    store.dispatch(setGoogleLoggedIn(value));
  };

  window.FrontAPI.addChatMessage = (nick, message, type, key) => {
    store.dispatch(addChatMessage({ nick, message, type, key }));
  };
};

declare global {
  interface Window {
    FrontAPI: {
      setGameLoaderStatus: (version: string) => void;
      setGameLoaderShown: (shown: boolean) => void;
      setGameLoaded: (value: boolean) => void;
      updateStats: (fps: number, loss: number) => void;
      updateLeaderboard: (leaderboard: Array<ILeaderboardPlayer>) => void;
      updateTopTeam: (players: Array<ITopTeamPlayer>) => void;
      setRegions: (regions: Array<IGameServer>) => void;
      setEllapsedFrametime: (ms: number) => void;
      setIsPlayerPlaying: (value: boolean) => void;
      setGoogleLoggedIn: (value: boolean) => void;
      setFacebookLoggedIn: (value: boolean) => void;
      addChatMessage: (nick: string, message: string, type: TChatMessageType, key: number) => void;
    };
  }
}
