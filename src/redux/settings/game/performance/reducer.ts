import Storage from "api/storage/Storage";
import {
  GamePerformanceActionTypes,
  IGamePerformanceState,
  SET_ANTIALIASING,
  SET_FOOD_PERFORMANCE_MODE,
  SET_FPS_LOCK_TYPE,
  SET_GLOW_FILTER_SHADER_TYPE,
  SET_RENDER_MODE
} from "./types";

const initState: IGamePerformanceState = Storage.get().settings.game.performance;

export const gamePerformanceReducer = (state = initState, action: GamePerformanceActionTypes): IGamePerformanceState => {
  switch (action.type) {
    case SET_RENDER_MODE:
      return {
        ...state,
        renderMode: action.renderMode
      }

    case SET_ANTIALIASING:
      return {
        ...state,
        antialiasing: action.antialiasing
      }

    case SET_FOOD_PERFORMANCE_MODE:
      return {
        ...state,
        foodPerformanceMode: action.foodPerformanceMode
      }

    case SET_GLOW_FILTER_SHADER_TYPE:
      return {
        ...state,
        glowFilterShaderType: action.glowFilterShaderType
      }

    case SET_FPS_LOCK_TYPE:
      return {
        ...state,
        fpsLockType: action.fpsLockType
      }

    default: return state;
  }
}