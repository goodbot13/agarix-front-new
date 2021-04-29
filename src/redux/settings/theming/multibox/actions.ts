import { RGB } from '../types';
import {
  MultiboxRingStyleType,
  SET_MULTIBOX_FOCUSED_RING_COLOR,
  SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR,
  SET_MULTIBOX_INITIAL_RING_COLOR,
  SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR,
  SET_MULTIBOX_LINED_RING_SIZE,
  SET_MUTLIBOX_RING_STYLE,
  ThemingMultiboxActionTypes,
} from './types';

export const setMultiboxRingStyle = (
  ringStyle: MultiboxRingStyleType,
): ThemingMultiboxActionTypes => ({
  type: SET_MUTLIBOX_RING_STYLE,
  ringStyle,
});

export const setMultiboxLinedRingSize = (linedRingSize: number): ThemingMultiboxActionTypes => ({
  type: SET_MULTIBOX_LINED_RING_SIZE,
  linedRingSize,
});

export const setMultiboxInitialRingColor = (initialRingColor: RGB): ThemingMultiboxActionTypes => ({
  type: SET_MULTIBOX_INITIAL_RING_COLOR,
  initialRingColor,
});

export const setMultiboxFocusedRingColor = (focusedRingColor: RGB): ThemingMultiboxActionTypes => ({
  type: SET_MULTIBOX_FOCUSED_RING_COLOR,
  focusedRingColor,
});

export const setMultiboxInitialStaticCellColor = (
  initialStaticCellColor: RGB,
): ThemingMultiboxActionTypes => ({
  type: SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR,
  initialStaticCellColor,
});

export const setMultiboxFocusedStaticCellColor = (
  focusedStaticCellColor: RGB,
): ThemingMultiboxActionTypes => ({
  type: SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR,
  focusedStaticCellColor,
});
