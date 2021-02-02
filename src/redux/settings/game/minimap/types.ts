import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_MINIMAP_ENABLED = 'SET_MINIMAP_ENABLED';
export const SET_PLAYER_VIEWPORT = 'SET_DRAW_PLAYER_VIEWPORT';
export const SET_TOP_ONE_VIEWPORT = 'SET_DRAW_TOP_ONE_VIEWPORT';
export const SET_GHOST_CELLS = 'SET_GHOST_CELLS';
export const SET_REAL_PLAYERS_CELLS = 'SET_REAL_PLAYERS_CELLS';
export const SET_MASS = 'SET_MASS';
export const SET_NICKS = 'SET_NICKS';

export interface IGameMinimapState {
  enabled: boolean,
  playerViewport: boolean,
  topOneViewport: boolean,
  ghostCells: boolean,
  realPlayersCells: boolean,
  mass: boolean,
  nicks: boolean
}

interface SetMinimapEnabledAction {
  type: typeof SET_MINIMAP_ENABLED,
  enabled: boolean
}

interface SetPlayerViewportAction {
  type: typeof SET_PLAYER_VIEWPORT,
  playerViewport: boolean
}

interface SetTopOneViewportAction {
  type: typeof SET_TOP_ONE_VIEWPORT,
  topOneViewport: boolean
}

interface SetGhostCellsAction {
  type: typeof SET_GHOST_CELLS,
  ghostCells: boolean
}

interface SetRealPlayersCellsAction {
  type: typeof SET_REAL_PLAYERS_CELLS,
  realPlayersCells: boolean
}

interface SetMassAction {
  type: typeof SET_MASS,
  mass: boolean
}

interface SetNicksAction {
  type: typeof SET_NICKS,
  nicks: boolean
}

export type GameMinimapActionTypes = SetMinimapEnabledAction | SetPlayerViewportAction | SetTopOneViewportAction |
                                     SetGhostCellsAction | SetRealPlayersCellsAction | SetMassAction | SetNicksAction;

export type GameMinimapThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameMinimapActionTypes>;