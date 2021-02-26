import { RGB } from "../types";
import { 
  SET_FOOD_COLOR, 
  SET_FOOD_CRISP, 
  SET_FOOD_ENABLED, 
  SET_FOOD_FIRST_TAB_ENABLED, 
  SET_FOOD_GLOW, 
  SET_FOOD_GLOW_COLOR, 
  SET_FOOD_GLOW_DISTANCE, 
  SET_FOOD_GLOW_STRENGTH, 
  SET_FOOD_SECOND_TAB_ENABLED, 
  SET_FOOD_SIZE, 
  SET_FOOD_TOP_ONE_TAB_ENABLED, 
  ThemingFoodActionTypes 
} from "./types";

export const setFoodEnabled = (enabled: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_ENABLED,
  enabled
});

export const setFoodFirstTabEnabled = (firstTabEnabled: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_FIRST_TAB_ENABLED,
  firstTabEnabled 
});

export const setFoodSecondTabEnabled = (secondTabEnabled: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_SECOND_TAB_ENABLED,
  secondTabEnabled 
});

export const setFoodTopOneTabEnabled = (topOneTabEnabled: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_TOP_ONE_TAB_ENABLED,
  topOneTabEnabled 
});

export const setFoodSize = (size: number): ThemingFoodActionTypes => ({
  type: SET_FOOD_SIZE,
  size
});

export const setFoodColor = (color: RGB): ThemingFoodActionTypes => ({
  type: SET_FOOD_COLOR,
  color
});

export const setFoodGlow = (glow: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_GLOW,
  glow
});

export const setFoodGlowColor = (glowColor: RGB): ThemingFoodActionTypes => ({
  type: SET_FOOD_GLOW_COLOR,
  glowColor
});

export const setFoodGlowDistance = (glowDistance: number): ThemingFoodActionTypes => ({
  type: SET_FOOD_GLOW_DISTANCE,
  glowDistance
});

export const setFoodGlowStrength = (glowStrength: number): ThemingFoodActionTypes => ({
  type: SET_FOOD_GLOW_STRENGTH,
  glowStrength
});

export const setFoodCrisp = (crisp: boolean): ThemingFoodActionTypes => ({
  type: SET_FOOD_CRISP,
  crisp
});