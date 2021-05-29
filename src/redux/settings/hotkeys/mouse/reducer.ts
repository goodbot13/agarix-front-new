import Storage from "api/storage/Storage";
import { 
  HotkeysMouseActionTypes, 
  IHotkeysMouse, 
  SET_LEFT_MOUSE_BUTTON, 
  SET_MIDDLE_MOUSE_BUTTON, 
  SET_RIGHT_MOUSE_BUTTON 
} from "./types";

const initState: IHotkeysMouse = Storage.get().settings.hotkeys.mouse;

export const hotkeysMouseReducer = (state = initState, action: HotkeysMouseActionTypes): IHotkeysMouse => {
  switch (action.type) {
    case SET_LEFT_MOUSE_BUTTON:
      return {
        ...state,
        left: action.left
      }

    case SET_RIGHT_MOUSE_BUTTON:
      return {
        ...state,
        right: action.right
      }

    case SET_MIDDLE_MOUSE_BUTTON:
      return {
        ...state,
        middle: action.middle
      }

    default: return state;
  }
}