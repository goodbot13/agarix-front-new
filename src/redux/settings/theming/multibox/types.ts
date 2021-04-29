import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';
import { RGB } from '../types';

export const SET_MUTLIBOX_RING_STYLE = 'SET_MUTLIBOX_RING_STYLE';
export const SET_MULTIBOX_LINED_RING_SIZE = 'SET_MULTIBOX_LINED_RING_SIZE';
export const SET_MULTIBOX_INITIAL_RING_COLOR = 'SET_MULTIBOX_INITIAL_RING_COLOR';
export const SET_MULTIBOX_FOCUSED_RING_COLOR = 'SET_MULTIBOX_FOCUSED_RING_COLOR';
export const SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR = 'SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR';
export const SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR = 'SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR';

export type MultiboxRingStyleType = 'Author' | 'Line';

export interface IThemingMultiboxState {
  ringStyle: MultiboxRingStyleType;
  linedRingSize: number;
  initialRingColor: RGB;
  focusedRingColor: RGB;
  initialStaticCellColor: RGB;
  focusedStaticCellColor: RGB;
}

interface SetMutltiboxRingStyleAction {
  type: typeof SET_MUTLIBOX_RING_STYLE;
  ringStyle: MultiboxRingStyleType;
}

interface SetMultiboxLinedRingSizeAction {
  type: typeof SET_MULTIBOX_LINED_RING_SIZE;
  linedRingSize: number;
}

interface SetMultiboxInitialRingColorAction {
  type: typeof SET_MULTIBOX_INITIAL_RING_COLOR;
  initialRingColor: RGB;
}

interface SetMultiboxFocusedRingColorAction {
  type: typeof SET_MULTIBOX_FOCUSED_RING_COLOR;
  focusedRingColor: RGB;
}

interface SetMultiboxInitialStaticCellColorAction {
  type: typeof SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR;
  initialStaticCellColor: RGB;
}

interface SetMutltiboxFocusedStaticCellColor {
  type: typeof SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR;
  focusedStaticCellColor: RGB;
}

export type ThemingMultiboxActionTypes =
  | SetMutltiboxRingStyleAction
  | SetMultiboxLinedRingSizeAction
  | SetMultiboxFocusedRingColorAction
  | SetMultiboxInitialRingColorAction
  | SetMultiboxInitialStaticCellColorAction
  | SetMutltiboxFocusedStaticCellColor;

export type ThemingMultiboxThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  ThemingMultiboxActionTypes
>;
