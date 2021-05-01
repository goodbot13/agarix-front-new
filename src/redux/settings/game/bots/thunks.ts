import GameBotsSettings from 'api/settings/Game/GameBotsSettings';

import { setBotsProvider, setBotsEnabled, setBotsStarted } from './actions';

import { GameBotsThunkActionTypes, BotsProviderType } from './types';

export const thunkSetBotsEnabled = (enabled: boolean): GameBotsThunkActionTypes => (dispatch) => {
  dispatch(setBotsEnabled(enabled));
  GameBotsSettings.setBotsEnabled(enabled);
};

export const thunkSetBotsProvider = (provider: BotsProviderType): GameBotsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setBotsProvider(provider));
  GameBotsSettings.setBotsProvider(provider);
};

export const thunkSetBotsStarted = (started: boolean): GameBotsThunkActionTypes => (dispatch) => {
  dispatch(setBotsStarted(started));
  GameBotsSettings.setBotsStarted(started);
};
