import Storage from 'api/storage/Storage';
import {
  GameBotsActionTypes,
  IGameBotsState,
  SET_BOTS_ENABLED,
  SET_BOTS_PROVIDER,
  SET_BOTS_STARTED,
} from './types';

const initState: IGameBotsState = Storage.get().settings.game.bots;

export const gameBotsReducer = (state = initState, action: GameBotsActionTypes): IGameBotsState => {
  switch (action.type) {
    case SET_BOTS_ENABLED:
      return {
        ...state,
        enabled: action.enabled,
      };

    case SET_BOTS_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      };

    case SET_BOTS_STARTED:
      return {
        ...state,
        started: action.started,
      };

    default:
      return state;
  }
};
