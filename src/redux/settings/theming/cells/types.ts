import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";
import { RGB } from "../types";

export const SET_ONE_COLORED_COLOR = 'SET_ONE_COLORED_CELLS_COLOR';
export const SET_ONE_COLORED_STATS_COLOR = 'SET_ONE_COLORED_STATS_COLOR';
export const SET_SHADOW_COLOR = 'SET_SHADOW_COLOR';
export const SET_MY_SHADOW_COLOR = 'SET_MY_SHADOW_COLOR';
export const SET_SHADOW_DISTANCE = 'SET_SHADOW_DISTANCE';
export const SET_SHADOW_STRENGTH = 'SET_SHADOW_STRENGTH';
export const SET_CELLS_TRANSPARENCY = 'SET_CELLS_TRANSPARENCY';
export const SET_CELLS_COLOR_LIGHTEN = 'SET_CELLS_COLOR_LIGHTEN';

export interface IThemingCellsState {
  oneColoredColor: RGB,
  oneColoredStatsColor: RGB,
  shadowColor: RGB,
  myShadowColor: RGB,
  shadowDistance: number,
  shadowStrength: number,
  transparency: number,
  colorLighten: number
}

interface SetOneColoredColorAction {
  type: typeof SET_ONE_COLORED_COLOR,
  oneColoredColor: RGB
}

interface SetOneColoredStatsColorAction {
  type: typeof SET_ONE_COLORED_STATS_COLOR,
  oneColoredStatsColor: RGB
}

interface SetShadowColorAction {
  type: typeof SET_SHADOW_COLOR,
  shadowColor: RGB
}

interface SetMyShadowColorAction {
  type: typeof SET_MY_SHADOW_COLOR,
  myShadowColor: RGB
}

interface SetShadowDistanceAction {
  type: typeof SET_SHADOW_DISTANCE,
  shadowDistance: number
}

interface SetShadowStrengthAction {
  type: typeof SET_SHADOW_STRENGTH,
  shadowStrength: number
}

interface SetCellsTransparencyAction {
  type: typeof SET_CELLS_TRANSPARENCY,
  transparency: number
}

interface SetCellsColorLightenAction {
  type: typeof SET_CELLS_COLOR_LIGHTEN,
  colorLighten: number
}

export type ThemingCellsActionTypes = SetOneColoredColorAction | SetOneColoredStatsColorAction | SetShadowColorAction |
                                      SetMyShadowColorAction | SetShadowDistanceAction | SetShadowStrengthAction |
                                      SetCellsTransparencyAction | SetCellsColorLightenAction;

export type ThemingCellsThunkActionTypes = ThunkAction<void, AppStateType, unknown, ThemingCellsActionTypes>;