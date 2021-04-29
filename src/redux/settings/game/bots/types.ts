import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';

export const SET_BOTS_ENABLED = 'SET_BOTS_ENABLED';
export const SET_BOTS_PROVIDER = 'SET_BOTS_PROVIDER';

export type BotsProviderType = 'AGARBOT.OVH';

export interface IGameBotsState {
  enabled: boolean;
  provider: BotsProviderType;
}

interface SetBotsEnabledAction {
  type: typeof SET_BOTS_ENABLED;
  enabled: boolean;
}

interface SetBotsProviderAction {
  type: typeof SET_BOTS_PROVIDER;
  provider: BotsProviderType;
}

export type GameBotsActionTypes = SetBotsEnabledAction | SetBotsProviderAction;

export type GameBotsThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  GameBotsActionTypes
>;
