import { RGB } from "redux/settings/theming/types";

import { 
  SET_FIRST_TAB_STATUS,
  SET_SECOND_TAB_STATUS,
  SET_SPECTATOR_TAB_STATUS,
  SET_STATS_BACKDROP_BLUR, 
  SET_STATS_BACKGROUND_COLOR, 
  SET_STATS_FPS_SHOWN, 
  SET_STATS_FRAMETIME, 
  SET_STATS_LOSS_SHOWN, 
  SET_STATS_POSITION, 
  SET_STATS_SHOWN, 
  SET_STATS_TABS, 
  TStatsPosition, 
  TStatsTabStatus, 
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

export const setStatsTabs = (tabs: boolean): UIStatusActionTypes => ({
  type: SET_STATS_TABS,
  tabs
});

export const setFirstTabStatus = (firstTabStatus: TStatsTabStatus): UIStatusActionTypes => ({
  type: SET_FIRST_TAB_STATUS,
  firstTabStatus
});

export const setSecondTabStatus = (secondTabStatus: TStatsTabStatus): UIStatusActionTypes => ({
  type: SET_SECOND_TAB_STATUS,
  secondTabStatus
});

export const setSpectatorTabStatus = (spectatorTabStatus: TStatsTabStatus): UIStatusActionTypes => ({
  type: SET_SPECTATOR_TAB_STATUS,
  spectatorTabStatus
});