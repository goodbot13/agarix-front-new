import { 
  IThemingCellsState, 
  SET_CELLS_TRANSPARENCY, 
  SET_MY_SHADOW_COLOR, 
  SET_ONE_COLORED_COLOR, 
  SET_ONE_COLORED_STATS_COLOR, 
  SET_SHADOW_COLOR, 
  SET_SHADOW_DISTANCE, 
  SET_SHADOW_STRENGTH, 
  ThemingCellsActionTypes 
} from "./types";

const initState: IThemingCellsState = {
  oneColoredColor: { red: 240, green: 240, blue: 240 },
  oneColoredStatsColor: { red: 0, green: 0, blue: 0 },
  shadowColor: { red: 0, green: 0, blue: 0 },
  myShadowColor: { red: 0, green: 0, blue: 0 },
  shadowDistance: 10,
  shadowStrength: 2,
  transparency: 0.98
}

export const themingCellsReducer = (state = initState, action: ThemingCellsActionTypes): IThemingCellsState => {
  switch (action.type) {
    case SET_ONE_COLORED_COLOR:
      return {
        ...state,
        oneColoredColor: action.oneColoredColor
      }

    case SET_ONE_COLORED_STATS_COLOR:
      return {
        ...state,
        oneColoredStatsColor: action.oneColoredStatsColor
      }

    case SET_SHADOW_COLOR:
      return {
        ...state,
        shadowColor: action.shadowColor
      }

    case SET_MY_SHADOW_COLOR:
      return {
        ...state,
        myShadowColor: action.myShadowColor
      }

    case SET_SHADOW_DISTANCE:
      return {
        ...state,
        shadowDistance: action.shadowDistance
      }

    case SET_SHADOW_STRENGTH:
      return {
        ...state,
        shadowStrength: action.shadowStrength
      }

    case SET_CELLS_TRANSPARENCY:
      return {
        ...state,
        transparency: action.transparency
      }
    
    default: return state;
  }
}