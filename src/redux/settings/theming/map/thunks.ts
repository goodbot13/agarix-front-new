import { RGB } from "../types";
import { MapBorderType, MapLiveEffectStrengthType, ThemingMapThunkActionTypes } from "./types";

import {
  setMapBackgroundImage,
  setMapBackgroundImageLiveEffectStrength,
  setMapBackgroundImageUrl,
  setMapBackgroundTint,
  setMapBorderColor,
  setMapBorderGlow,
  setMapBorderGlowColor,
  setMapBorderGlowDistance,
  setMapBorderGlowStrength,
  setMapBorderRoundness,
  setMapBorderType,
  setMapBorderWidth,
  setMapGlobalBackgroundImage,
  setMapGlobalBackgroundImageLiveEffectStrength,
  setMapGlobalBackgroundImageTint,
  setMapGlobalBackgroundImageUrl
} from "./actions";

export const thunkSetMapBorderType = (type: MapBorderType): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderType(type));
}

export const thunkSetMapBorderRoundness = (roundness: number): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderRoundness(roundness));
}

export const thunkSetMapBorderWidth = (width: number): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderWidth(width));
}

export const thunkSetMapBorderColor = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderColor(color));
}

export const thunkSetMapBorderGlow = (glow: boolean): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderGlow(glow));
}

export const thunkSetMapBorderGlowColor = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderGlowColor(color));
}

export const thunkSetMapBorderGlowDistance = (distance: number): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderGlowDistance(distance));
}

export const thunkSetMapBordersGlowStrength = (strength: number): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderGlowStrength(strength));
}

export const thunkSetMapBackgroundTint = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundTint(color));
}

export const thunkSetMapBackgroundImage = (image: boolean): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundImage(image));
}

export const thunkSetMapBackgroundImageUrl = (url: string): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundImageUrl(url));
}

export const thunkSetMapBackgroundImageliveEffectStrength = (
  strength: MapLiveEffectStrengthType
): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundImageLiveEffectStrength(strength));
}

export const thunkSetMapGlobalBackgroundImage = (image: boolean): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapGlobalBackgroundImage(image));
}

export const thunkSetMapGlobalBackgroundImageUrl = (url: string): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapGlobalBackgroundImageUrl(url));
}

export const thunkSetMapGlobalBackgroundImageTint = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapGlobalBackgroundImageTint(color));
}

export const thunkSetMapGlobalBackgroundImageLiveEffectStrength = (
  strength: MapLiveEffectStrengthType
): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapGlobalBackgroundImageLiveEffectStrength(strength));
}