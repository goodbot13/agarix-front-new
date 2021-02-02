import { 
  GameActionTypes,
  UPDATE_GAME_SERVERS_LIST,
  CHANGE_GAME_SERVER, 
  CHANGE_GAME_MODE, 
  CHANGE_GAME_TAG,
  GameModeTypes,
  IGameServer,
  CHANGE_GAME_TOKEN,
} from "./types";

export const updateGameServersList = (servers: Array<IGameServer>): GameActionTypes => ({
  type: UPDATE_GAME_SERVERS_LIST,
  servers
});

export const changeGameServer = (currentServerIndex: number): GameActionTypes => ({
  type: CHANGE_GAME_SERVER,
  currentServerIndex
});

export const changeGameMode = (mode: GameModeTypes): GameActionTypes => ({
  type: CHANGE_GAME_MODE,
  mode
});

export const changeGameTag = (tag: string): GameActionTypes => ({
  type: CHANGE_GAME_TAG,
  tag
});

export const changeGameToken = (token: string): GameActionTypes => ({
  type: CHANGE_GAME_TOKEN,
  token
})


