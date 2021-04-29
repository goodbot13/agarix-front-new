import { ThunkAction } from 'redux-thunk';
import { AppStateType } from 'redux/store';

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

export interface IHotkeysKeyboard {
  feed: string;
  macroFeed: string;
  split: string;
  doubleSplit: string;
  tripleSplit: string;
  splitSixteen: string;
  quickRespawn: string;
  pauseCell: string;
  toggleCellHelpers: string;
  toggleCellSkins: string;
  toggleCellRings: string;
  switchTabs: string;
  toggleFoodRender: string;
  toggleSpectatorMode: string;
  toggleHuds: string;
}

interface SetFeedAction {
  type: typeof SET_FEED;
  feed: string;
}

interface SetMacroFeedAction {
  type: typeof SET_MACRO_FEED;
  macroFeed: string;
}

interface SetSplitAction {
  type: typeof SET_SPLIT;
  split: string;
}

interface SetDoubleSplitAction {
  type: typeof SET_DOUBLE_SPLIT;
  doubleSplit: string;
}

interface SetTripleSplitAction {
  type: typeof SET_TRIPLE_SPLIT;
  tripleSplit: string;
}

interface SetSplitSixteenAction {
  type: typeof SET_SPLIT_SIXTEEN;
  splitSixteen: string;
}

interface SetQuickRespawnAction {
  type: typeof SET_QUICK_RESPAWN;
  quickRespawn: string;
}

interface SetPauseCellAction {
  type: typeof SET_PAUSE_CELL;
  pauseCell: string;
}

interface SetToggleCellHelpersAction {
  type: typeof SET_TOGGLE_CELL_HELPERS;
  toggleCellHelpers: string;
}

interface SetToggleCellSkinsAction {
  type: typeof SET_TOGGLE_CELL_SKINS;
  toggleCellSkins: string;
}

interface SetToggleCellRingsAction {
  type: typeof SET_TOGGLE_CELL_RINGS;
  toggleCellRings: string;
}

interface SetSwitchTabsAction {
  type: typeof SET_SWITCH_TABS;
  switchTabs: string;
}

interface SetToggleFoodRenderAction {
  type: typeof SET_TOGGLE_FOOD_RENDER;
  toggleFoodRender: string;
}

interface SetToggleSpectatorModeAction {
  type: typeof SET_TOGGLE_SPECTATOR_MODE;
  toggleSpectatorMode: string;
}

interface SetToggleHudsAction {
  type: typeof SET_TOGGLE_HUDS;
  toggleHuds: string;
}

export type HotkeysKeyboardActionTypes =
  | SetFeedAction
  | SetMacroFeedAction
  | SetSplitAction
  | SetDoubleSplitAction
  | SetTripleSplitAction
  | SetSplitSixteenAction
  | SetQuickRespawnAction
  | SetPauseCellAction
  | SetToggleCellHelpersAction
  | SetToggleCellSkinsAction
  | SetToggleCellRingsAction
  | SetSwitchTabsAction
  | SetToggleFoodRenderAction
  | SetToggleSpectatorModeAction
  | SetToggleHudsAction;

export type HotkeysKeyboardThunkActionTypes = ThunkAction<
  void,
  AppStateType,
  unknown,
  HotkeysKeyboardActionTypes
>;
