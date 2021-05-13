import Storage from "api/storage/Storage";
import { 
  IUIStatsState, 
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
  UIStatusActionTypes 
} from "./types";

const initState: IUIStatsState = Storage.get().settings.UI.stats;

export const settingsStatsReducer = (state = initState, action: UIStatusActionTypes): IUIStatsState => {
  switch (action.type) {
    case SET_STATS_SHOWN:
      return {
        ...state,
        shown: action.shown
      }

    case SET_STATS_FPS_SHOWN:
      return {
        ...state,
        fps: action.fps
      }

    case SET_STATS_LOSS_SHOWN:
      return {
        ...state,
        loss: action.loss
      }

    case SET_STATS_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      }

    case SET_STATS_BACKDROP_BLUR:
      return {
        ...state,
        backdropBlur: action.backdropBlur
      }

    case SET_STATS_FRAMETIME:
      return {
        ...state,
        frametime: action.frametime
      }

    case SET_STATS_POSITION:
      return {
        ...state,
        position: action.position
      }

    case SET_STATS_TABS:
      return {
        ...state,
        tabs: action.tabs
      }

    case SET_FIRST_TAB_STATUS:
      return {
        ...state,
        firstTabStatus: action.firstTabStatus
      }

    case SET_SECOND_TAB_STATUS:
      return {
        ...state,
        secondTabStatus: action.secondTabStatus
      }

    case SET_SPECTATOR_TAB_STATUS: 
      return {
        ...state, 
        spectatorTabStatus: action.spectatorTabStatus
      }

    default: return state;
  }
}