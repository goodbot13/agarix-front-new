import { RGB } from "redux/settings/theming/types";

import { 
  SET_STATS_BACKDROP_BLUR, 
  SET_STATS_BACKGROUND_COLOR, 
  SET_STATS_FPS_SHOWN, 
  SET_STATS_FRAMETIME, 
  SET_STATS_LOSS_SHOWN, 
  SET_STATS_POSITION, 
  SET_STATS_SHOWN, 
  TStatsPosition, 
  UIStatusActionTypes 
} from "./types";

export const setStatsShown = (shown: boolean): UIStatusActionTypes => ({
  type: SET_STATS_SHOWN,
  shown
});

export const setStatsFpsShown = (fps: boolean): UIStatusActionTypes => ({
  type: SET_STATS_FPS_SHOWN,
  fps 
});

export const setStatsLossShown = (loss: boolean): UIStatusActionTypes => ({
  type: SET_STATS_LOSS_SHOWN,
  loss 
});

export const setStatsBackgroundColor = (backgroundColor: RGB): UIStatusActionTypes => ({
  type: SET_STATS_BACKGROUND_COLOR,
  backgroundColor 
});

export const setStatsBackdropBlur = (backdropBlur: boolean): UIStatusActionTypes => ({
  type: SET_STATS_BACKDROP_BLUR,
  backdropBlur
});

export const setStatsFrametime = (frametime: boolean): UIStatusActionTypes => ({
  type: SET_STATS_FRAMETIME,
  frametime
});

export const setStatsPosition = (position: TStatsPosition): UIStatusActionTypes => ({
  type: SET_STATS_POSITION,
  position
});