import Storage from "api/Storage/Storage";
import { 
  IUILeaderboardState, 
  SET_LEADERBOARD_BACKDROP_BLUR, 
  SET_LEADERBOARD_BACKGROUND_COLOR, 
  SET_LEADERBOARD_DISPLAY_AMOUNT, 
  SET_LEADERBOARD_DISPLAY_POSITION, 
  SET_LEADERBOARD_ME_COLOR, 
  SET_LEADERBOARD_SCALE, 
  SET_LEADERBOARD_SHOWN, 
  SET_LEADERBOARD_SHOW_MASS, 
  UILeaderboardActionTypes 
} from "./types";

const initState: IUILeaderboardState = Storage.get().settings.UI.leaderboard;

export const settingsLeaderboardReducer = (state = initState, action: UILeaderboardActionTypes): IUILeaderboardState => {

  switch (action.type) {
    case SET_LEADERBOARD_SHOWN:
      return {
        ...state,
        shown: action.shown
      }

    case SET_LEADERBOARD_DISPLAY_AMOUNT:
      return {
        ...state,
        displayAmount: action.displayAmount
      }

    case SET_LEADERBOARD_DISPLAY_POSITION:
      return {
        ...state,
        displayPosition: action.displayPosition
      }

    case SET_LEADERBOARD_SCALE:
      return {
        ...state,
        scale: action.scale
      }

    case SET_LEADERBOARD_SHOW_MASS:
      return {
        ...state,
        showMass: action.showMass
      }

    case SET_LEADERBOARD_BACKDROP_BLUR:
      return {
        ...state,
        backdropBlur: action.backdropBlur
      }

    case SET_LEADERBOARD_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      }

    case SET_LEADERBOARD_ME_COLOR:
      return {
        ...state,
        meColor: action.meColor
      }

    default: return state;
  }
}