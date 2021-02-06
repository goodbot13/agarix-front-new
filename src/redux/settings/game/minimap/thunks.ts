import { setDrawPlayerPosition, setGhostCells, setMass, setMinimaEnabled, setNicks, setRealPlayersCells, setViewport } from "./actions";
import { GameMinimapThunkActionTypes, ViewportType } from "./types";

export const thunkSetMinimapEnabled = (enabled: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimaEnabled(enabled));
};

export const thunkSetViewport = (viewport: ViewportType): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setViewport(viewport));
}

export const thunkSetGhostCells = (ghostCells: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setGhostCells(ghostCells));
}

export const thunkSetRealPlayersCells = (realPlayersCells: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setRealPlayersCells(realPlayersCells));
}

export const thunkSetMass = (mass: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMass(mass));
}

export const thunkSetNicks = (nicks: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setNicks(nicks));
}

export const thunkSetDrawPlayerPosition = (playerPosition: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setDrawPlayerPosition(playerPosition));
}