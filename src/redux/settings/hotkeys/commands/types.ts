import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_COMMAND_HOTKEY = 'SET_COMMAND_HOTKEY';

export interface IHotkeyCommand {
  message: string,
  key: string
}

export interface IHotkeysCommands extends Array<IHotkeyCommand>{}

interface ISetCommandHotkey {
  type: typeof SET_COMMAND_HOTKEY,
  index: number,
  message: string, 
  key: string
}

export type HotkeysCommandsActionTypes = ISetCommandHotkey;

export type HotkeysCommandsThunkActionTypes = ThunkAction<void, AppStateType, unknown, HotkeysCommandsActionTypes>;