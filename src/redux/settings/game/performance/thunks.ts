import GamePerformanceSettings from 'api/settings/Game/GamePerformanceSettings';

import { setAntialiasing, setCulling, setFoodPerformanceMode, setFpsLockType, setGlowFilterShaderType, setRenderMode } from './actions';
import { FpsLockType, GamePerformanceThunkActionTypes, GlowFilterShaderType, RenderModeType } from './types';

export const thunkSetRenderMode = (renderMode: RenderModeType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setRenderMode(renderMode));
  GamePerformanceSettings.setRenderMode(renderMode);
} 

export const thunkSetAntialiasing = (enabled: boolean): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setAntialiasing(enabled));
  GamePerformanceSettings.setAntialiasing(enabled);
}

export const thunkSetCulling = (culling: boolean): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setCulling(culling));
  
}

export const thunkSetFoodPerformanceMode = (enabled: boolean): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setFoodPerformanceMode(enabled));
  GamePerformanceSettings.setFoodPerformanceMode(enabled);
}

export const thunkSetGlowFilterShaderType = (type: GlowFilterShaderType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setGlowFilterShaderType(type));
  GamePerformanceSettings.setGlowFilterShaderType(type);
};

export const thunkSetFpsLockType = (type: FpsLockType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setFpsLockType(type));
  GamePerformanceSettings.setFpsLockType(type);
}
