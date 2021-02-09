import GameEffectsSettings from "api/settings/Game/GameEffectsSettings";

import { setCellRemoveAnimation, setCellRemoveAnimationForHiddenSpectator, setSpawnAnimation, setWtfRgbMode } from "./actions";
import { CellRemoveAnimationType, GameEffectsThunkActionTypes, SpawnAnimationType } from "./types";

export const thunkSetCellRemoveAnimation = (type: CellRemoveAnimationType): GameEffectsThunkActionTypes => (dispatch) => {
  dispatch(setCellRemoveAnimation(type));
  GameEffectsSettings.setCellRemoveAnimation(type);
}

export const thunkSetCellRemoveAnimationForHiddenSpectator = (value: boolean): GameEffectsThunkActionTypes => (dispatch) => {
  dispatch(setCellRemoveAnimationForHiddenSpectator(value));
  GameEffectsSettings.setCellRemoveAnimationForHiddenSpectator(value);
}

export const thunkSetSpawnAnimation = (spawnAnimation: SpawnAnimationType): GameEffectsThunkActionTypes => (dispatch) => {
  dispatch(setSpawnAnimation(spawnAnimation));
  GameEffectsSettings.setSpawnAnimation(spawnAnimation);
}

export const thunkSetWtfRgbMode = (wtfRgbMode: boolean): GameEffectsThunkActionTypes => (dispatch) => {
  dispatch(setWtfRgbMode(wtfRgbMode));
  GameEffectsSettings.setWtfRgbMode(wtfRgbMode);
}