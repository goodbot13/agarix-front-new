import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const MULTIBOX_ENABLED = 'MULTIBOX_ENABLED';
export const MULTIBOX_RING = 'MULTIBOX_RING';
export const MULTIBOX_CHANGE_RING_COLOR = 'MULTIBOX_CHANGE_RING_COLOR';
export const MULTIBOX_CHANGE_CELL_COLOR = 'MULTIBOX_CHANGE_CELL_COLOR';
export const MULTIBOX_HIDE_OWN_SKINS = 'MULTIBOX_HIDE_OWN_SKINS';
export const MULTIBOX_STATIC_COLOR = 'MULTIBOX_STATIC_COLOR';
export const MULTIBOX_SMOOTH_SWITCH = 'MULTIBOX_SMOOTH_SWITCH';

export interface IGameMultiboxState {
  enabled: boolean,
  ring: boolean,
  changeRingColor: boolean,
  changeCellColor: boolean,
  hideOwnSkins: boolean,
  staticColor: boolean,
  smoothSwitch: boolean
}

interface MultiboxEnabledAction {
  type: typeof MULTIBOX_ENABLED,
  enabled: boolean
}

interface MultiboxRingAction {
  type: typeof MULTIBOX_RING,
  ring: boolean
}

interface MultiboxChangeRingColorAction {
  type: typeof MULTIBOX_CHANGE_RING_COLOR,
  changeRingColor: boolean
}

interface MultiboxChangeCellColorAction {
  type: typeof MULTIBOX_CHANGE_CELL_COLOR,
  changeCellColor: boolean
}

interface MultiboxHideOwnSkinsAction {
  type: typeof MULTIBOX_HIDE_OWN_SKINS,
  hideOwnSkins: boolean
}

interface MultiboxStaticColorAction {
  type: typeof MULTIBOX_STATIC_COLOR,
  staticColor: boolean
}

interface MultiboxSmoothSwitch {
  type: typeof MULTIBOX_SMOOTH_SWITCH,
  smoothSwitch: boolean
}

export type GameMultiboxActionTypes = MultiboxEnabledAction | MultiboxRingAction | MultiboxChangeRingColorAction |
                                      MultiboxChangeCellColorAction | MultiboxHideOwnSkinsAction | MultiboxStaticColorAction |
                                      MultiboxSmoothSwitch;

export type GameMultiboxThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameMultiboxActionTypes>;