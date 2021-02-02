import { GameMultiboxThunkActionTypes } from "./types";
import {
  setMultiboxChangeCellColor,
  setMultiboxChangeRingColor,
  setMultiboxEnabled,
  setMultiboxHideOwnSkins,
  setMultiboxStaticColor
} from "./actions";

export const thunkSetMultiboxEnabled = (enabled: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxEnabled(enabled));
}

export const thunkSetMultiboxChangeRingColor = (changeRingColor: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxChangeRingColor(changeRingColor));
}

export const thunkSetMultiboxChangeCellColor = (changeCellColor: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxChangeCellColor(changeCellColor));
}

export const thunkSetMultiboxHideOwnSkins = (hideOwnSkins: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxHideOwnSkins(hideOwnSkins));
}

export const thunkSetMultiboxStaticColor = (staticColor: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxStaticColor(staticColor));
}