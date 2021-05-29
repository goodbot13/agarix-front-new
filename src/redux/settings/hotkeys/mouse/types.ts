import { GAME_EVENTS } from "api/GameEvents";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_LEFT_MOUSE_BUTTON = 'SET_LEFT_MOUSE_BUTTON';
export const SET_RIGHT_MOUSE_BUTTON = 'SET_RIGHT_MOUSE_BUTTON';
export const SET_MIDDLE_MOUSE_BUTTON = 'SET_MIDDLE_MOUSE_BUTTON';

export type TGameActionName = 'Feed' | 'Macro feed' | 'Split' | 'Double split' | 'Triple split' | 'Split 16' |
                              'Quick respawn' | 'Pause cell' | 'Toggle cell helpers' | 'Toggle cell skins' | 
                              'Toggle cell rings' | 'Switch tabs' | 'Toggle spectator mode' | 'Toggle food' | 'Toggle huds' |
                              '[NOT SET]';

export type TGameAction = {
  name: TGameActionName,
  action: () => void
}

export const gameActions: Array<TGameAction> = [
  { name: '[NOT SET]', action: () => {} },
  { name: 'Feed', action: GAME_EVENTS.feed },
  { name: 'Macro feed', action: GAME_EVENTS.macroFeed },
  { name: 'Split', action: GAME_EVENTS.split },
  { name: 'Double split', action: GAME_EVENTS.doubleSplit },
  { name: 'Triple split', action: GAME_EVENTS.tripleSplit },
  { name: 'Split 16', action: GAME_EVENTS.splitSixteen },
  { name: 'Quick respawn', action: GAME_EVENTS.quickRespawn },
  { name: 'Pause cell', action: GAME_EVENTS.pauseCell },
  { name: 'Toggle cell helpers', action: GAME_EVENTS.toggleCellHelpers },
  { name: 'Toggle cell skins', action: GAME_EVENTS.toggleCellSkins },
  { name: 'Toggle cell rings', action: GAME_EVENTS.toggleCellRings },
  { name: 'Switch tabs', action: GAME_EVENTS.switchTabs },
  { name: 'Toggle spectator mode', action: GAME_EVENTS.toggleSpectatorMode },
  { name: 'Toggle food', action: GAME_EVENTS.toggleFoodRender },
  { name: 'Toggle huds', action: GAME_EVENTS.toggleHuds },
];

export const arrayOfNames = gameActions.map((action) => action.name);

export interface IHotkeysMouse {
  left: TGameActionName,
  right: TGameActionName,
  middle: TGameActionName
}

interface ISetLeftHotkey {
  type: typeof SET_LEFT_MOUSE_BUTTON,
  left: TGameActionName
}

interface ISetRightHotkey {
  type: typeof SET_RIGHT_MOUSE_BUTTON,
  right: TGameActionName
}

interface ISetMiddleHotkey {
  type: typeof SET_MIDDLE_MOUSE_BUTTON,
  middle: TGameActionName
}

export type HotkeysMouseActionTypes = ISetLeftHotkey | ISetRightHotkey | ISetMiddleHotkey;

export type HotkeysMouseThunkActionTypes = ThunkAction<void, AppStateType, unknown, HotkeysMouseActionTypes>;