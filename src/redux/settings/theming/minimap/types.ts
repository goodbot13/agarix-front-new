import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";
import { RGB } from "../types";

export const SET_MINIMAP_BACKGROUND_COLOR = 'SET_MINIMAP_BACKGROUND_COLOR';
export const SET_MINIMAP_SIZE = 'SET_MINIMAP_SIZE';
export const SET_MINIMAP_MY_VIEWPORT_COLOR = 'SET_MINIMAP_MY_VIEWPORT_COLOR';
export const SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR = 'SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR';
export const SET_MINIMAP_PLAYER_SIZE = 'SET_MINIMAP_PLAYER_SIZE';
export const SET_MINIMAP_PLAYER_COLOR = 'SET_MINIMAP_PLAYER_COLOR';
export const SET_MINIMAP_GHOST_CELLS_COLOR = 'SET_MINIMAP_GHOST_CELLS_COLOR';

export interface IThemingMinimapState {
  backgroundColor: RGB,
  size: number,
  myViewportColor: RGB,
  topOneViewportColor: RGB,
  playerSize: number,
  playerColor: RGB,
  ghostCellsColor: RGB
}

interface SetMinimapBackgroundColorAction {
  type: typeof SET_MINIMAP_BACKGROUND_COLOR,
  backgroundColor: RGB
}

interface SetMinimapSizeAction {
  type: typeof SET_MINIMAP_SIZE,
  size: number
}

interface SetMinimapMyViewportColorAction {
  type: typeof SET_MINIMAP_MY_VIEWPORT_COLOR,
  myViewportColor: RGB
}

interface SetMinimapTopOneViewportColorAction {
  type: typeof SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR,
  topOneViewportColor: RGB
}

interface SetMinimapPlayerSizeAction {
  type: typeof SET_MINIMAP_PLAYER_SIZE,
  playerSize: number
}

interface SetMinimapPlayerColorAction {
  type: typeof SET_MINIMAP_PLAYER_COLOR,
  playerColor: RGB
}

interface SetMinimapGhostCellsColorAction {
  type: typeof SET_MINIMAP_GHOST_CELLS_COLOR,
  ghostCellsColor: RGB
}

export type ThemingMinimapActionTypes = SetMinimapBackgroundColorAction | SetMinimapSizeAction | SetMinimapMyViewportColorAction |
                                        SetMinimapTopOneViewportColorAction | SetMinimapPlayerSizeAction | SetMinimapPlayerColorAction |
                                        SetMinimapGhostCellsColorAction;

export type ThemingMinimapThunkActionTypes = ThunkAction<void, AppStateType, unknown, ThemingMinimapActionTypes>;