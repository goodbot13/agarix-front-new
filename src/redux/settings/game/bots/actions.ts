import {
  GameBotsActionTypes,
  BotsProviderType,
  SET_BOTS_PROVIDER,
  SET_BOTS_ENABLED,
} from './types';

export const setBotsEnabled = (enabled: boolean): GameBotsActionTypes => ({
  type: SET_BOTS_ENABLED,
  enabled,
});

export const setBotsProvider = (provider: BotsProviderType): GameBotsActionTypes => ({
  type: SET_BOTS_PROVIDER,
  provider,
});
