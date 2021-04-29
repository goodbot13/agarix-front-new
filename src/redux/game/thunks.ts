import { changeGameMode, changeGameServer, updateGameServersList } from './actions';
import { GameActionTypes, GameModeTypes, GameThunkActionTypes, IGameServer } from './types';

export const thunkUpdateGameServerList = (list: Array<IGameServer>): GameThunkActionTypes => (
  dispatch: (arg0: GameActionTypes) => void,
) => {
  dispatch(updateGameServersList(list));
};

export const thunkChangeGameServer = (i: number): GameThunkActionTypes => (
  dispatch: (arg0: GameActionTypes) => void,
) => {
  dispatch(changeGameServer(i));
  window.GameAPI.setRegion(i);
};

export const thunkChangeGameMode = (mode: GameModeTypes): GameThunkActionTypes => (
  dispatch: (arg0: GameActionTypes) => void,
) => {
  dispatch(changeGameMode(mode));
  window.GameAPI.setMode(mode);
};
