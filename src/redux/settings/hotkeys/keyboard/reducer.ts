import Storage from "api/Storage/Storage";
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
  state = { ...state };

  for (const prop in state) {
    // @ts-ignore
    if (state[prop] === keybind) {
      // @ts-ignore
      state[prop] = '';
    }
  }

  return state;
}

export const hotkeysKeyboardReducer = (state = initState, action: HotkeysKeyboardActionTypes): IHotkeysKeyboard => {
  switch(action.type) {
    case SET_FEED:
      return {
        ...state,
        ...unsetExistingKey(state, action.feed),
        feed: action.feed
      }

    case SET_MACRO_FEED:
      return {
        ...state,
        ...unsetExistingKey(state, action.macroFeed),        
        macroFeed: action.macroFeed
      }

    case SET_SPLIT:
      return {
        ...state,
        ...unsetExistingKey(state, action.split),
        split: action.split
      }

    case SET_DOUBLE_SPLIT:
      return {
        ...state,
        ...unsetExistingKey(state, action.doubleSplit),
        doubleSplit: action.doubleSplit
      }

    case SET_TRIPLE_SPLIT:
      return {
        ...state,
        ...unsetExistingKey(state, action.tripleSplit),
        tripleSplit: action.tripleSplit
      }

    case SET_SPLIT_SIXTEEN:
      return {
        ...state,
        ...unsetExistingKey(state, action.splitSixteen),
        splitSixteen: action.splitSixteen
      }

    case SET_QUICK_RESPAWN:
      return {
        ...state,
        ...unsetExistingKey(state, action.quickRespawn),
        quickRespawn: action.quickRespawn
      }

    case SET_PAUSE_CELL:
      return {
        ...state,
        ...unsetExistingKey(state, action.pauseCell),
        pauseCell: action.pauseCell
      }

    case SET_TOGGLE_CELL_HELPERS:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleCellHelpers),
        toggleCellHelpers: action.toggleCellHelpers
      }
    
    case SET_TOGGLE_CELL_SKINS:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleCellSkins),
        toggleCellSkins: action.toggleCellSkins
      }

    case SET_TOGGLE_CELL_RINGS:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleCellRings),
        toggleCellRings: action.toggleCellRings
      }

    case SET_SWITCH_TABS:
      return {
        ...state,
        ...unsetExistingKey(state, action.switchTabs),
        switchTabs: action.switchTabs
      }

    case SET_TOGGLE_FOOD_RENDER:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleFoodRender),
        toggleFoodRender: action.toggleFoodRender
      }

    case SET_TOGGLE_SPECTATOR_MODE:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleSpectatorMode),
        toggleSpectatorMode: action.toggleSpectatorMode
      }

    case SET_TOGGLE_HUDS:
      return {
        ...state,
        ...unsetExistingKey(state, action.toggleHuds),
        toggleHuds: action.toggleHuds
      }

    default: return state;
  }
}