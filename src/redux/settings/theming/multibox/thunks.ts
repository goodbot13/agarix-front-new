import { RGB } from '../types';
import { MultiboxRingStyleType, ThemingMultiboxThunkActionTypes } from './types';

import {
  setMultiboxFocusedRingColor,
  setMultiboxFocusedStaticCellColor,
  setMultiboxInitialRingColor,
  setMultiboxInitialStaticCellColor,
  setMultiboxLinedRingSize,
  setMultiboxRingStyle,
} from './actions';

import ThemingSettingsMultibox from 'api/settings/Theming/ThemingSettingsMultibox';

export const thunkSetMultiboxRingStyle = (
  ringStyle: MultiboxRingStyleType,
): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxRingStyle(ringStyle));
  ThemingSettingsMultibox.setMultiboxRingStyle(ringStyle);
};

export const thunkSetMultiboxLinedRingSize = (size: number): ThemingMultiboxThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMultiboxLinedRingSize(size));
  ThemingSettingsMultibox.setMultiboxLinedRingSize(size);
};

export const thunkSetMultiboxInitialRingColor = (color: RGB): ThemingMultiboxThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMultiboxInitialRingColor(color));
  ThemingSettingsMultibox.setMultiboxInitialRingColor(color);
};

export const thunkSetMultiboxFocusedRingColor = (color: RGB): ThemingMultiboxThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMultiboxFocusedRingColor(color));
  ThemingSettingsMultibox.setMultiboxFocusedRingColor(color);
};

export const thunkSetMultiboxInitialStaticCellColor = (
  color: RGB,
): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxInitialStaticCellColor(color));
  ThemingSettingsMultibox.setMultiboxInitialStaticCellColor(color);
};

export const thunkSetMultiboxFocusedStaticCellColor = (
  color: RGB,
): ThemingMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxFocusedStaticCellColor(color));
  ThemingSettingsMultibox.setMultiboxFocusedStaticCellColor(color);
};
