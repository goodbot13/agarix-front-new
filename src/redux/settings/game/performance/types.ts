import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_RENDER_MODE = 'SET_RENDER_MODE';
export const SET_ANTIALIASING = 'SET_ANTIALIASING';
export const SET_FOOD_PERFORMANCE_MODE = 'SET_FOOD_PERFORMANCE_MODE';
export const SET_GLOW_FILTER_SHADER_TYPE = 'SET_GLOW_FILTER_SHADER_TYPE';
export const SET_FPS_LOCK_TYPE = 'SET_FPS_LOCK_TYPE';

export type RenderModeType = 'Default (CPU)' | 'GPU (Pixi)';
export type GlowFilterShaderType = 'Canvas' | 'GPU-1' | 'GPU-2';
export type FpsLockType = '30' | '60' | '120'| '144' | '240' | 'Screen-hz';

export interface IGamePerformanceState {
  renderMode: RenderModeType,
  antialiasing: boolean,
  foodPerformanceMode: boolean,
  glowFilterShaderType: GlowFilterShaderType,
  fpsLockType: FpsLockType
}

interface SetRenderModeAction {
  type: typeof SET_RENDER_MODE,
  renderMode: RenderModeType
}

interface SetAntialiasingAction {
  type: typeof SET_ANTIALIASING,
  antialiasing: boolean
}

interface SetFoodPerformanceModeAction {
  type: typeof SET_FOOD_PERFORMANCE_MODE,
  foodPerformanceMode: boolean
}

interface SetGlowFilterShadowTypeAction {
  type: typeof SET_GLOW_FILTER_SHADER_TYPE,
  glowFilterShaderType: GlowFilterShaderType
}

interface SetFpsLockTypeAction {
  type: typeof SET_FPS_LOCK_TYPE,
  fpsLockType: FpsLockType
}

export type GamePerformanceActionTypes = SetRenderModeAction | SetAntialiasingAction | SetFoodPerformanceModeAction | 
                                         SetGlowFilterShadowTypeAction | SetFpsLockTypeAction;

export type GamePerformanceThunkActionTypes = ThunkAction<void, AppStateType, unknown, GamePerformanceActionTypes>;