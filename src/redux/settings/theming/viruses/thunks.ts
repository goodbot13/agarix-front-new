import { RGB } from "../types";
import { ThemingVirusesThunkActionTypes, VirusMassType } from "./types";

import {
  setFillCircleColor,
  setFillCircleTransparency,
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

export const thunkSetVirusColor = (color: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusColor(color));
}

export const thunkSetVirusBorderWidth = (borderWidth: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusBorderWidth(borderWidth));
}

export const thunkSetVirusBorderColor = (borderColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusBorderColor(borderColor));
}

export const thunkSetVirusGlow = (glow: boolean): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlow(glow));
}

export const thunkSetVirusGlowColor = (glowColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowColor(glowColor));
}

export const thunkSetVirusGloDistance = (glowDistance: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowDistance(glowDistance));
}

export const thunkSetVirusGlowStrength = (glowStrength: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusGlowStrength(glowStrength));
}

export const thunkSetVirusTransparency = (transparency: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusTransparency(transparency));
}

export const thunkSetVirusMassType = (massType: VirusMassType): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setVirusMassType(massType));
}

export const thunkSetFillCircleColor = (fillCircleColor: RGB): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setFillCircleColor(fillCircleColor));
}

export const thunkSetFillCircleTransparency = (fillCircleTransparency: number): ThemingVirusesThunkActionTypes => (dispatch) => {
  dispatch(setFillCircleTransparency(fillCircleTransparency));
}