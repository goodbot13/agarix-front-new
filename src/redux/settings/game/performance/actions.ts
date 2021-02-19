import {
  FpsLockType,
  GamePerformanceActionTypes,
  GlowFilterShaderType,
  RenderModeType,
  SET_ANTIALIASING,
  SET_CULLING,
  SET_FOOD_PERFORMANCE_MODE,
  SET_FPS_LOCK_TYPE,
  SET_GLOW_FILTER_SHADER_TYPE,
  SET_RENDER_MODE
} from "./types";

export const setRenderMode = (renderMode: RenderModeType): GamePerformanceActionTypes => ({
  type: SET_RENDER_MODE,
  renderMode
});

export const setAntialiasing = (antialiasing: boolean): GamePerformanceActionTypes => ({
  type: SET_ANTIALIASING,
  antialiasing
});

export const setCulling = (culling: boolean): GamePerformanceActionTypes => ({
  type: SET_CULLING,
  culling
});

export const setFoodPerformanceMode = (foodPerformanceMode: boolean): GamePerformanceActionTypes => ({
  type: SET_FOOD_PERFORMANCE_MODE,
  foodPerformanceMode
});

export const setGlowFilterShaderType = (glowFilterShaderType: GlowFilterShaderType): GamePerformanceActionTypes => ({
  type: SET_GLOW_FILTER_SHADER_TYPE,
  glowFilterShaderType
});

export const setFpsLockType = (fpsLockType: FpsLockType): GamePerformanceActionTypes => ({
  type: SET_FPS_LOCK_TYPE,
  fpsLockType
});