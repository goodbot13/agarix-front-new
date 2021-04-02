import Storage from "api/storage/Storage";
import { 
  IUITopTeamState, 
  SET_TOP_TEAM_BACKDROP_BLUR,
  SET_TOP_TEAM_BACKGROUND_COLOR, 
  SET_TOP_TEAM_DISPLAY_AMOUNT, 
  SET_TOP_TEAM_DISPLAY_PLAYER_MASS, 
  SET_TOP_TEAM_SHORT_MASS, 
  SET_TOP_TEAM_SHOWN, 
  SET_TOP_TEAM_TOTAL_MASS, 
  SET_TOP_TEAM_TOTAL_PLAYERS, 
  UITopTeamsActionTypes 
} from "./types";

const initState: IUITopTeamState = Storage.get().settings.UI.topTeam;

export const settingsTopTeamReducer = (state = initState, action: UITopTeamsActionTypes): IUITopTeamState => {
  switch (action.type) {
    case SET_TOP_TEAM_SHOWN: 
      return {
        ...state,
        shown: action.shown
      }

    case SET_TOP_TEAM_DISPLAY_AMOUNT:
      return {
        ...state,
        displayAmount: action.displayAmount
      }

    case SET_TOP_TEAM_TOTAL_MASS:
      return {
        ...state,
        totalMass: action.totalMass
      }

    case SET_TOP_TEAM_SHORT_MASS:
      return {
        ...state,
        shortMass: action.shortMass
      }

    case SET_TOP_TEAM_DISPLAY_PLAYER_MASS:
      return {
        ...state,
        displayPlayerMass: action.displayPlayerMass
      }

    case SET_TOP_TEAM_TOTAL_PLAYERS:
      return {
        ...state,
        totalPlayers: action.totalPlayers
      }

    case SET_TOP_TEAM_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      }

    case SET_TOP_TEAM_BACKDROP_BLUR:
      return {
        ...state,
        backdropBlur: action.backdropBlur
      }

    default: return state;
  }
}