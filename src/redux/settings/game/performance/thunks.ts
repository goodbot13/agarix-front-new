import { setAntialiasing, setFoodPerformanceMode, setFpsLockType, setGlowFilterShaderType, setRenderMode } from './actions';
import { FpsLockType, GamePerformanceThunkActionTypes, GlowFilterShaderType, RenderModeType } from './types';

export const thunkSetRenderMode = (renderMode: RenderModeType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setRenderMode(renderMode));
} 

export const thunkSetAntialiasing = (enabled: boolean): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setAntialiasing(enabled));
}

export const thunkSetFoodPerformanceMode = (enabled: boolean): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setFoodPerformanceMode(enabled));
}

export const thunkSetGlowFilterShaderType = (type: GlowFilterShaderType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setGlowFilterShaderType(type))
};

export const thunkSetFpsLockType = (type: FpsLockType): GamePerformanceThunkActionTypes => (dispatch) => {
  dispatch(setFpsLockType(type))
}
