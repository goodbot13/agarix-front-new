import { RGB } from "redux/settings/theming/types";

export const SET_TOP_TEAM_SHOWN = 'SET_TOP_TEAM_SHOWN';
export const SET_TOP_TEAM_DISPLAY_AMOUNT = 'SET_TOP_TEAM_DISPLAY_AMOUNT';
export const SET_TOP_TEAM_DISPLAY_PLAYER_MASS = 'SET_TOP_TEAM_DISPLAY_PLAYER_MASS';
export const SET_TOP_TEAM_TOTAL_MASS = 'SET_TOP_TEAM_TOTAL_MASS';
export const SET_TOP_TEAM_TOTAL_PLAYERS = 'SET_TOP_TEAM_TOTAL_PLAYERS';
export const SET_TOP_TEAM_BACKGROUND_COLOR = 'SET_TOP_TEAM_BACKGROUND_COLOR';
export const SET_TOP_TEAM_BACKDROP_BLUR = 'SET_TOP_TEAM_BACKDROP_BLUR';
export const SET_TOP_TEAM_SHORT_MASS = 'SET_TOP_TEAM_SHORT_MASS';

export interface IUITopTeamState {
  shown: boolean,
  displayAmount: number,
  displayPlayerMass: boolean,
  totalMass: boolean,
  shortMass: boolean,
  totalPlayers: boolean,
  backgroundColor: RGB,
  backdropBlur: boolean
}

interface SetShownAction {
  type: typeof SET_TOP_TEAM_SHOWN,
  shown: boolean
}

interface SetDisplayAmountAction {
  type: typeof SET_TOP_TEAM_DISPLAY_AMOUNT,
  displayAmount: number
}

interface SetTotalMassAction {
  type: typeof SET_TOP_TEAM_TOTAL_MASS,
  totalMass: boolean
}

interface SetPlayerMassAction {
  type: typeof SET_TOP_TEAM_DISPLAY_PLAYER_MASS,
  displayPlayerMass: boolean
}

interface SetShortMassAction {
  type: typeof SET_TOP_TEAM_SHORT_MASS,
  shortMass: boolean
}

interface SetTotalPlayersAction {
  type: typeof SET_TOP_TEAM_TOTAL_PLAYERS,
  totalPlayers: boolean
}

interface SetBackgroundColorAction {
  type: typeof SET_TOP_TEAM_BACKGROUND_COLOR,
  backgroundColor: RGB
}

interface SetBackdropBlur {
  type: typeof SET_TOP_TEAM_BACKDROP_BLUR,
  backdropBlur: boolean
}

export type UITopTeamsActionTypes = SetShownAction | SetDisplayAmountAction | SetTotalMassAction |
                                    SetTotalPlayersAction | SetBackgroundColorAction | SetBackdropBlur |
                                    SetPlayerMassAction | SetShortMassAction;