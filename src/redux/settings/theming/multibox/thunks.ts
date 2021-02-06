import { RGB } from "../types";
import { MultiboxRingStyleType, ThemingMultiboxThunkActionTypes } from "./types";

import { 
  setMultiboxFocusedRingColor, 
  setMultiboxFocusedStaticCellColor, 
  setMultiboxInitialRingColor, 
  setMultiboxInitialStaticCellColor, 
  setMultiboxLinedRingSize 
} from "./actions";

export const thunkSetMultiboxRingStyle = (ringStyle: MultiboxRingStyleType): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(thunkSetMultiboxRingStyle(ringStyle));
}

export const thunkSetMultiboxLinedRingSize = (size: number): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxLinedRingSize(size));
}

export const thunkSetMultiboxInitialRingColor = (color: RGB): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxInitialRingColor(color));
}

export const thunkSetMultiboxFocusedRingColor = (color: RGB): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxFocusedRingColor(color));
}

export const thunkSetMultiboxInitialStaticCellColor = (color: RGB): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxInitialStaticCellColor(color));
}

export const thunkSetMultiboxFocusedStaticCellColor = (color: RGB): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxFocusedStaticCellColor(color));
}