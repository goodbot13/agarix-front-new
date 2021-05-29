import Mouse from "api/Mouse/Mouse";
import { setLeftMouseHotkey, setMiddleMouseHotkey, setRightMouseHotkey } from "./actions";
import { HotkeysMouseThunkActionTypes, TGameActionName } from "./types";

export const thunkSetLeftMouseHotkey = (actionName: TGameActionName): HotkeysMouseThunkActionTypes => (dispatch) => {
  dispatch(setLeftMouseHotkey(actionName));
  Mouse.bindLeft(actionName);
}

export const thunkSetRightMouseHotkey = (actionName: TGameActionName): HotkeysMouseThunkActionTypes => (dispatch) => {
  dispatch(setRightMouseHotkey(actionName));
  Mouse.bindRight(actionName);
}

export const thunkSetMiddleMouseHotkey = (actionName: TGameActionName): HotkeysMouseThunkActionTypes => (dispatch) => {
  dispatch(setMiddleMouseHotkey(actionName));
  Mouse.bindMiddle(actionName);
}