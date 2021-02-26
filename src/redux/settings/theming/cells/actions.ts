import { RGB } from "../types";
import { 
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
  ThemingCellsActionTypes 
} from "./types";

export const setOneColoredColor = (oneColoredColor: RGB): ThemingCellsActionTypes => ({
  type: SET_ONE_COLORED_COLOR,
  oneColoredColor
});

export const setOneColoredStatsColor = (oneColoredStatsColor: RGB): ThemingCellsActionTypes => ({
  type: SET_ONE_COLORED_STATS_COLOR,
  oneColoredStatsColor
});

export const setShadowColor = (shadowColor: RGB): ThemingCellsActionTypes => ({
  type: SET_SHADOW_COLOR,
  shadowColor
});

export const setMyShadowColor = (myShadowColor: RGB): ThemingCellsActionTypes => ({
  type: SET_MY_SHADOW_COLOR,
  myShadowColor
});

export const setShadowDistance = (shadowDistance: number): ThemingCellsActionTypes => ({
  type: SET_SHADOW_DISTANCE,
  shadowDistance
});

export const setMyShadowDistance = (myShadowDistance: number): ThemingCellsActionTypes => ({
  type: SET_MY_SHADOW_DISTANCE,
  myShadowDistance
});

export const setShadowStrength = (shadowStrength: number): ThemingCellsActionTypes => ({
  type: SET_SHADOW_STRENGTH,
  shadowStrength
});

export const setMyShadowStrength = (myShadowStrength: number): ThemingCellsActionTypes => ({
  type: SET_MY_SHADOW_STRENGTH,
  myShadowStrength
});

export const setCellsTransparency = (transparency: number): ThemingCellsActionTypes => ({
  type: SET_CELLS_TRANSPARENCY,
  transparency
});

export const setCellsColorLighten = (colorLighten: number): ThemingCellsActionTypes => ({
  type: SET_CELLS_COLOR_LIGHTEN,
  colorLighten
});

export const setAdaptiveShadow = (adaptiveShadow: boolean): ThemingCellsActionTypes => ({
  type: SET_ADAPTIVE_SHADOW,
  adaptiveShadow
});