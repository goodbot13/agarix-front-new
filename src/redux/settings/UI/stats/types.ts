import { RGB } from "redux/settings/theming/types";

export const SET_STATS_SHOWN = 'SET_STATS_SHOWN';
export const SET_STATS_POSITION = '';
export const SET_STATS_FPS_SHOWN = 'SET_STATS_FPS_SHOWN';
export const SET_STATS_LOSS_SHOWN = 'SET_STATS_LOSS_SHOWN';
export const SET_STATS_BACKGROUND_COLOR = 'SET_STATS_BACKGROUND_COLOR';
export const SET_STATS_BACKDROP_BLUR = 'SET_STATS_BACKDROP_BLUR';
export const SET_STATS_FRAMETIME = 'SET_STATS_FRAMETIME';

export type TStatsPosition = 'BOTTOM LEFT' | 'BOTTOM CENTER' | 'LEADERBOARD';

export interface IUIStatsState {
  shown: boolean,
  fps: boolean,
  loss: boolean,
  backgroundColor: RGB,
  backdropBlur: boolean,
  frametime: boolean,
  position: TStatsPosition
}

interface SetStatsShownAction {
  type: typeof SET_STATS_SHOWN,
  shown: boolean
}

interface SetStatsFpsShownAction {
  type: typeof SET_STATS_FPS_SHOWN,
  fps: boolean 
}

interface SetStatsLossShownAction {
  type: typeof SET_STATS_LOSS_SHOWN,
  loss: boolean 
}

interface SetStatsBackgroundColorAction {
  type: typeof SET_STATS_BACKGROUND_COLOR,
  backgroundColor: RGB 
}

interface SetStatsBackdropBlurAction {
  type: typeof SET_STATS_BACKDROP_BLUR,
  backdropBlur: boolean 
}

interface SetStatsFrametime {
  type: typeof SET_STATS_FRAMETIME,
  frametime: boolean
}

interface SetStatsPosition {
  type: typeof SET_STATS_POSITION,
  position: TStatsPosition
}

export type UIStatusActionTypes = SetStatsShownAction | SetStatsFpsShownAction | SetStatsLossShownAction |
                                  SetStatsBackgroundColorAction | SetStatsBackdropBlurAction | SetStatsFrametime |
                                  SetStatsPosition;