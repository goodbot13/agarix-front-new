import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';

export const SET_BOTS_ENABLED = 'SET_BOTS_ENABLED';
export const SET_BOTS_PROVIDER = 'SET_BOTS_PROVIDER';
export const SET_BOTS_STARTED = 'SET_BOTS_STARTED';

export type BotsProviderType = 'AGARBOT.OVH';

export interface IGameBotsState {
  enabled: boolean;
  provider: BotsProviderType;
  started: boolean;
}

interface SetBotsEnabledAction {
  type: typeof SET_BOTS_ENABLED;
  enabled: boolean;
}

interface SetBotsProviderAction {
  type: typeof SET_BOTS_PROVIDER;
  provider: BotsProviderType;
}

interface SetBotsStartedAction {
  type: typeof SET_BOTS_STARTED;
  started: boolean;
}
export type GameBotsActionTypes =
  | SetBotsEnabledAction
  | SetBotsProviderAction
  | SetBotsStartedAction;

export type GameBotsThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  GameBotsActionTypes
>;
