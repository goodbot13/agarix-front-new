import { 
  HotkeysMouseActionTypes, 
  SET_LEFT_MOUSE_BUTTON, 
  SET_MIDDLE_MOUSE_BUTTON, 
  SET_RIGHT_MOUSE_BUTTON, 
  TGameActionName
} from "./types";

export const setLeftMouseHotkey = (left: TGameActionName): HotkeysMouseActionTypes => ({
  type: SET_LEFT_MOUSE_BUTTON,
  left
});

export const setRightMouseHotkey = (right: TGameActionName): HotkeysMouseActionTypes => ({
  type: SET_RIGHT_MOUSE_BUTTON,
  right
});

export const setMiddleMouseHotkey = (middle: TGameActionName): HotkeysMouseActionTypes => ({
  type: SET_MIDDLE_MOUSE_BUTTON,
  middle
});