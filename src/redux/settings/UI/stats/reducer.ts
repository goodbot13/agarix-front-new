import Storage from 'api/storage/Storage';
import {
  IUIStatsState,
  SET_STATS_BACKDROP_BLUR,
  SET_STATS_BACKGROUND_COLOR,
  SET_STATS_FPS_SHOWN,
  SET_STATS_FRAMETIME,
  SET_STATS_LOSS_SHOWN,
  SET_STATS_POSITION,
  SET_STATS_SHOWN,
  UIStatusActionTypes,
} from './types';

const initState: IUIStatsState = Storage.get().settings.UI.stats;

export const settingsStatsReducer = (
  state = initState,
  action: UIStatusActionTypes,
): IUIStatsState => {
  switch (action.type) {
    case SET_STATS_SHOWN:
      return {
        ...state,
        shown: action.shown,
      };

    case SET_STATS_FPS_SHOWN:
      return {
        ...state,
        fps: action.fps,
      };

    case SET_STATS_LOSS_SHOWN:
      return {
        ...state,
        loss: action.loss,
      };

    case SET_STATS_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };

    case SET_STATS_BACKDROP_BLUR:
      return {
        ...state,
        backdropBlur: action.backdropBlur,
      };

    case SET_STATS_FRAMETIME:
      return {
        ...state,
        frametime: action.frametime,
      };

    case SET_STATS_POSITION:
      return {
        ...state,
        position: action.position,
      };

    default:
      return state;
  }
};
