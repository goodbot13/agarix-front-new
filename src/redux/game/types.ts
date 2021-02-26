import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const UPDATE_GAME_SERVERS_LIST = 'UPDATE_GAME_SERVERS_LIST';
export const CHANGE_GAME_SERVER = 'CHANGE_GAME_SERVER';
export const CHANGE_GAME_MODE = 'CHANGE_GAME_MODE';
export const CHANGE_GAME_TOKEN = 'CHANGE_GAME_TOKEN';
export const CHANGE_GAME_SERVER_TOKEN = 'CHANGE_GAME_SERVER_TOKEN';
export const CHANGE_SELECTED_GAME_TOKEN_TYPE = 'CHANGE_SELECTED_GAME_TOKEN_TYPE';

export type GameModeTypes = ':party' | ':ffa' | ':battleroyale' | ':teams' | ':experimental';
export type GameServerLocationTypes = 'South America' | 'China' | 'Europe' | 'East Asia' | 'Russia' | 'Oceania' | 'Turkey' | 'North America';
export type GameSelectedGameTokenTypes = 'PARTY' | 'SERVER';

export interface IGameServer {
  location: GameServerLocationTypes,
  playersAmount: number,
}

export interface IGameState {
  servers: Array<IGameServer>,
  currentServerIndex: number,
  mode: GameModeTypes,
  tag: string,
  token: string,
  gameServerToken: string,
  selectedGameTokenType: GameSelectedGameTokenTypes
}

interface UpdateGameServersListAction {
  type: typeof UPDATE_GAME_SERVERS_LIST,
  servers: Array<IGameServer>
}

interface ChangeGameServerAction {
  type: typeof CHANGE_GAME_SERVER,
  currentServerIndex: number
}

interface ChangeGameModeAction {
  type: typeof CHANGE_GAME_MODE,
  mode: GameModeTypes
}

interface ChangeGameTokenAction {
  type: typeof CHANGE_GAME_TOKEN,
  token: string
}

interface ChangeGameServerToken {
  type: typeof CHANGE_GAME_SERVER_TOKEN,
  gameServerToken: string
}

interface ChangeSelectedGameTokenTypeAction {
  type: typeof CHANGE_SELECTED_GAME_TOKEN_TYPE,
  selectedGameTokenType: GameSelectedGameTokenTypes
}

export type GameActionTypes = UpdateGameServersListAction | ChangeGameServerAction | ChangeGameServerToken |
                              ChangeGameModeAction | ChangeGameTokenAction | ChangeSelectedGameTokenTypeAction;

export type GameThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameActionTypes>;