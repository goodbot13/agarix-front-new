export const UPDATE_GAME_SERVERS_LIST = 'UPDATE_GAME_SERVERS_LIST';
export const CHANGE_GAME_SERVER = 'CHANGE_GAME_SERVER';
export const CHANGE_GAME_MODE = 'CHANGE_GAME_MODE';
export const CHANGE_GAME_TAG = 'CHANGE_GAME_TAG';
export const CHANGE_GAME_TOKEN = 'CHANGE_GAME_TOKEN';

export type GameModeTypes = 'Party' | 'FFA' | 'Battle Royale' | 'Teams' | 'Experimental';
export type GameServerLocationTypes = 'South America' | 'China' | 'Europe' | 'East Asia' | 'Russia' | 'Oceania' | 'Turkey' | 'North America';

export interface IGameServer {
  location: GameServerLocationTypes,
  playersAmount: number,
}

export interface IGameState {
  servers: Array<IGameServer>,
  currentServerIndex: number,
  mode: GameModeTypes,
  tag: string,
  token: string
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

interface ChangeGameTagAction {
  type: typeof CHANGE_GAME_TAG,
  tag: string
}

interface ChangeGameTokenAction {
  type: typeof CHANGE_GAME_TOKEN,
  token: string
}

export type GameActionTypes = UpdateGameServersListAction | ChangeGameServerAction | 
                              ChangeGameModeAction | ChangeGameTagAction | ChangeGameTokenAction;