import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';

export const SET_MINIMAP_ENABLED = 'SET_MINIMAP_ENABLED';
export const SET_VIEWPORT = 'SET_VIEWPORT';
export const SET_GHOST_CELLS = 'SET_GHOST_CELLS';
export const SET_REAL_PLAYERS_CELLS = 'SET_REAL_PLAYERS_CELLS';
export const SET_MASS = 'SET_MASS';
export const SET_NICKS = 'SET_NICKS';
export const SET_DRAW_PLAYER_POSITION = '';

export type ViewportType = 'Disabled' | 'Main tab' | 'Second tab' | 'Top one tab' | 'All';

export interface IGameMinimapState {
  enabled: boolean;
  viewport: ViewportType;
  ghostCells: boolean;
  realPlayersCells: boolean;
  mass: boolean;
  nicks: boolean;
  playerPosition: boolean;
}

interface SetMinimapEnabledAction {
  type: typeof SET_MINIMAP_ENABLED;
  enabled: boolean;
}

interface SetViewportAction {
  type: typeof SET_VIEWPORT;
  viewport: ViewportType;
}

interface SetGhostCellsAction {
  type: typeof SET_GHOST_CELLS;
  ghostCells: boolean;
}

interface SetRealPlayersCellsAction {
  type: typeof SET_REAL_PLAYERS_CELLS;
  realPlayersCells: boolean;
}

interface SetMassAction {
  type: typeof SET_MASS;
  mass: boolean;
}

interface SetNicksAction {
  type: typeof SET_NICKS;
  nicks: boolean;
}

interface SetDrawPlayerPositionAction {
  type: typeof SET_DRAW_PLAYER_POSITION;
  playerPosition: boolean;
}

export type GameMinimapActionTypes =
  | SetMinimapEnabledAction
  | SetViewportAction
  | SetGhostCellsAction
  | SetRealPlayersCellsAction
  | SetMassAction
  | SetNicksAction
  | SetDrawPlayerPositionAction;

export type GameMinimapThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  GameMinimapActionTypes
>;
