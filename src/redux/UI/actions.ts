import { 
  SettingsSubmenuType,
  SettingsType, 
  SET_ADDITIONAL_PROFILES_LIST_SHOWN, 
  SET_GAME_LOADED, 
  SET_MENU_SHOWN, 
  SET_SETTINGS_SHOWN, 
  SET_SETTINGS_SUBMENU, 
  SET_SETTINGS_TYPE, 
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

export const setSettingsSubmenu = (settingsSubmenu: SettingsSubmenuType): UIActionTypes => ({
  type: SET_SETTINGS_SUBMENU,
  settingsSubmenu
}) 

export const setAdditionalProfilesListShown = (additionalProfilesListShown: boolean): UIActionTypes => ({
  type: SET_ADDITIONAL_PROFILES_LIST_SHOWN,
  additionalProfilesListShown
});