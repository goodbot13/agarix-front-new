import { RGB } from "../types";

import { ThemingCellsThunkActionTypes } from "./types";
import { 
  setCellsTransparency, 
  setMyShadowColor, 
  setOneColoredColor, 
  setOneColoredStatsColor, 
  setShadowColor, 
  setShadowDistance, 
  setShadowStrength 
} from "./actions";

import ThemingSettingsCells from "api/settings/Theming/ThemingSettingsCells";


export const thunkSetOneColoredColor = (oneColoredColor: RGB): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setOneColoredColor(oneColoredColor));
  ThemingSettingsCells.setOneColoredColor(oneColoredColor);
}

export const thunkSetOneColoredStatsColor = (oneColoredStatsColor: RGB): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setOneColoredStatsColor(oneColoredStatsColor));
  ThemingSettingsCells.setOneColoredStatsColor(oneColoredStatsColor);
}

export const thunkSetShadowColor = (shadowColor: RGB): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setShadowColor(shadowColor));
  ThemingSettingsCells.setShadowColor(shadowColor);
}

export const thunksetMyShadowColor = (myShadowColor: RGB): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setMyShadowColor(myShadowColor));
  ThemingSettingsCells.setMyShadowColor(myShadowColor);
}

export const thunksetShadowDistance = (shadowDistance: number): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setShadowDistance(shadowDistance));
  ThemingSettingsCells.setShadowDistance(shadowDistance);
}

export const thunksetShadowStrength = (shadowStrength: number): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setShadowStrength(shadowStrength));
  ThemingSettingsCells.setShadowStrength(shadowStrength);
}

export const thunkSetCellsTransparency = (transparency: number): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setCellsTransparency(transparency));
  ThemingSettingsCells.setCellsTransparency(transparency);
}