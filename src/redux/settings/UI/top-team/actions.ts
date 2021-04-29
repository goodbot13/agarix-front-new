import { RGB } from 'redux/settings/theming/types';
import {
  SET_TOP_TEAM_BACKDROP_BLUR,
  SET_TOP_TEAM_BACKGROUND_COLOR,
  SET_TOP_TEAM_DISPLAY_AMOUNT,
  SET_TOP_TEAM_DISPLAY_PLAYER_MASS,
  SET_TOP_TEAM_SHORT_MASS,
  SET_TOP_TEAM_SHOWN,
  SET_TOP_TEAM_TOTAL_MASS,
  SET_TOP_TEAM_TOTAL_PLAYERS,
  UITopTeamsActionTypes,
} from './types';

export const setTopTeamShown = (shown: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_SHOWN,
  shown,
});

export const setTopTeamDisplayAmount = (displayAmount: number): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_DISPLAY_AMOUNT,
  displayAmount,
});

export const setTopTeamDisplayTotalMass = (totalMass: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_TOTAL_MASS,
  totalMass,
});

export const setTopTeamDisplayPlayerMass = (displayPlayerMass: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_DISPLAY_PLAYER_MASS,
  displayPlayerMass,
});

export const setTopTeamShortMass = (shortMass: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_SHORT_MASS,
  shortMass,
});

export const setTopTeamTotalPlayers = (totalPlayers: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_TOTAL_PLAYERS,
  totalPlayers,
});

export const setTopTeamBackgroundColor = (backgroundColor: RGB): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_BACKGROUND_COLOR,
  backgroundColor,
});

export const setTopTeamBackdropBlur = (backdropBlur: boolean): UITopTeamsActionTypes => ({
  type: SET_TOP_TEAM_BACKDROP_BLUR,
  backdropBlur,
});
