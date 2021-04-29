import { RGB } from 'redux/settings/theming/types';

export const SET_LEADERBOARD_SHOWN = 'SET_LEADERBOARD_SHOWN';
export const SET_LEADERBOARD_DISPLAY_AMOUNT = 'SET_LEADERBOARD_DISPLAY_AMOUNT';
export const SET_LEADERBOARD_DISPLAY_POSITION = 'SET_LEADERBOARD_DISPLAY_POSITION';
export const SET_LEADERBOARD_SCALE = 'SET_LEADERBOARD_SCALE';
export const SET_LEADERBOARD_SHOW_MASS = 'SET_LEADERBOARD_SHOW_MASS';
export const SET_LEADERBOARD_BACKDROP_BLUR = 'SET_LEADERBOARD_BACKDROP_BLUR';
export const SET_LEADERBOARD_BACKGROUND_COLOR = 'SET_LEADERBOARD_BACKGROUND_COLOR';
export const SET_LEADERBOARD_ME_COLOR = 'SET_LEADERBOARD_ME_COLOR';

export interface IUILeaderboardState {
  shown: boolean;
  displayAmount: number;
  displayPosition: boolean;
  scale: number;
  showMass: boolean;
  backdropBlur: boolean;
  backgroundColor: RGB;
  meColor: RGB;
}

interface SetShownAction {
  type: typeof SET_LEADERBOARD_SHOWN;
  shown: boolean;
}

interface SetDisplayPositionAction {
  type: typeof SET_LEADERBOARD_DISPLAY_POSITION;
  displayPosition: boolean;
}

interface SetDisplayAmountAction {
  type: typeof SET_LEADERBOARD_DISPLAY_AMOUNT;
  displayAmount: number;
}

interface SetScaleAction {
  type: typeof SET_LEADERBOARD_SCALE;
  scale: number;
}

interface SetShowMassAction {
  type: typeof SET_LEADERBOARD_SHOW_MASS;
  showMass: boolean;
}

interface SetBackdropBlurAction {
  type: typeof SET_LEADERBOARD_BACKDROP_BLUR;
  backdropBlur: boolean;
}

interface SetBackgroundColorAction {
  type: typeof SET_LEADERBOARD_BACKGROUND_COLOR;
  backgroundColor: RGB;
}

interface SetMeColorAction {
  type: typeof SET_LEADERBOARD_ME_COLOR;
  meColor: RGB;
}

export type UILeaderboardActionTypes =
  | SetShownAction
  | SetDisplayAmountAction
  | SetScaleAction
  | SetShowMassAction
  | SetBackdropBlurAction
  | SetBackgroundColorAction
  | SetDisplayPositionAction
  | SetMeColorAction;
