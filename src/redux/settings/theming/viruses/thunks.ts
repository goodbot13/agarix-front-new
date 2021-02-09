import { RGB } from "../types";
import { ThemingVirusesThunkActionTypes, VirusMassType } from "./types";

import {
  setFillCircleColor,
  setVirusBorderColor,
  setVirusBorderWidth,
  setVirusColor,
  setVirusGlow,
  setVirusGlowColor,
  setVirusGlowDistance,
  setVirusGlowStrength,
  setVirusMassType,
  setVirusTransparency
} from "./actions";

import ThemingSettingsViruses from "api/settings/Theming/ThemingSettingsViruses";

export const thunkSetVirusColor = (color: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusColor(color));
  ThemingSettingsViruses.setVirusColor(color);
}

export const thunkSetVirusBorderWidth = (borderWidth: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusBorderWidth(borderWidth));
  ThemingSettingsViruses.setVirusBorderWidth(borderWidth);
}

export const thunkSetVirusBorderColor = (borderColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusBorderColor(borderColor));
  ThemingSettingsViruses.setVirusBorderColor(borderColor);
}

export const thunkSetVirusGlow = (glow: boolean): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlow(glow));
  ThemingSettingsViruses.setVirusGlow(glow);
}

export const thunkSetVirusGlowColor = (glowColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowColor(glowColor));
  ThemingSettingsViruses.setVirusGlowColor(glowColor);
}

export const thunkSetVirusGloDistance = (glowDistance: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowDistance(glowDistance));
  ThemingSettingsViruses.setVirusGlowDistance(glowDistance);
}

export const thunkSetVirusGlowStrength = (glowStrength: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowStrength(glowStrength));
  ThemingSettingsViruses.setVirusGlowStrength(glowStrength);
}

export const thunkSetVirusTransparency = (transparency: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusTransparency(transparency));
  ThemingSettingsViruses.setVirusTransparency(transparency);
}

export const thunkSetVirusMassType = (massType: VirusMassType): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusMassType(massType));
  ThemingSettingsViruses.setVirusMassType(massType);
}

export const thunkSetFillCircleColor = (fillCircleColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setFillCircleColor(fillCircleColor));
  ThemingSettingsViruses.setFillCircleColor(fillCircleColor);
}