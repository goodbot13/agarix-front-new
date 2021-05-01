import {
  GameBotsActionTypes,
  BotsProviderType,
  SET_BOTS_PROVIDER,
  SET_BOTS_ENABLED,
  SET_BOTS_STARTED
} from './types';

export const setBotsEnabled = (enabled: boolean): GameBotsActionTypes => ({
  type: SET_BOTS_ENABLED,
  enabled,
});

export const setBotsProvider = (provider: BotsProviderType): GameBotsActionTypes => ({
  type: SET_BOTS_PROVIDER,
  provider,
});

export const setBotsStarted = (started: boolean): GameBotsActionTypes => ({
  type: SET_BOTS_STARTED,
  started,
});
