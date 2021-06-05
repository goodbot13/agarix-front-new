import KeyboardGameplay from "api/Keyboard/Gameplay/KeyboardGameplay";
import { setHotkeyCommand } from "./actions";
import { HotkeysCommandsThunkActionTypes } from "./types";

export const thunkSetCommandHotkey = (index: number, message: string, key: string): HotkeysCommandsThunkActionTypes => (dispatch) => {
  dispatch(setHotkeyCommand(index, message, key));
  KeyboardGameplay.bindCommand(index, key, message);
}