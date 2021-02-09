import Storage from "api/storage/Storage";
import { 
  IHotkeysKeyboard, 
  HotkeysKeyboardActionTypes, 
  SET_DOUBLE_SPLIT, 
  SET_FEED, 
  SET_MACRO_FEED, 
  SET_PAUSE_CELL, 
  SET_QUICK_RESPAWN, 
  SET_SPLIT, 
  SET_SPLIT_SIXTEEN, 
  SET_SWITCH_TABS, 
  SET_TOGGLE_CELL_RINGS, 
  SET_TOGGLE_CELL_SKINS, 
  SET_TOGGLE_FOOD_RENDER, 
  SET_TOGGLE_HUDS, 
  SET_TOGGLE_SPECTATOR_MODE, 
  SET_TRIPLE_SPLIT, 
  SET_TOGGLE_CELL_HELPERS
} from "./types";

const initState: IHotkeysKeyboard = Storage.get().settings.hotkeys.keyboard;

const unsetExistingKey = (state: IHotkeysKeyboard, keybind: string) => {
  for (const prop in state) {
    // @ts-ignore
    if (state[prop] === keybind) {
      // @ts-ignore
      state[prop] = '';
    }
  }
}

export const hotkeysKeyboardReducer = (state = initState, action: HotkeysKeyboardActionTypes): IHotkeysKeyboard => {
  switch(action.type) {
    case SET_FEED:
      unsetExistingKey(state, action.feed);

      return {
        ...state,
        feed: action.feed
      }

    case SET_MACRO_FEED:
      unsetExistingKey(state, action.macroFeed);

      return {
        ...state,
        macroFeed: action.macroFeed
      }

    case SET_SPLIT:
      unsetExistingKey(state, action.split);

      return {
        ...state,
        split: action.split
      }

    case SET_DOUBLE_SPLIT:
      unsetExistingKey(state, action.doubleSplit);

      return {
        ...state,
        doubleSplit: action.doubleSplit
      }

    case SET_TRIPLE_SPLIT:
      unsetExistingKey(state, action.tripleSplit);

      return {
        ...state,
        tripleSplit: action.tripleSplit
      }

    case SET_SPLIT_SIXTEEN:
      unsetExistingKey(state, action.splitSixteen);

      return {
        ...state,
        splitSixteen: action.splitSixteen
      }

    case SET_QUICK_RESPAWN:
      unsetExistingKey(state, action.quickRespawn);

      return {
        ...state,
        quickRespawn: action.quickRespawn
      }

    case SET_PAUSE_CELL:
      unsetExistingKey(state, action.pauseCell);

      return {
        ...state,
        pauseCell: action.pauseCell
      }

    case SET_TOGGLE_CELL_HELPERS:
      unsetExistingKey(state, action.toggleCellHelpers);

      return {
        ...state,
        toggleCellHelpers: action.toggleCellHelpers
      }
    
    case SET_TOGGLE_CELL_SKINS:
      unsetExistingKey(state, action.toggleCellSkins);

      return {
        ...state,
        toggleCellSkins: action.toggleCellSkins
      }

    case SET_TOGGLE_CELL_RINGS:
      unsetExistingKey(state, action.toggleCellRings);

      return {
        ...state,
        toggleCellRings: action.toggleCellRings
      }

    case SET_SWITCH_TABS:
      unsetExistingKey(state, action.switchTabs);

      return {
        ...state,
        switchTabs: action.switchTabs
      }

    case SET_TOGGLE_FOOD_RENDER:
      unsetExistingKey(state, action.toggleFoodRender);

      return {
        ...state,
        toggleFoodRender: action.toggleFoodRender
      }

    case SET_TOGGLE_SPECTATOR_MODE:
      unsetExistingKey(state, action.toggleSpectatorMode);

      return {
        ...state,
        toggleSpectatorMode: action.toggleSpectatorMode
      }

    case SET_TOGGLE_HUDS:
      unsetExistingKey(state, action.toggleHuds);

      return {
        ...state,
        toggleHuds: action.toggleHuds
      }

    default: return state;
  }
}