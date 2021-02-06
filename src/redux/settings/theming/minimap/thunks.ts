import { RGB } from "../types";
import { ThemingMinimapThunkActionTypes } from "./types";

import {
  setMinimapBackgroundColor,
  setMinimapGhostCellsColor,
  setMinimapMyViewportColor,
  setMinimapPlayerColor,
  setMinimapPlayerSize,
  setMinimapSize,
  setMinimapTopOneViewportColor
} from "./actions";

export const thunkSetMinimapBackgroundColor = (backgroundColor: RGB): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapBackgroundColor(backgroundColor));
}

export const thunkSetMinimapSize = (size: number): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapSize(size));
}

export const thunkSetMinimapMyViewportColor = (myViewportColor: RGB): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapMyViewportColor(myViewportColor));
}

export const thunkSetMinimapTopOneViewportColor = (topOneViewportColor: RGB): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapTopOneViewportColor(topOneViewportColor));
}

export const thunkSetMinimapPlayerSize = (playerSize: number): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapPlayerSize(playerSize));
}

export const thunkSetMinimapPlayerColor = (playerColor: RGB): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapPlayerColor(playerColor));
}

export const thunkSetMinimapGhostCellsColor = (ghostCellsColor: RGB): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapGhostCellsColor(ghostCellsColor));
}