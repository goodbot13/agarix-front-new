import { 
  GameMinimapActionTypes, 
  SET_GHOST_CELLS, 
  SET_MASS, 
  SET_MINIMAP_ENABLED, 
  SET_NICKS, 
  SET_PLAYER_VIEWPORT, 
  SET_REAL_PLAYERS_CELLS, 
  SET_TOP_ONE_VIEWPORT 
} from "./types";

export const setMinimaEnabled = (enabled: boolean): GameMinimapActionTypes => ({
  type: SET_MINIMAP_ENABLED,
  enabled
});

export const setPlayerViewport = (playerViewport: boolean): GameMinimapActionTypes => ({
  type: SET_PLAYER_VIEWPORT,
  playerViewport
});

export const setTopOneViewport = (topOneViewport: boolean): GameMinimapActionTypes => ({
  type: SET_TOP_ONE_VIEWPORT,
  topOneViewport
});

export const setGhostCells = (ghostCells: boolean): GameMinimapActionTypes => ({
  type: SET_GHOST_CELLS,
  ghostCells
});

export const setRealPlayersCells = (realPlayersCells: boolean): GameMinimapActionTypes => ({
  type: SET_REAL_PLAYERS_CELLS,
  realPlayersCells
});

export const setMass = (mass: boolean): GameMinimapActionTypes => ({
  type: SET_MASS,
  mass
});

export const setNicks = (nicks: boolean): GameMinimapActionTypes => ({
  type: SET_NICKS,
  nicks
});