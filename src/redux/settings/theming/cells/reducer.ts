import Storage from 'api/storage/Storage';
import {
  IThemingCellsState,
  SET_ADAPTIVE_SHADOW,
  SET_CELLS_COLOR_LIGHTEN,
  SET_CELLS_TRANSPARENCY,
  SET_MY_SHADOW_COLOR,
  SET_MY_SHADOW_DISTANCE,
  SET_MY_SHADOW_STRENGTH,
  SET_ONE_COLORED_COLOR,
  SET_ONE_COLORED_STATS_COLOR,
  SET_SHADOW_COLOR,
  SET_SHADOW_DISTANCE,
  SET_SHADOW_STRENGTH,
  ThemingCellsActionTypes,
} from './types';

const initState: IThemingCellsState = Storage.get().settings.theming.cells;

export const themingCellsReducer = (
  state = initState,
  action: ThemingCellsActionTypes,
): IThemingCellsState => {
  switch (action.type) {
    case SET_ONE_COLORED_COLOR:
      return {
        ...state,
        oneColoredColor: action.oneColoredColor,
      };

    case SET_ONE_COLORED_STATS_COLOR:
      return {
        ...state,
        oneColoredStatsColor: action.oneColoredStatsColor,
      };

    case SET_SHADOW_COLOR:
      return {
        ...state,
        shadowColor: action.shadowColor,
      };

    case SET_MY_SHADOW_COLOR:
      return {
        ...state,
        myShadowColor: action.myShadowColor,
      };

    case SET_SHADOW_DISTANCE:
      return {
        ...state,
        shadowDistance: action.shadowDistance,
      };

    case SET_MY_SHADOW_DISTANCE:
      return {
        ...state,
        myShadowDistance: action.myShadowDistance,
      };

    case SET_SHADOW_STRENGTH:
      return {
        ...state,
        shadowStrength: action.shadowStrength,
      };

    case SET_MY_SHADOW_STRENGTH:
      return {
        ...state,
        myShadowStrength: action.myShadowStrength,
      };

    case SET_CELLS_TRANSPARENCY:
      return {
        ...state,
        transparency: action.transparency,
      };

    case SET_CELLS_COLOR_LIGHTEN:
      return {
        ...state,
        colorLighten: action.colorLighten,
      };

    case SET_ADAPTIVE_SHADOW:
      return {
        ...state,
        adaptiveShadow: action.adaptiveShadow,
      };

    default:
      return state;
  }
};
