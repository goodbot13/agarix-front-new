import { changeGameMode, changeGameServer, updateGameServersList } from "./actions";
import { GameModeTypes, GameThunkActionTypes, IGameServer } from "./types";

export const thunkUpdateGameServerList = (list: Array<IGameServer>): GameThunkActionTypes => (dispatch) => {
  dispatch(updateGameServersList(list));
}

export const thunkChangeGameServer = (i: number): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameServer(i));
  window.GameAPI.setRegion(i);
}

export const thunkChangeGameMode = (mode: GameModeTypes): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameMode(mode));
  window.GameAPI.setMode(mode);
}