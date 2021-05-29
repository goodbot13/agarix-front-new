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
  SET_HOTKEYS_SETTINGS_SUBMENU,
  SET_GAME_LOADER_STATUS,
  SET_LEADERBOARD_PLAYERS,
  SET_UI_SETTINGS_SUBMENU,
  SET_GAME_SOCKET_CONNECTING,
  SET_TOP_TEAM_PLAYERS,
  SET_HUDS_SHOWN,
  SET_STATS,
  SET_SPECTATE_TYPE,
  SET_IS_PLAYER_PLAYING,
  ADD_CHAT_MESSAGE,
  SET_INPUT_MESSAGE_SHOWN, 
} from "./types";

const initState: IUIState = {
  gameLoaded: true,
  gameLoaderStatus: 'Receiving game version...',
  menuShown: true,
  blured: false,
  settingsShown: true,
  settingsType: 'HOTKEYS',
  gameSettingsSubmenu: 'GAME_GAMEPLAY',
  themingSettingsSubmenu: 'THEMING_CELLS',
  hotkeysSettingsSubmenu: 'HOTKEY_MOUSE',
  uiSettingsSubmenu: 'UI_LEADERBOARD',
  additionalProfilesListShown: false,
  leaderboardPlayers: [],
  topTeamPlayers: [],
  gameSocketConnecting: false,
  hudsShown: false,
  stats: { 
    fps: 0, 
    loss: 0 
  },
  spectateType: 'CENTER',
  isPlayerPlaying: false,
  chatMessages: [],
  inputMessageShown: false
}

export const UIReducer = (state = initState, action: UIActionTypes): IUIState => {
  switch (action.type) {

    case SET_GAME_LOADED: 
      return {
        ...state,
        gameLoaded: action.gameLoaded
      }

    case SET_GAME_LOADER_STATUS:
      return {
        ...state,
        gameLoaderStatus: action.gameLoaderStatus
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

    case SET_HOTKEYS_SETTINGS_SUBMENU:
      return {
        ...state,
        hotkeysSettingsSubmenu: action.hotkeysSettingsSubmenu
      }

    case SET_UI_SETTINGS_SUBMENU:
      return {
        ...state,
        uiSettingsSubmenu: action.uiSettingsSubmenu
      }

    case SET_ADDITIONAL_PROFILES_LIST_SHOWN:
      return {
        ...state,
        additionalProfilesListShown: action.additionalProfilesListShown
      }

    case SET_LEADERBOARD_PLAYERS:
      return {
        ...state,
        leaderboardPlayers: action.leaderboardPlayers
      }

    case SET_GAME_SOCKET_CONNECTING:
      return {
        ...state,
        gameSocketConnecting: action.gameSocketConnecting
      }

    case SET_TOP_TEAM_PLAYERS:
      return {
        ...state,
        topTeamPlayers: action.topTeamPlayers
      }
    
    case SET_STATS:
      return {
        ...state,
        stats: action.stats
      }

    case SET_HUDS_SHOWN:
      return {
        ...state,
        hudsShown: action.hudsShown
      }

    case SET_SPECTATE_TYPE:
      return {
        ...state,
        spectateType: action.spectateType
      }

    case SET_IS_PLAYER_PLAYING:
      return {
        ...state,
        isPlayerPlaying: action.isPlayerPlaying
      }


    case ADD_CHAT_MESSAGE:
      const messages = [...state.chatMessages];
      messages.push(action.chatMessage);

      return {
        ...state,
        chatMessages: messages
      }

    case SET_INPUT_MESSAGE_SHOWN:
      return {
        ...state,
        inputMessageShown: action.inputMessageShown
      }
    
    default: return state;
  }
}