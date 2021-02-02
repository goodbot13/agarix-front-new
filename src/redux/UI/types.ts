import { ThunkAction } from "redux-thunk";
import { SettingsGameType } from "redux/settings/game/types";
import { AppStateType } from "redux/store";

export const SET_GAME_LOADED = 'SET_GAME_LOADED';
export const SET_MENU_SHOWN = 'SET_MENU_SHOWN';
export const SET_UI_BLURED = 'SET_UI_BLURED';
export const SET_SETTINGS_SHOWN = 'SET_SETTINGS_SHOWN';
export const SET_SETTINGS_TYPE = 'SET_SETTINGS_TYPE';
export const SET_SETTINGS_SUBMENU = 'SET_SETTINGS_SUBMENU'; 
export const SET_ADDITIONAL_PROFILES_LIST_SHOWN = 'SET_ADDITIONAL_PROFILES_LIST_SHOWN';

export type SettingsType = 'GAME' | 'HOTKEYS' | 'THEMING' | 'UI';
export type SettingsSubmenuType = SettingsGameType;

export interface IUIState {
  gameLoaded: boolean,
  menuShown: boolean,
  blured: boolean,
  settingsShown: boolean,
  settingsType: SettingsType,
  settingsSubmenu: SettingsSubmenuType,
  additionalProfilesListShown: boolean,
}

interface SetGameLoadedAction {
  type: typeof SET_GAME_LOADED,
  gameLoaded: boolean
}

interface SetMenuShownAction {
  type: typeof SET_MENU_SHOWN,
  menuShown: boolean
}

interface SetUIBluredAction {
  type: typeof SET_UI_BLURED,
  blured: boolean
}

interface SetSettingsShownAction {
  type: typeof SET_SETTINGS_SHOWN,
  settingsShown: boolean
}

interface SetSettingsTypeAction {
  type: typeof SET_SETTINGS_TYPE,
  settingsType: SettingsType
}

interface SetSettingsSubmenuAction {
  type: typeof SET_SETTINGS_SUBMENU,
  settingsSubmenu: SettingsSubmenuType,
}

interface SetAdditionalProfilesListShownAction {
  type: typeof SET_ADDITIONAL_PROFILES_LIST_SHOWN,
  additionalProfilesListShown: boolean
}


export type UIActionTypes = SetGameLoadedAction | SetMenuShownAction | SetUIBluredAction | 
                            SetSettingsShownAction | SetSettingsTypeAction | SetSettingsSubmenuAction |
                            SetAdditionalProfilesListShownAction;

export type UIThunkType = ThunkAction<void, AppStateType, unknown, UIActionTypes>; 