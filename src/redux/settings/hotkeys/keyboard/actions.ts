import {
  HotkeysKeyboardActionTypes,
  SET_DOUBLE_SPLIT,
  SET_FEED,
  SET_MACRO_FEED,
  SET_PAUSE_CELL,
  SET_QUICK_RESPAWN,
  SET_SPLIT,
  SET_SPLIT_SIXTEEN,
  SET_SWITCH_TABS,
  SET_TOGGLE_CELL_HELPERS,
  SET_TOGGLE_CELL_RINGS,
  SET_TOGGLE_CELL_SKINS,
  SET_TOGGLE_FOOD_RENDER,
  SET_TOGGLE_HUDS,
  SET_TOGGLE_SPECTATOR_MODE,
  SET_TRIPLE_SPLIT,
} from './types';

export const setFeed = (feed: string): HotkeysKeyboardActionTypes => ({
  type: SET_FEED,
  feed,
});

export const setMacroFeed = (macroFeed: string): HotkeysKeyboardActionTypes => ({
  type: SET_MACRO_FEED,
  macroFeed,
});

export const setSplit = (split: string): HotkeysKeyboardActionTypes => ({
  type: SET_SPLIT,
  split,
});

export const setDoubleSplit = (doubleSplit: string): HotkeysKeyboardActionTypes => ({
  type: SET_DOUBLE_SPLIT,
  doubleSplit,
});

export const setTripleSplit = (tripleSplit: string): HotkeysKeyboardActionTypes => ({
  type: SET_TRIPLE_SPLIT,
  tripleSplit,
});

export const setSplitSixteen = (splitSixteen: string): HotkeysKeyboardActionTypes => ({
  type: SET_SPLIT_SIXTEEN,
  splitSixteen,
});

export const setQuickRespawn = (quickRespawn: string): HotkeysKeyboardActionTypes => ({
  type: SET_QUICK_RESPAWN,
  quickRespawn,
});

export const setPauseCell = (pauseCell: string): HotkeysKeyboardActionTypes => ({
  type: SET_PAUSE_CELL,
  pauseCell,
});

export const setToggleCellHelpers = (toggleCellHelpers: string): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_CELL_HELPERS,
  toggleCellHelpers,
});

export const setToggleCellSkins = (toggleCellSkins: string): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_CELL_SKINS,
  toggleCellSkins,
});

export const setToggleCellRings = (toggleCellRings: string): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_CELL_RINGS,
  toggleCellRings,
});

export const setSwitchTabs = (switchTabs: string): HotkeysKeyboardActionTypes => ({
  type: SET_SWITCH_TABS,
  switchTabs,
});

export const setToggleFoodRender = (toggleFoodRender: string): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_FOOD_RENDER,
  toggleFoodRender,
});

export const setToggleSpectatorMode = (
  toggleSpectatorMode: string,
): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_SPECTATOR_MODE,
  toggleSpectatorMode,
});

export const setToggleHuds = (toggleHuds: string): HotkeysKeyboardActionTypes => ({
  type: SET_TOGGLE_HUDS,
  toggleHuds,
});
