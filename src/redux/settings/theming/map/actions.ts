import { RGB } from '../types';
import {
  MapBorderType,
  MapLiveEffectStrengthType,
  ThemingMapActionTypes,
  SET_MAP_BACKGROUND_IMAGE,
  SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  SET_MAP_BACKGROUND_IMAGE_URL,
  SET_MAP_BACKGROUND_TINT,
  SET_MAP_BORDER_COLOR,
  SET_MAP_BORDER_GLOW,
  SET_MAP_BORDER_GLOW_COLOR,
  SET_MAP_BORDER_GLOW_DISTANCE,
  SET_MAP_BORDER_GLOW_STRENGTH,
  SET_MAP_BORDER_ROUNDNESS,
  SET_MAP_BORDER_TYPE,
  SET_MAP_BORDER_WIDTH,
  SET_MAP_GLOBAL_BACKGROUND_IMAGE,
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT,
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL,
} from './types';

export const setMapBorderType = (borderType: MapBorderType): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_TYPE,
  borderType,
});

export const setMapBorderRoundness = (borderRoundness: number): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_ROUNDNESS,
  borderRoundness,
});

export const setMapBorderWidth = (borderWidth: number): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_WIDTH,
  borderWidth,
});

export const setMapBorderColor = (borderColor: RGB): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_COLOR,
  borderColor,
});

export const setMapBorderGlow = (borderGlow: boolean): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_GLOW,
  borderGlow,
});

export const setMapBorderGlowColor = (borderGlowColor: RGB): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_GLOW_COLOR,
  borderGlowColor,
});

export const setMapBorderGlowDistance = (borderGlowDistance: number): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_GLOW_DISTANCE,
  borderGlowDistance,
});

export const setMapBorderGlowStrength = (borderGlowStrength: number): ThemingMapActionTypes => ({
  type: SET_MAP_BORDER_GLOW_STRENGTH,
  borderGlowStrength,
});

export const setMapBackgroundTint = (backgroundTint: RGB): ThemingMapActionTypes => ({
  type: SET_MAP_BACKGROUND_TINT,
  backgroundTint,
});

export const setMapBackgroundImage = (backgroundImage: boolean): ThemingMapActionTypes => ({
  type: SET_MAP_BACKGROUND_IMAGE,
  backgroundImage,
});

export const setMapBackgroundImageUrl = (backgroundImageUrl: string): ThemingMapActionTypes => ({
  type: SET_MAP_BACKGROUND_IMAGE_URL,
  backgroundImageUrl,
});

export const setMapBackgroundImageLiveEffectStrength = (
  backgroundImageLiveEffectStrength: MapLiveEffectStrengthType,
): ThemingMapActionTypes => ({
  type: SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  backgroundImageLiveEffectStrength,
});

export const setMapGlobalBackgroundImage = (
  globalBackgroundImage: boolean,
): ThemingMapActionTypes => ({
  type: SET_MAP_GLOBAL_BACKGROUND_IMAGE,
  globalBackgroundImage,
});

export const setMapGlobalBackgroundImageUrl = (
  globalBackgroundImageUrl: string,
): ThemingMapActionTypes => ({
  type: SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL,
  globalBackgroundImageUrl,
});

export const setMapGlobalBackgroundImageTint = (
  globalBackgroundImageTint: RGB,
): ThemingMapActionTypes => ({
  type: SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT,
  globalBackgroundImageTint,
});

export const setMapGlobalBackgroundImageLiveEffectStrength = (
  globalBackgroundImageLiveEffectStrength: MapLiveEffectStrengthType,
): ThemingMapActionTypes => ({
  type: SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  globalBackgroundImageLiveEffectStrength,
});
