import { SettingsGameType } from "redux/settings/game/types";
import { SettingsHotkeysType } from "redux/settings/hotkeys/types";
import { SettingsThemingType } from "redux/settings/theming/types";
import { SettingsUIType } from "redux/settings/UI/types";
import { 
  ADD_CHAT_MESSAGE,
  IChatMessage,
  IGhostCell,
  ILeaderboardPlayer,
  IStats,
  ITopTeamPlayer,
  SettingsType, 
  SET_ADDITIONAL_PROFILES_LIST_SHOWN, 
  SET_GAME_LOADED, 
  SET_GAME_LOADER_STATUS, 
  SET_GAME_SETTINGS_SUBMENU, 
  SET_GAME_SOCKET_CONNECTING, 
  SET_GHOST_CELLS, 
  SET_HOTKEYS_SETTINGS_SUBMENU, 
  SET_HUDS_SHOWN, 
  SET_INPUT_MESSAGE_SHOWN, 
  SET_IS_PLAYER_PLAYING, 
  SET_LEADERBOARD_PLAYERS, 
  SET_MENU_SHOWN, 
  SET_PLAYER_MASS, 
  SET_SETTINGS_SHOWN, 
  SET_SETTINGS_TYPE, 
  SET_SPECTATE_TYPE, 
  SET_STATS, 
  SET_THEMING_SETTINGS_SUBMENU, 
  SET_TOP_TEAM_PLAYERS, 
  SET_UI_BLURED, 
  SET_UI_SETTINGS_SUBMENU, 
  SpectateType, 
  UIActionTypes 
} from "./types";

export const setGameLoaded = (gameLoaded: boolean): UIActionTypes => ({ 
  type: SET_GAME_LOADED, 
  gameLoaded 
});

export const setGameLoaderStatus = (gameLoaderStatus: string): UIActionTypes => ({
  type: SET_GAME_LOADER_STATUS,
  gameLoaderStatus
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

export const setLeaderboardPlayers = (leaderboardPlayers: Array<ILeaderboardPlayer>): UIActionTypes => ({
  type: SET_LEADERBOARD_PLAYERS,
  leaderboardPlayers
});

export const setUiSettingsSubmenu = (uiSettingsSubmenu: SettingsUIType): UIActionTypes => ({
  type: SET_UI_SETTINGS_SUBMENU,
  uiSettingsSubmenu
});

export const setGameSocketConnecting = (gameSocketConnecting: boolean): UIActionTypes => ({
  type: SET_GAME_SOCKET_CONNECTING,
  gameSocketConnecting
});

export const setTopTeamPlayers = (topTeamPlayers: Array<ITopTeamPlayer>): UIActionTypes => ({
  type: SET_TOP_TEAM_PLAYERS,
  topTeamPlayers
});

export const setStats = (stats: IStats): UIActionTypes => ({
  type: SET_STATS,
  stats
});

export const setHudsShown = (hudsShown: boolean): UIActionTypes => ({
  type: SET_HUDS_SHOWN,
  hudsShown
});

export const setSpectateType = (spectateType: SpectateType): UIActionTypes => ({
  type: SET_SPECTATE_TYPE,
  spectateType
});

export const setIsPlayerPlaying = (isPlayerPlaying: boolean): UIActionTypes => ({
  type: SET_IS_PLAYER_PLAYING,
  isPlayerPlaying
});

export const addChatMessage = (chatMessage: IChatMessage): UIActionTypes => ({
  type: ADD_CHAT_MESSAGE,
  chatMessage
});

export const setInputMessageShown = (inputMessageShown: boolean): UIActionTypes => ({
  type: SET_INPUT_MESSAGE_SHOWN,
  inputMessageShown
});

export const setGhostCells = (ghostCells: Array<IGhostCell>): UIActionTypes => ({
  type: SET_GHOST_CELLS,
  ghostCells
});

export const setPlayerMass = (playerMass: number): UIActionTypes => ({
  type: SET_PLAYER_MASS,
  playerMass
});