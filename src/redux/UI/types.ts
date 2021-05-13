import { ThunkAction } from "redux-thunk";
import { SettingsGameType } from "redux/settings/game/types";
import { SettingsHotkeysType } from "redux/settings/hotkeys/types";
import { SettingsThemingType } from "redux/settings/theming/types";
import { SettingsUIType } from "redux/settings/UI/types";
import { AppStateType } from "redux/store";

export const SET_GAME_LOADED = 'SET_GAME_LOADED';
export const SET_GAME_LOADER_STATUS = 'SET_GAME_LOADER_STATUS';
export const SET_MENU_SHOWN = 'SET_MENU_SHOWN';
export const SET_UI_BLURED = 'SET_UI_BLURED';
export const SET_SETTINGS_SHOWN = 'SET_SETTINGS_SHOWN';
export const SET_SETTINGS_TYPE = 'SET_SETTINGS_TYPE';
export const SET_GAME_SETTINGS_SUBMENU = 'SET_GAME_SETTINGS_SUBMENU'; 
export const SET_THEMING_SETTINGS_SUBMENU = 'SET_THEMING_SETTINGS_SUBMENU';
export const SET_HOTKEYS_SETTINGS_SUBMENU = 'SET_HOTKEYS_SETTINGS_SUBMENU';
export const SET_UI_SETTINGS_SUBMENU = 'SET_UI_SETTINGS_SUBMENU';
export const SET_ADDITIONAL_PROFILES_LIST_SHOWN = 'SET_ADDITIONAL_PROFILES_LIST_SHOWN';
export const SET_LEADERBOARD_PLAYERS = 'SET_LEADERBOARD_PLAYERS';
export const SET_GAME_SOCKET_CONNECTING = 'SET_GAME_SOCKET_CONNECTING';
export const SET_TOP_TEAM_PLAYERS = 'SET_TOP_TEAM_PLAYERS';
export const SET_STATS = 'SET_STATS';
export const SET_HUDS_SHOWN = 'SET_HUDS_SHOWN';
export const SET_SPECTATE_TYPE = 'SET_SPECTATE_TYPE';
export const SET_IS_PLAYER_PLAYING = 'SET_IS_PLAYER_PLAYING';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const SET_INPUT_MESSAGE_SHOWN = 'SET_INPUT_MESSAGE_SHOWN';

export type SettingsType = 'GAME' | 'HOTKEYS' | 'THEMING' | 'UI';
export type SpectateType = 'TOP_ONE' | 'CENTER' | 'FREE' | 'TARGET';
export type TChatMessageType = 'GAME' | 'PLAYER' | 'COMMAND';
export type IChatMessage = {
  nick: string,
  message: string,
  type: TChatMessageType,
  key: number
}

export interface ILeaderboardPlayer {
  position: number,
  nick: string,
  accountId: number,
  isMe: boolean
} 

export interface ITopTeamPlayer {
  mass: number,
  nick: string,
  isAlive: boolean,
  id: number
}

export interface IStats {
  fps: number,
  loss: number,
}

export interface IUIState {
  gameLoaded: boolean,
  gameLoaderStatus: string,
  menuShown: boolean,
  blured: boolean,
  settingsShown: boolean,
  settingsType: SettingsType,
  gameSettingsSubmenu: SettingsGameType,
  themingSettingsSubmenu: SettingsThemingType,
  hotkeysSettingsSubmenu: SettingsHotkeysType,
  uiSettingsSubmenu: SettingsUIType,
  additionalProfilesListShown: boolean,
  leaderboardPlayers: Array<ILeaderboardPlayer>,
  gameSocketConnecting: boolean,
  topTeamPlayers: Array<ITopTeamPlayer>,
  hudsShown: boolean,
  stats: IStats,
  spectateType: SpectateType,
  isPlayerPlaying: boolean,
  chatMessages: Array<IChatMessage>,
  inputMessageShown: boolean
}

interface SetGameLoadedAction {
  type: typeof SET_GAME_LOADED,
  gameLoaded: boolean
}

interface SetGameLoaderStatusAction {
  type: typeof SET_GAME_LOADER_STATUS,
  gameLoaderStatus: string
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

interface SetGameSettingsSubmenuAction {
  type: typeof SET_GAME_SETTINGS_SUBMENU,
  gameSettingsSubmenu: SettingsGameType,
}

interface SetThemingSettingsSubmenuAction {
  type: typeof SET_THEMING_SETTINGS_SUBMENU,
  themingSettingsSubmenu: SettingsThemingType,
}

interface SetHotkeysSettingsSubmenuAction {
  type: typeof SET_HOTKEYS_SETTINGS_SUBMENU,
  hotkeysSettingsSubmenu: SettingsHotkeysType
}

interface SetSettingsUIType {
  type: typeof SET_UI_SETTINGS_SUBMENU,
  uiSettingsSubmenu: SettingsUIType
}

interface SetAdditionalProfilesListShownAction {
  type: typeof SET_ADDITIONAL_PROFILES_LIST_SHOWN,
  additionalProfilesListShown: boolean
}

interface SetLeaderboardPlayersAction {
  type: typeof SET_LEADERBOARD_PLAYERS,
  leaderboardPlayers: Array<ILeaderboardPlayer>
}

interface SetGameSocketConnectingAction {
  type: typeof SET_GAME_SOCKET_CONNECTING,
  gameSocketConnecting: boolean
}

interface SetTopTeamPlayersAction {
  type: typeof SET_TOP_TEAM_PLAYERS,
  topTeamPlayers: Array<ITopTeamPlayer>
}

interface SetStatsAction {
  type: typeof SET_STATS,
  stats: IStats
}

interface SetHudsShown {
  type: typeof SET_HUDS_SHOWN,
  hudsShown: boolean
}

interface SetSpectateType {
  type: typeof SET_SPECTATE_TYPE,
  spectateType: SpectateType
}

interface SetIsPlayerPlaying {
  type: typeof SET_IS_PLAYER_PLAYING,
  isPlayerPlaying: boolean
}

interface AddChatMessageAction {
  type: typeof ADD_CHAT_MESSAGE,
  chatMessage: IChatMessage
}

interface SetInputMessageShown {
  type: typeof SET_INPUT_MESSAGE_SHOWN,
  inputMessageShown: boolean
}

export type UIActionTypes = SetGameLoadedAction | SetGameLoaderStatusAction | SetMenuShownAction | SetUIBluredAction | 
                            SetSettingsShownAction | SetSettingsTypeAction | SetGameSettingsSubmenuAction | SetLeaderboardPlayersAction |
                            SetThemingSettingsSubmenuAction | SetAdditionalProfilesListShownAction | SetHotkeysSettingsSubmenuAction | 
                            SetStatsAction | SetSettingsUIType | SetGameSocketConnectingAction | AddChatMessageAction |
                            SetTopTeamPlayersAction | SetHudsShown | SetSpectateType | SetIsPlayerPlaying | SetInputMessageShown;

export type UIThunkActionTypes = ThunkAction<void, AppStateType, unknown, UIActionTypes>; 