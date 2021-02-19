import { RGB } from "redux/settings/theming/types";

export const SET_STATS_SHOWN = 'SET_STATS_SHOWN';
export const SET_STATS_FPS_SHOWN = 'SET_STATS_FPS_SHOWN';
export const SET_STATS_LOSS_SHOWN = 'SET_STATS_LOSS_SHOWN';
export const SET_STATS_BACKGROUND_COLOR = 'SET_STATS_BACKGROUND_COLOR';
export const SET_STATS_BACKDROP_BLUR = 'SET_STATS_BACKDROP_BLUR';
export const SET_STATS_SCALE = 'SET_STATS_SCALE';

export interface IUIStatsState {
  shown: boolean,
  fps: boolean,
  loss: boolean,
  backgroundColor: RGB,
  backdropBlur: boolean,
  scale: number
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

interface SetStatsScaleAction {
  type: typeof SET_STATS_SCALE,
  scale: number 
}

export type UIStatusActionTypes = SetStatsShownAction | SetStatsFpsShownAction | SetStatsLossShownAction |
                                  SetStatsBackgroundColorAction | SetStatsBackdropBlurAction | SetStatsScaleAction;