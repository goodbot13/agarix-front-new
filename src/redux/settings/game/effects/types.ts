import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';

export const SET_CELL_REMOVE_ANIMATION = 'SET_CELL_REMOVE_ANIMATION';
export const SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR =
  'SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR';
export const SET_SPAWN_ANIMATION = 'SET_SPAWN_ANIMATION';
export const SET_WTF_RGB_MODE = 'SET_WTF_RGB_MODE';

export type CellRemoveAnimationType = 'Disabled' | 'Default' | '2CL' | 'Yue' | 'Acimazis';
export type SpawnAnimationType = 'Disabled' | 'Default' | '2CL' | 'Yue' | 'Acimazis';

export interface IGameEffectsState {
  cellRemoveAnimation: CellRemoveAnimationType;
  cellRemoveAnimationForHiddenSpectator: boolean;
  spawnAnimation: SpawnAnimationType;
  wtfRgbMode: boolean;
}

interface SetCellRemoveAnimationAction {
  type: typeof SET_CELL_REMOVE_ANIMATION;
  cellRemoveAnimation: CellRemoveAnimationType;
}

interface SetCellRemoveAnimationForHiddenSpectatorAction {
  type: typeof SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR;
  cellRemoveAnimationForHiddenSpectator: boolean;
}

interface SetSpawnAnimationAction {
  type: typeof SET_SPAWN_ANIMATION;
  spawnAnimation: SpawnAnimationType;
}

interface SetWtfRgbModeAction {
  type: typeof SET_WTF_RGB_MODE;
  wtfRgbMode: boolean;
}

export type GameEffectsActionTypes =
  | SetCellRemoveAnimationAction
  | SetCellRemoveAnimationForHiddenSpectatorAction
  | SetSpawnAnimationAction
  | SetWtfRgbModeAction;

export type GameEffectsThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  GameEffectsActionTypes
>;
