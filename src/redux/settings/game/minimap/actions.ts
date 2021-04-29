import {
  GameMinimapActionTypes,
  SET_DRAW_PLAYER_POSITION,
  SET_GHOST_CELLS,
  SET_MASS,
  SET_MINIMAP_ENABLED,
  SET_NICKS,
  SET_REAL_PLAYERS_CELLS,
  SET_VIEWPORT,
  ViewportType,
} from './types';

export const setMinimapEnabled = (enabled: boolean): GameMinimapActionTypes => ({
  type: SET_MINIMAP_ENABLED,
  enabled,
});

export const setViewport = (viewport: ViewportType): GameMinimapActionTypes => ({
  type: SET_VIEWPORT,
  viewport,
});

export const setGhostCells = (ghostCells: boolean): GameMinimapActionTypes => ({
  type: SET_GHOST_CELLS,
  ghostCells,
});

export const setRealPlayersCells = (realPlayersCells: boolean): GameMinimapActionTypes => ({
  type: SET_REAL_PLAYERS_CELLS,
  realPlayersCells,
});

export const setMass = (mass: boolean): GameMinimapActionTypes => ({
  type: SET_MASS,
  mass,
});

export const setNicks = (nicks: boolean): GameMinimapActionTypes => ({
  type: SET_NICKS,
  nicks,
});

export const setDrawPlayerPosition = (playerPosition: boolean): GameMinimapActionTypes => ({
  type: SET_DRAW_PLAYER_POSITION,
  playerPosition,
});
