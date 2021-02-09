import ThemingSettingsFood from "api/settings/Theming/ThemingSettingsFood";

import { setFoodColor, setFoodCrisp, setFoodGlow, setFoodGlowColor, setFoodGlowDistance, setFoodGlowStrength, setFoodSize } from "./actions";
import { RGB } from "../types";
import { ThemingFoodThunkActionTypes } from "./types";

export const thunkSetFoodSize = (size: number): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodSize(size));
  ThemingSettingsFood.setFoodSize(size);
}

export const thunkSetFoodColor = (color: RGB): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodColor(color));
  ThemingSettingsFood.setFoodColor(color);
}

export const thunkSetFoodGlow = (glow: boolean): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlow(glow));
  ThemingSettingsFood.setFoodGlow(glow);
}

export const thunkSetFoodGlowColor = (color: RGB): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlowColor(color));
  ThemingSettingsFood.setFoodGlowColor(color);
}

export const thunkSetFoodGlowDistance = (glowDistance: number): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlowDistance(glowDistance));
  ThemingSettingsFood.setFoodGlowDistance(glowDistance);
}

export const thunkSetFoodGlowStrength = (glowStrength: number): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodGlowStrength(glowStrength));
  ThemingSettingsFood.setFoodGlowStrength(glowStrength);
}

export const thunkSetFoodCrisp = (crisp: boolean): ThemingFoodThunkActionTypes => (dispatch) => {
  dispatch(setFoodCrisp(crisp));
  ThemingSettingsFood.setFoodCrisp(crisp);
}