import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';
import { RGB } from '../types';

export const SET_VIRUS_COLOR = 'SET_VIRUS_COLOR';
export const SET_VIRUS_BORDER_WIDTH = 'SET_VIRUS_BORDER_WIDTH';
export const SET_VIRUS_BORDER_COLOR = 'SET_VIRUS_BORDER_COLOR';
export const SET_VIRUS_GLOW = 'SET_VIRUS_GLOW';
export const SET_VIRUS_GLOW_COLOR = 'SET_VIRUS_GLOW_COLOR';
export const SET_VIRUS_GLOW_DISTANCE = 'SET_VIRUS_GLOW_DISTANCE';
export const SET_VIRUS_GLOW_STRENGTH = 'SET_VIRUS_GLOW_STRENGTH';
export const SET_VIRUS_TRANSPARENCY = 'SET_VIRUS_TRANSPARENCY';
export const SET_VIRUS_MASS_TYPE = 'SET_VIRUS_MASS_TYPE';
export const SET_FILL_CIRCLE_COLOR = 'SET_FILL_CIRCLE_COLOR';

export type VirusMassType = 'Disabled' | 'Full mass' | 'Shots amount' | 'Fill circle';

export interface IThemingVirusesState {
  color: RGB;
  borderWidth: number;
  borderColor: RGB;
  glow: boolean;
  glowColor: RGB;
  glowDistance: number;
  glowStrength: number;
  transparency: number;
  massType: VirusMassType;
  fillCircleColor: RGB;
}

interface SetVirusColorAction {
  type: typeof SET_VIRUS_COLOR;
  color: RGB;
}

interface SetVirusBorderWidthAction {
  type: typeof SET_VIRUS_BORDER_WIDTH;
  borderWidth: number;
}

interface SetVirusBorderColorAction {
  type: typeof SET_VIRUS_BORDER_COLOR;
  borderColor: RGB;
}

interface SetVirusGlowAction {
  type: typeof SET_VIRUS_GLOW;
  glow: boolean;
}

interface SetVirusGlowColorAction {
  type: typeof SET_VIRUS_GLOW_COLOR;
  glowColor: RGB;
}

interface SetVirusGlowDistanceAction {
  type: typeof SET_VIRUS_GLOW_DISTANCE;
  glowDistance: number;
}

interface SetVirusGlowStrengthAction {
  type: typeof SET_VIRUS_GLOW_STRENGTH;
  glowStrength: number;
}

interface SetVirusTransparencyAction {
  type: typeof SET_VIRUS_TRANSPARENCY;
  transparency: number;
}

interface SetVirusMassTypeAction {
  type: typeof SET_VIRUS_MASS_TYPE;
  massType: VirusMassType;
}

interface SetFillCircleColorAction {
  type: typeof SET_FILL_CIRCLE_COLOR;
  fillCircleColor: RGB;
}

export type ThemingVirusesActionTypes =
  | SetVirusColorAction
  | SetVirusBorderWidthAction
  | SetVirusBorderColorAction
  | SetVirusGlowAction
  | SetVirusGlowColorAction
  | SetVirusGlowDistanceAction
  | SetVirusGlowStrengthAction
  | SetVirusTransparencyAction
  | SetVirusMassTypeAction
  | SetFillCircleColorAction;

export type ThemingVirusesThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  ThemingVirusesActionTypes
>;
