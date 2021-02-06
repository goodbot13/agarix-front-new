import { RGB } from "../types";
import {
  SET_MINIMAP_BACKGROUND_COLOR,
  SET_MINIMAP_GHOST_CELLS_COLOR,
  SET_MINIMAP_MY_VIEWPORT_COLOR,
  SET_MINIMAP_PLAYER_COLOR,
  SET_MINIMAP_PLAYER_SIZE,
  SET_MINIMAP_SIZE,
  SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR,
  ThemingMinimapActionTypes
} from "./types";

export const setMinimapBackgroundColor = (backgroundColor: RGB): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_BACKGROUND_COLOR,
  backgroundColor
});

export const setMinimapSize = (size: number): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_SIZE,
  size
});

export const setMinimapMyViewportColor = (myViewportColor: RGB): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_MY_VIEWPORT_COLOR,
  myViewportColor
});

export const setMinimapTopOneViewportColor = (topOneViewportColor: RGB): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR,
  topOneViewportColor
});

export const setMinimapPlayerSize = (playerSize: number): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_PLAYER_SIZE,
  playerSize
});

export const setMinimapPlayerColor = (playerColor: RGB): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_PLAYER_COLOR,
  playerColor
});

export const setMinimapGhostCellsColor = (ghostCellsColor: RGB): ThemingMinimapActionTypes => ({
  type: SET_MINIMAP_GHOST_CELLS_COLOR,
  ghostCellsColor
})