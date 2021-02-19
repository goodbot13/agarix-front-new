import ClientCommunicationService from "api/ClientCommunicationService/ClientCommunicationService";
import { changeGameMode, changeGameServer, changeGameTag, changeGameToken, updateGameServersList } from "./actions";
import { GameModeTypes, GameThunkActionTypes, IGameServer } from "./types";

export const thunkUpdateGameServerList = (list: Array<IGameServer>): GameThunkActionTypes => (dispatch) => {
  dispatch(updateGameServersList(list));
}

export const thunkChangeGameServer = (i: number): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameServer(i));
  ClientCommunicationService.setRegion(i);
}

export const thunkChangeGameMode = (mode: GameModeTypes): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameMode(mode));
  ClientCommunicationService.setMode(mode);
}

export const thunkChangeGameTag = (tag: string): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameTag(tag)); 
  ClientCommunicationService.setTag(tag);
}

export const thunkChangeGameToken = (token: string): GameThunkActionTypes => (dispatch) => {
  dispatch(changeGameToken(token));
}