import { setGhostCells, setMass, setMinimaEnabled, setNicks, setPlayerViewport, setRealPlayersCells, setTopOneViewport } from "./actions";
import { GameMinimapThunkActionTypes } from "./types";

export const thunkSetMinimapEnabled = (enabled: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimaEnabled(enabled));
};

export const thunkSetPlayerViewport = (playerViewport: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setPlayerViewport(playerViewport));
}

export const thunkSetTopOneViewport = (topOneViewport: boolean): GameMinimapThunkActionTypes => (disaptch) => {
  disaptch(setTopOneViewport(topOneViewport));
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