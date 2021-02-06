import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";
import { RGB } from "../types";

export const SET_MAP_BORDER_TYPE = 'SET_MAP_BORDER_TYPE';
export const SET_MAP_BORDER_ROUNDNESS = 'SET_MAP_BORDER_ROUNDNESS';
export const SET_MAP_BORDER_WIDTH = 'SET_MAP_BORDER_WIDTH';
export const SET_MAP_BORDER_COLOR = 'SET_MAP_BORDER_COLOR';
export const SET_MAP_BORDER_GLOW = 'SET_MAP_BORDER_GLOW';
export const SET_MAP_BORDER_GLOW_COLOR = 'SET_MAP_BORDER_GLOW_COLOR';
export const SET_MAP_BORDER_GLOW_DISTANCE = 'SET_MAP_BORDER_GLOW_DISTANCE';
export const SET_MAP_BORDER_GLOW_STRENGTH = 'SET_MAP_BORDER_GLOW_STRENGTH';
export const SET_MAP_BACKGROUND_TINT = 'SET_MAP_BACKGROUND_TINT';
export const SET_MAP_BACKGROUND_IMAGE = 'SET_MAP_BACKGROUND_IMAGE';
export const SET_MAP_BACKGROUND_IMAGE_URL = 'SET_MAP_BACKGROUND_IMAGE_URL';
export const SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH = 'SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH';
export const SET_MAP_GLOBAL_BACKGROUND_IMAGE = 'SET_MAP_GLOBAL_BACKGROUND_IMAGE';
export const SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL = 'SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL';
export const SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT = 'SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT';
export const SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH = 'SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH';

export type MapBorderType = 'Disabled' | 'Common' | 'Common (anim)' | 'RGB' | 'RGB (anim)';
export type MapLiveEffectStrengthType = 'Disabled' | '1' | '2' | '3' | '4' | '5';

export interface IThemingMapState {
  borderType: MapBorderType,
  borderRoundness: number,
  borderWidth: number,
  borderColor: RGB,
  borderGlow: boolean,
  borderGlowColor: RGB,
  borderGlowDistance: number,
  borderGlowStrength: number,
  backgroundTint: RGB,
  backgroundImage: boolean,
  backgroundImageUrl: string,
  backgroundImageLiveEffectStrength: MapLiveEffectStrengthType,
  globalBackgroundImage: boolean,
  globalBackgroundImageUrl: string,
  globalBackgroundImageTint: RGB,
  globalBackgroundImageLiveEffectStrength: MapLiveEffectStrengthType
}

interface SetMapBorderTypeAction {
  type: typeof SET_MAP_BORDER_TYPE,
  borderType: MapBorderType
}

interface SetMapBorderRoundnessAction {
  type: typeof SET_MAP_BORDER_ROUNDNESS,
  borderRoundness: number
}

interface SetMapBorderWidthAction {
  type: typeof SET_MAP_BORDER_WIDTH,
  borderWidth: number
}

interface SetMapBorderColorAction {
  type: typeof SET_MAP_BORDER_COLOR,
  borderColor: RGB
}

interface SetMapBorderGlowAction {
  type: typeof SET_MAP_BORDER_GLOW,
  borderGlow: boolean
}

interface SetMapBorderGlowColorAction {
  type: typeof SET_MAP_BORDER_GLOW_COLOR,
  borderGlowColor: RGB
}

interface SetMapBorderGlowDistanceAction {
  type: typeof SET_MAP_BORDER_GLOW_DISTANCE,
  borderGlowDistance: number
}

interface SetMapBorderGlowStrengthAction {
  type: typeof SET_MAP_BORDER_GLOW_STRENGTH,
  borderGlowStrength: number
}

interface SetMapBackgroundTintAction {
  type: typeof SET_MAP_BACKGROUND_TINT,
  backgroundTint: RGB,
}

interface SetMapBackgroundImageAction {
  type: typeof SET_MAP_BACKGROUND_IMAGE,
  backgroundImage: boolean
}

interface SetMapBackgroundImageUrlAction {
  type: typeof SET_MAP_BACKGROUND_IMAGE_URL,
  backgroundImageUrl: string
}

interface SetMapBackgroundImageTintAction {
  type: typeof SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT,
  globalBackgroundImageTint: RGB
}

interface SetMapBackgroundImageLiveEffectStrengthAction {
  type: typeof SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  backgroundImageLiveEffectStrength: MapLiveEffectStrengthType
}

interface SetMapGlobalBackgroundImageAction {
  type: typeof SET_MAP_GLOBAL_BACKGROUND_IMAGE,
  globalBackgroundImage: boolean
}

interface SetMapGlobalBackgroundImageUrlAction {
  type: typeof SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL, 
  globalBackgroundImageUrl: string,
}

interface SetMapGlobalBackgroundImageTintAction {
  type: typeof SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT,
  globalBackgroundImageTint: RGB,
}

interface SetMapGlobalBackgroundImageLiveEffectStrengthAction {
  type: typeof SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH,
  globalBackgroundImageLiveEffectStrength: MapLiveEffectStrengthType
}

export type ThemingMapActionTypes = SetMapBorderTypeAction | SetMapBorderRoundnessAction | SetMapBorderWidthAction | SetMapBorderColorAction |
                                    SetMapBorderGlowAction | SetMapBorderGlowColorAction | SetMapBorderGlowDistanceAction |
                                    SetMapBorderGlowStrengthAction | SetMapBackgroundTintAction | SetMapBackgroundImageAction |
                                    SetMapBackgroundImageUrlAction | SetMapBackgroundImageTintAction | SetMapBackgroundImageLiveEffectStrengthAction |
                                    SetMapGlobalBackgroundImageAction | SetMapGlobalBackgroundImageUrlAction | SetMapGlobalBackgroundImageTintAction |
                                    SetMapGlobalBackgroundImageLiveEffectStrengthAction;

export type ThemingMapThunkActionTypes = ThunkAction<void, AppStateType, unknown, ThemingMapActionTypes>;