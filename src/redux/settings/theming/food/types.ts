import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";
import { RGB } from "../types";

export const SET_FOOD_SIZE = 'SET_FOOD_SIZE';
export const SET_FOOD_COLOR = 'SET_FOOD_COLOR';
export const SET_FOOD_GLOW = 'SET_FOOD_GLOW';
export const SET_FOOD_GLOW_COLOR = 'SET_FOOD_GLOW_COLOR';
export const SET_FOOD_GLOW_DISTANCE = 'SET_FOOD_GLOW_DISTANCE';
export const SET_FOOD_GLOW_STRENGTH = 'SET_FOOD_GLOW_STRENGTH';
export const SET_FOOD_CRISP = 'SET_FOOD_CRISP';

export interface IThemingFoodState {
  size: number,
  color: RGB,
  glow: boolean,
  glowColor: RGB,
  glowDistance: number,
  glowStrength: number,
  crisp: boolean
}

interface SetFoodSizeAction {
  type: typeof SET_FOOD_SIZE,
  size: number
}

interface SetFoodColorAction {
  type: typeof SET_FOOD_COLOR,
  color: RGB
}

interface SetFoodGlowAction {
  type: typeof SET_FOOD_GLOW,
  glow: boolean
}

interface SetFoodGlowColorAction {
  type: typeof SET_FOOD_GLOW_COLOR,
  glowColor: RGB
}

interface SetFoodGlowDistanceAction {
  type: typeof SET_FOOD_GLOW_DISTANCE,
  glowDistance: number
}

interface SetFoodGlowStrengthAction {
  type: typeof SET_FOOD_GLOW_STRENGTH,
  glowStrength: number
}

interface SetFoodCrispAction {
  type: typeof SET_FOOD_CRISP,
  crisp: boolean
}

export type ThemingFoodActionTypes = SetFoodSizeAction | SetFoodColorAction | SetFoodGlowAction |
                                     SetFoodGlowColorAction | SetFoodGlowDistanceAction | SetFoodCrispAction |
                                     SetFoodGlowStrengthAction;

export type ThemingFoodThunkActionTypes = ThunkAction<void, AppStateType, unknown, ThemingFoodActionTypes>;