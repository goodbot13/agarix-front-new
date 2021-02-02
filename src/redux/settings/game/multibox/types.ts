import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const MULTIBOX_ENABLED = 'MULTIBOX_ENABLED';
export const MULTIBOX_CHANGE_RING_COLOR = 'MULTIBOX_CHANGE_RING_COLOR';
export const MULTIBOX_CHANGE_CELL_COLOR = 'MULTIBOX_CHANGE_CELL_COLOR';
export const MULTIBOX_HIDE_OWN_SKINS = 'MULTIBOX_HIDE_OWN_SKINS';
export const MULTIBOX_STATIC_COLOR = 'MULTIBOX_STATIC_COLOR';

export interface IGameMultiboxState {
  enabled: boolean,
  changeRingColor: boolean,
  changeCellColor: boolean,
  hideOwnSkins: boolean,
  staticColor: boolean
}

interface MultiboxEnabledAction {
  type: typeof MULTIBOX_ENABLED,
  enabled: boolean
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

export type GameMultiboxActionTypes = MultiboxEnabledAction | MultiboxChangeRingColorAction | MultiboxChangeCellColorAction |
                                      MultiboxHideOwnSkinsAction | MultiboxStaticColorAction;

export type GameMultiboxThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameMultiboxActionTypes>;