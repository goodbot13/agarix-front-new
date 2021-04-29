import ThemingSettingsFood from 'api/settings/Theming/ThemingSettingsFood';

import {
  setFoodColor,
  setFoodCrisp,
  setFoodEnabled,
  setFoodFirstTabEnabled,
  setFoodGlow,
  setFoodGlowColor,
  setFoodGlowDistance,
  setFoodGlowStrength,
  setFoodSecondTabEnabled,
  setFoodSize,
  setFoodTopOneTabEnabled,
} from './actions';
import { RGB } from '../types';
import { ThemingFoodThunkActionTypes } from './types';

export const thunkSetFoodEnabled = (value: boolean): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodEnabled(value));
  ThemingSettingsFood.setFoodEnabled(value);
};

export const thunkSetFoodFirstTabEnabled = (value: boolean): ThemingFoodThunkActionTypes => (
  dispatch,
) => {
  dispatch(setFoodFirstTabEnabled(value));
  ThemingSettingsFood.setFoodFirstTabEnabled(value);
};

export const thunkSetFoodSecondTabEnabled = (value: boolean): ThemingFoodThunkActionTypes => (
  dispatch,
) => {
  dispatch(setFoodSecondTabEnabled(value));
  ThemingSettingsFood.setFoodSecondTabEnabled(value);
};

export const thunkSetFoodTopOneTabEnabled = (value: boolean): ThemingFoodThunkActionTypes => (
  dispatch,
) => {
  dispatch(setFoodTopOneTabEnabled(value));
  ThemingSettingsFood.setFoodTopOneTabEnabled(value);
};

export const thunkSetFoodSize = (size: number): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodSize(size));
  ThemingSettingsFood.setFoodSize(size);
};

export const thunkSetFoodColor = (color: RGB): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodColor(color));
  ThemingSettingsFood.setFoodColor(color);
};

export const thunkSetFoodGlow = (glow: boolean): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlow(glow));
  ThemingSettingsFood.setFoodGlow(glow);
};

export const thunkSetFoodGlowColor = (color: RGB): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlowColor(color));
  ThemingSettingsFood.setFoodGlowColor(color);
};

export const thunkSetFoodGlowDistance = (glowDistance: number): ThemingFoodThunkActionTypes => (
  dispatch,
) => {
  dispatch(setFoodGlowDistance(glowDistance));
  ThemingSettingsFood.setFoodGlowDistance(glowDistance);
};

export const thunkSetFoodGlowStrength = (glowStrength: number): ThemingFoodThunkActionTypes => (
  dispatch,
) => {
  dispatch(setFoodGlowStrength(glowStrength));
  ThemingSettingsFood.setFoodGlowStrength(glowStrength);
};

export const thunkSetFoodCrisp = (crisp: boolean): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodCrisp(crisp));
  ThemingSettingsFood.setFoodCrisp(crisp);
};
