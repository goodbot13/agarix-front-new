import {
  CellRemoveAnimationType,
  GameEffectsActionTypes,
  SET_CELL_REMOVE_ANIMATION,
  SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR,
  SET_SPAWN_ANIMATION,
  SET_WTF_RGB_MODE,
  SpawnAnimationType,
} from './types';

export const setCellRemoveAnimation = (
  cellRemoveAnimation: CellRemoveAnimationType,
): GameEffectsActionTypes => ({
  type: SET_CELL_REMOVE_ANIMATION,
  cellRemoveAnimation,
});

export const setCellRemoveAnimationForHiddenSpectator = (
  cellRemoveAnimationForHiddenSpectator: boolean,
): GameEffectsActionTypes => ({
  type: SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR,
  cellRemoveAnimationForHiddenSpectator,
});

export const setSpawnAnimation = (spawnAnimation: SpawnAnimationType): GameEffectsActionTypes => ({
  type: SET_SPAWN_ANIMATION,
  spawnAnimation,
});

export const setWtfRgbMode = (wtfRgbMode: boolean): GameEffectsActionTypes => ({
  type: SET_WTF_RGB_MODE,
  wtfRgbMode,
});
