import { SettingsGameType } from "redux/settings/game/types";
import { SettingsHotkeysType } from "redux/settings/hotkeys/types";
import { SettingsThemingType } from "redux/settings/theming/types";
import { 
  SettingsType, 
  SET_ADDITIONAL_PROFILES_LIST_SHOWN, 
  SET_GAME_LOADED, 
  SET_GAME_SETTINGS_SUBMENU, 
  SET_HOTKEYS_SETTINGS_SUBMENU, 
  SET_MENU_SHOWN, 
  SET_SETTINGS_SHOWN, 
  SET_SETTINGS_TYPE, 
  SET_THEMING_SETTINGS_SUBMENU, 
  SET_UI_BLURED, 
  UIActionTypes 
} from "./types";

export const setGameLoaded = (gameLoaded: boolean): UIActionTypes => ({ 
  type: SET_GAME_LOADED, 
  gameLoaded 
});

export const setMenuShown = (menuShown: boolean): UIActionTypes => ({ 
  type: SET_MENU_SHOWN, 
  menuShown 
});

export const setUIBlured = (blured: boolean): UIActionTypes => ({
  type: SET_UI_BLURED,
  blured
});

export const setSettingsShown = (settingsShown: boolean): UIActionTypes => ({
  type: SET_SETTINGS_SHOWN,
  settingsShown
});

export const setSettingsType = (settingsType: SettingsType): UIActionTypes => ({
  type: SET_SETTINGS_TYPE,
  settingsType
});

export const setGameSettingsSubmenu = (gameSettingsSubmenu: SettingsGameType): UIActionTypes => ({
  type: SET_GAME_SETTINGS_SUBMENU,
  gameSettingsSubmenu
});

export const setThemingSettingsSubmenu = (themingSettingsSubmenu: SettingsThemingType): UIActionTypes => ({
  type: SET_THEMING_SETTINGS_SUBMENU,
  themingSettingsSubmenu
});

export const setHotkeysSettingsSubmenu = (hotkeysSettingsSubmenu: SettingsHotkeysType): UIActionTypes => ({
  type: SET_HOTKEYS_SETTINGS_SUBMENU,
  hotkeysSettingsSubmenu
});

export const setAdditionalProfilesListShown = (additionalProfilesListShown: boolean): UIActionTypes => ({
  type: SET_ADDITIONAL_PROFILES_LIST_SHOWN,
  additionalProfilesListShown
});