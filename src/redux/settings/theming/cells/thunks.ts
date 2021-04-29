import { RGB } from '../types';

import { ThemingCellsThunkActionTypes } from './types';
import {
  setAdaptiveShadow,
  setCellsColorLighten,
  setCellsTransparency,
  setMyShadowColor,
  setMyShadowDistance,
  setMyShadowStrength,
  setOneColoredColor,
  setOneColoredStatsColor,
  setShadowColor,
  setShadowDistance,
  setShadowStrength,
} from './actions';

import ThemingSettingsCells from 'api/settings/Theming/ThemingSettingsCells';

export const thunkSetOneColoredColor = (oneColoredColor: RGB): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setOneColoredColor(oneColoredColor));
  ThemingSettingsCells.setOneColoredColor(oneColoredColor);
};

export const thunkSetOneColoredStatsColor = (
  oneColoredStatsColor: RGB,
): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setOneColoredStatsColor(oneColoredStatsColor));
  ThemingSettingsCells.setOneColoredStatsColor(oneColoredStatsColor);
};

export const thunkSetShadowColor = (shadowColor: RGB): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setShadowColor(shadowColor));
  ThemingSettingsCells.setShadowColor(shadowColor);
};

export const thunkSetMyShadowColor = (myShadowColor: RGB): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMyShadowColor(myShadowColor));
  ThemingSettingsCells.setMyShadowColor(myShadowColor);
};

export const thunkSetShadowDistance = (shadowDistance: number): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setShadowDistance(shadowDistance));
  ThemingSettingsCells.setShadowDistance(shadowDistance);
};

export const thunkSetMyShadowDistance = (
  myShadowDistance: number,
): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setMyShadowDistance(myShadowDistance));
  ThemingSettingsCells.setMyShadowDistance(myShadowDistance);
};

export const thunkSetShadowStrength = (shadowStrength: number): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setShadowStrength(shadowStrength));
  ThemingSettingsCells.setShadowStrength(shadowStrength);
};

export const thunkSetMyShadowStrength = (
  myShadowStrength: number,
): ThemingCellsThunkActionTypes => (dispatch) => {
  dispatch(setMyShadowStrength(myShadowStrength));
  ThemingSettingsCells.setMyShadowStrength(myShadowStrength);
};

export const thunkSetCellsTransparency = (transparency: number): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setCellsTransparency(transparency));
  ThemingSettingsCells.setCellsTransparency(transparency);
};

export const thunkSetCellsColorLighten = (colorLighten: number): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setCellsColorLighten(colorLighten));
  ThemingSettingsCells.setCellsColorLighten(colorLighten);
};

export const thunkSetAdaptiveShadow = (adaptiveShadow: boolean): ThemingCellsThunkActionTypes => (
  dispatch,
) => {
  dispatch(setAdaptiveShadow(adaptiveShadow));
  ThemingSettingsCells.setAdaptiveShadow(adaptiveShadow);
};
