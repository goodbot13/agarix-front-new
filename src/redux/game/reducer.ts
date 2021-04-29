import Storage from 'api/storage/Storage';

import {
  IGameState,
  GameActionTypes,
  CHANGE_GAME_MODE,
  CHANGE_GAME_SERVER,
  UPDATE_GAME_SERVERS_LIST,
  CHANGE_GAME_TOKEN,
  CHANGE_GAME_SERVER_TOKEN,
  CHANGE_SELECTED_GAME_TOKEN_TYPE,
} from './types';

const initState: IGameState = Storage.get().game;

export const gameReducer = (state = initState, action: GameActionTypes): IGameState => {
  switch (action.type) {
    case UPDATE_GAME_SERVERS_LIST:
      return {
        ...state,
        servers: [...action.servers],
      };

    case CHANGE_GAME_SERVER:
      return {
        ...state,
        currentServerIndex: action.currentServerIndex,
      };

    case CHANGE_GAME_MODE:
      return {
        ...state,
        mode: action.mode,
      };

    case CHANGE_GAME_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case CHANGE_GAME_SERVER_TOKEN:
      return {
        ...state,
        gameServerToken: action.gameServerToken,
      };

    case CHANGE_SELECTED_GAME_TOKEN_TYPE:
      return {
        ...state,
        selectedGameTokenType: action.selectedGameTokenType,
      };

    default:
      return state;
  }
};
