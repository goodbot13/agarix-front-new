import KeyboardGameplay from "api/Keyboard/Gameplay/KeyboardGameplay";
import { 
  setDoubleSplit, 
  setFeed, 
  setMacroFeed, 
  setPauseCell, 
  setQuickRespawn, 
  setSplit, 
  setSplitSixteen, 
  setSwitchTabs, 
  setToggleCellHelpers, 
  setToggleCellRings, 
  setToggleCellSkins, 
  setToggleFoodRender, 
  setToggleHuds, 
  setToggleSpectatorMode, 
  setTripleSplit 
} from "./actions";

import { HotkeysKeyboardThunkActionTypes } from "./types";

export const SET_FEED = 'SET_FEED';
export const SET_MACRO_FEED = 'SET_MACRO_FEED';
export const SET_SPLIT = 'SET_SPLIT';
export const SET_DOUBLE_SPLIT = 'SET_DOUBLE_SPLIT';
export const SET_TRIPLE_SPLIT = 'SET_TRIPLE_SPLIT';
export const SET_SPLIT_SIXTEEN = 'SET_SPLIT_SIXTEEN';
export const SET_QUICK_RESPAWN = 'SET_QUICK_RESPAWN';
export const SET_PAUSE_CELL = 'SET_PAUSE_CELL';
export const SET_TOGGLE_CELL_HELPERS = 'SET_TOGGLE_CELL_HELPERS';
export const SET_TOGGLE_CELL_SKINS = 'SET_TOGGLE_CELL_SKINS';
export const SET_TOGGLE_CELL_RINGS = 'SET_TOGGLE_CELL_RINGS';
export const SET_SWITCH_TABS = 'SET_SWITCH_TABS';
export const SET_TOGGLE_FOOD_RENDER = 'SET_TOGGLE_FOOD_RENDER';
export const SET_TOGGLE_SPECTATOR_MODE = 'SET_TOGGLE_SPECTATOR_MODE';
export const SET_TOGGLE_HUDS = 'SET_TOGGLE_HUDS';

export const thunkSetFeed = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setFeed(key));
  KeyboardGameplay.bindFeed(key);
}

export const thunkSetMacroFeed = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setMacroFeed(key));
  KeyboardGameplay.bindMacroFeed(key);
}

export const thunkSetSplit = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setSplit(key));
  KeyboardGameplay.bindSplit(key);
}

export const thunkSetDoubleSplit = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setDoubleSplit(key));
  KeyboardGameplay.bindDoubleSplit(key);
}

export const thunkSetTripleSplit = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setTripleSplit(key));
  KeyboardGameplay.bindTripleSplit(key);
}

export const thunkSetSplitSixteen = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setSplitSixteen(key));
  KeyboardGameplay.bindSplitSixteen(key);
}

export const thunkSetQuickRespawn = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setQuickRespawn(key));
  KeyboardGameplay.bindQuickRespawn(key);
}

export const thunkSetPauseCell = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setPauseCell(key));
  KeyboardGameplay.bindPauseCell(key);
}

export const thunkSetToggleCellHelpers = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleCellHelpers(key));
  KeyboardGameplay.bindToggleCellHelpersKey(key);
}

export const thunkSetToggleCellSkins = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleCellSkins(key));
  KeyboardGameplay.bindToggleCellSkinsKey(key);
}

export const thunkSetToggleCellRings = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleCellRings(key));
  KeyboardGameplay.bindToggleCellRingsKey(key);
}

export const thunkSetSwitchTabs = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setSwitchTabs(key));
  KeyboardGameplay.bindSwitchTabsKey(key);
}

export const thunkSetToggleFoodRender = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleFoodRender(key));
  KeyboardGameplay.bindToggleFoodRenderKey(key);
}

export const thunkSetToggleSpectatorMode = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleSpectatorMode(key));
  KeyboardGameplay.bindToggleSpectatorModeKey(key);
}

export const thunkSetToggleHuds = (key: string): HotkeysKeyboardThunkActionTypes => (dispatch) => {
  dispatch(setToggleHuds(key));
  KeyboardGameplay.bindToggleHuds(key);
}