import { HotkeysCommandsActionTypes, SET_COMMAND_HOTKEY } from "./types";

export const setHotkeyCommand = (index: number, message: string, key: string): HotkeysCommandsActionTypes => ({
  type: SET_COMMAND_HOTKEY,
  index,
  message,
  key
});