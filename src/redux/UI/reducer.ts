import { 
  SET_ADDITIONAL_PROFILES_LIST_SHOWN, 
  SET_GAME_LOADED, 
  SET_MENU_SHOWN, 
  SET_SETTINGS_SHOWN, 
  SET_SETTINGS_TYPE, 
  SET_UI_BLURED, 
  UIActionTypes, 
  IUIState,
  SET_GAME_SETTINGS_SUBMENU,
  SET_THEMING_SETTINGS_SUBMENU, 
} from "./types";

const initState: IUIState = {
  gameLoaded: true,
  menuShown: true,
  blured: false,
  settingsShown: true,
  settingsType: 'THEMING',
  gameSettingsSubmenu: 'GAME_GAMEPLAY',
  themingSettingsSubmenu: 'THEMING_CELLS',
  additionalProfilesListShown: false
}

export const UIReducer = (state = initState, action: UIActionTypes): IUIState => {
  switch (action.type) {

    case SET_GAME_LOADED: 
      return {
        ...state,
        gameLoaded: action.gameLoaded
      }

    case SET_MENU_SHOWN:
      return {
        ...state,
        menuShown: action.menuShown
      }

    case SET_UI_BLURED:
      return {
        ...state,
        blured: action.blured
      }

    case SET_SETTINGS_SHOWN:
      return {
        ...state,
        settingsShown: action.settingsShown
      }

    case SET_SETTINGS_TYPE:
      return {
        ...state,
        settingsType: action.settingsType
      }

    case SET_GAME_SETTINGS_SUBMENU:
      return {
        ...state,
        gameSettingsSubmenu: action.gameSettingsSubmenu
      }

    case SET_THEMING_SETTINGS_SUBMENU:
      return {
        ...state,
        themingSettingsSubmenu: action.themingSettingsSubmenu
      }

    case SET_ADDITIONAL_PROFILES_LIST_SHOWN:
      return {
        ...state,
        additionalProfilesListShown: action.additionalProfilesListShown
      }
    
    default: return state;
  }
}