import { setSettingsShown, setSettingsType } from "./actions";
import { SettingsType, UIThunkType } from "./types";

export const thunkSetSettingsShown = (shown: boolean, type: SettingsType): UIThunkType => (dispatch) => {
  dispatch(setSettingsShown(shown));
  dispatch(setSettingsType(type));
}