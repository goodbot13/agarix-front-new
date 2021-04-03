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
  gameLoaded: false,
  gameLoaderStatus: 'Receiving game version...',
  menuShown: false,
  blured: false,
  settingsShown: false,
  settingsType: 'GAME',
  gameSettingsSubmenu: 'GAME_GAMEPLAY',
  themingSettingsSubmenu: 'THEMING_CELLS',
  hotkeysSettingsSubmenu: 'HOTKEYS_KEYBOARD',
  uiSettingsSubmenu: 'UI_LEADERBOARD',
  additionalProfilesListShown: false,
  leaderboardPlayers: [
/*     { nick: 'Player test #1', isMe: false, position: 1, accountId: 555 },
    { nick: 'Player test #2', isMe: false, position: 2, accountId: 5512353 },
    { nick: 'Player test #3', isMe: false, position: 3, accountId: 5534554 },
    { nick: 'Player test #4', isMe: false, position: 4, accountId: 5546755 },
    { nick: 'Player test #5', isMe: false, position: 5, accountId: 5513256 },
    { nick: 'Player test #6', isMe: false, position: 6, accountId: 54557 },
    { nick: 'Player meeee', isMe: true, position: 7, accountId: 5571355 },
    { nick: 'Player test #8', isMe: false, position: 8, accountId: 55524353 },
    { nick: 'Player test #9', isMe: false, position: 9, accountId: 55534534 },
    { nick: 'Player test #10', isMe: false, position: 10, accountId: 55465455 },
    { nick: 'Player test #11', isMe: false, position: 11, accountId: 5546456756 },
    { nick: 'Player test #12', isMe: false, position: 12, accountId: 555645667 },
    { nick: '!ME', isMe: false, position: 13, accountId: 5578454 },
    { nick: 'Player test #14', isMe: false, position: 14, accountId: 559255 },
    { nick: 'Player test #15', isMe: false, position: 15, accountId: 55156 },
    { nick: 'Player test #16', isMe: false, position: 16, accountId: 55857 }, */
  ],
  topTeamPlayers: [
/*     { nick: 'Player test abc', mass: 6498, isAlive: false, id: 111 },
    { nick: 'Player test 1', mass: 4882, isAlive: false, id: 1112 },
    { nick: 'Some other player', mass: 8174, isAlive: false, id: 1113 },
    { nick: 'Very nice player', mass: 1630, isAlive: false, id: 1114 },
    { nick: 'Player jas', mass: 40, isAlive: false, id: 1115 },
    { nick: 'Sjhtka 81', mass: 639, isAlive: false, id: 116 },
    { nick: 'Some player', mass: 10023, isAlive: false, id: 1171 },
    { nick: 'Very player', mass: 76, isAlive: false, id: 1181 }, */
  ],
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