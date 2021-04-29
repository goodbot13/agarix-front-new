import { RGB } from '../types';
import { MapBorderType, MapLiveEffectStrengthType, ThemingMapThunkActionTypes } from './types';

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
  setMapGlobalBackgroundImageUrl,
} from './actions';

import ThemingSettingsMap from 'api/settings/Theming/ThemingSettingsMap';

export const thunkSetMapBorderType = (type: MapBorderType): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBorderType(type));
  ThemingSettingsMap.setMapBorderType(type);
};

export const thunkSetMapBorderRoundness = (roundness: number): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBorderRoundness(roundness));
  ThemingSettingsMap.setMapBorderRoundness(roundness);
};

export const thunkSetMapBorderWidth = (width: number): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderWidth(width));
  ThemingSettingsMap.setMapBorderWidth(width);
};

export const thunkSetMapBorderColor = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderColor(color));
  ThemingSettingsMap.setMapBorderColor(color);
};

export const thunkSetMapBorderGlow = (glow: boolean): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBorderGlow(glow));
  ThemingSettingsMap.setMapBorderGlow(glow);
};

export const thunkSetMapBorderGlowColor = (color: RGB): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBorderGlowColor(color));
  ThemingSettingsMap.setMapBorderGlowColor(color);
};

export const thunkSetMapBorderGlowDistance = (distance: number): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBorderGlowDistance(distance));
  ThemingSettingsMap.setMapBorderGlowDistance(distance);
};

export const thunkSetMapBordersGlowStrength = (strength: number): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBorderGlowStrength(strength));
  ThemingSettingsMap.setMapBorderGlowStrength(strength);
};

export const thunkSetMapBackgroundTint = (color: RGB): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundTint(color));
  ThemingSettingsMap.setMapBackgroundTint(color);
};

export const thunkSetMapBackgroundImage = (image: boolean): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBackgroundImage(image));
  ThemingSettingsMap.setMapBackgroundImage(image);
};

export const thunkSetMapBackgroundImageUrl = (url: string): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapBackgroundImageUrl(url));
  ThemingSettingsMap.setMapBackgroundImageUrl(url);
};

export const thunkSetMapBackgroundImageliveEffectStrength = (
  strength: MapLiveEffectStrengthType,
): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapBackgroundImageLiveEffectStrength(strength));
  ThemingSettingsMap.setMapBackgroundImageLiveEffectStrength(strength);
};

export const thunkSetMapGlobalBackgroundImage = (image: boolean): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapGlobalBackgroundImage(image));
  ThemingSettingsMap.setMapGlobalBackgroundImage(image);
};

export const thunkSetMapGlobalBackgroundImageUrl = (url: string): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapGlobalBackgroundImageUrl(url));
  ThemingSettingsMap.setMapGlobalBackgroundImageUrl(url);
};

export const thunkSetMapGlobalBackgroundImageTint = (color: RGB): ThemingMapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMapGlobalBackgroundImageTint(color));
  ThemingSettingsMap.setMapGlobalBackgroundImageTint(color);
};

export const thunkSetMapGlobalBackgroundImageLiveEffectStrength = (
  strength: MapLiveEffectStrengthType,
): ThemingMapThunkActionTypes => (dispatch) => {
  dispatch(setMapGlobalBackgroundImageLiveEffectStrength(strength));
  ThemingSettingsMap.setMapGlobalBackgroundImageLiveEffectStrength(strength);
};
