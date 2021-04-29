import { RGB } from '../types';
import {
  SET_FILL_CIRCLE_COLOR,
  SET_VIRUS_BORDER_COLOR,
  SET_VIRUS_BORDER_WIDTH,
  SET_VIRUS_COLOR,
  SET_VIRUS_GLOW,
  SET_VIRUS_GLOW_COLOR,
  SET_VIRUS_GLOW_DISTANCE,
  SET_VIRUS_GLOW_STRENGTH,
  SET_VIRUS_MASS_TYPE,
  SET_VIRUS_TRANSPARENCY,
  ThemingVirusesActionTypes,
  VirusMassType,
} from './types';

export const setVirusColor = (color: RGB): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_COLOR,
  color,
});

export const setVirusBorderWidth = (borderWidth: number): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_BORDER_WIDTH,
  borderWidth,
});

export const setVirusBorderColor = (borderColor: RGB): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_BORDER_COLOR,
  borderColor,
});

export const setVirusGlow = (glow: boolean): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_GLOW,
  glow,
});

export const setVirusGlowColor = (glowColor: RGB): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_GLOW_COLOR,
  glowColor,
});

export const setVirusGlowDistance = (glowDistance: number): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_GLOW_DISTANCE,
  glowDistance,
});

export const setVirusGlowStrength = (glowStrength: number): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_GLOW_STRENGTH,
  glowStrength,
});

export const setVirusTransparency = (transparency: number): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_TRANSPARENCY,
  transparency,
});

export const setVirusMassType = (massType: VirusMassType): ThemingVirusesActionTypes => ({
  type: SET_VIRUS_MASS_TYPE,
  massType,
});

export const setFillCircleColor = (fillCircleColor: RGB): ThemingVirusesActionTypes => ({
  type: SET_FILL_CIRCLE_COLOR,
  fillCircleColor,
});
