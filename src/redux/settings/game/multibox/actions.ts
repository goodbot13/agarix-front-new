import {
  GameMultiboxActionTypes,
  MULTIBOX_CHANGE_CELL_COLOR,
  MULTIBOX_CHANGE_RING_COLOR,
  MULTIBOX_ENABLED,
  MULTIBOX_HIDE_OWN_SKINS,
  MULTIBOX_STATIC_COLOR
} from "./types";

export const setMultiboxEnabled = (enabled: boolean): GameMultiboxActionTypes => ({
  type: MULTIBOX_ENABLED,
  enabled
});

export const setMultiboxChangeRingColor = (changeRingColor: boolean): GameMultiboxActionTypes => ({
  type: MULTIBOX_CHANGE_RING_COLOR,
  changeRingColor
});

export const setMultiboxChangeCellColor = (changeCellColor: boolean): GameMultiboxActionTypes => ({
  type: MULTIBOX_CHANGE_CELL_COLOR,
  changeCellColor
});

export const setMultiboxHideOwnSkins = (hideOwnSkins: boolean): GameMultiboxActionTypes => ({
  type: MULTIBOX_HIDE_OWN_SKINS,
  hideOwnSkins
});

export const setMultiboxStaticColor = (staticColor: boolean): GameMultiboxActionTypes => ({
  type: MULTIBOX_STATIC_COLOR,
  staticColor
});