import Keyboard from "api/Keyboard/Keyboard";
import Mouse from "api/Mouse/Mouse";
import { setGameLoaded, setMenuShown, setSettingsShown, setSettingsType, setSpectateType } from "./actions";
import { SettingsType, SpectateType, UIThunkActionTypes } from "./types";

export const thunkSetSettingsShown = (shown: boolean, type?: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsShown(shown));
  
  if (type) {
    dispatch(setSettingsType(type));
  }

  if (shown) {
    if (type === 'THEMING' || type === 'UI') {
      window.GameAPI?.setSceneBlurred(false, false);
    } else {
      window.GameAPI?.setSceneBlurred(true, false);
    }
  } else {
    window.GameAPI?.setSceneBlurred(true, false);
  }
}

export const thunkSetSettingsType = (type: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsType(type));

  if (type === 'THEMING' || type === 'UI') {
    window.GameAPI?.setSceneBlurred(false, false);
  } else {
    window.GameAPI?.setSceneBlurred(true, false);
  }
}

export const thunkSetMenuShown = (shown: boolean): UIThunkActionTypes => (dispatch, getState) => {
  dispatch(setMenuShown(shown));

  const { settingsType, settingsShown } = getState().UI;

  if (shown) {
    if (settingsShown && (settingsType === 'THEMING' || settingsType === 'UI')) {
      window.GameAPI?.setSceneBlurred(false, false);
    } else {
      window.GameAPI?.setSceneBlurred(true, false);
    }

    Keyboard.block = true;
    Mouse.block = true;
  } else {
    window.GameAPI?.setSceneBlurred(false, true);
    Keyboard.block = false;
    Mouse.block = false;
  }
}

export const thunkSetGameLoaderShown = (loaderShown: boolean): UIThunkActionTypes => (dispatch) => {
  dispatch(setGameLoaded(!loaderShown));
  dispatch(setMenuShown(!loaderShown));
}

export const thunkSetSpectateType = (spectateType: SpectateType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSpectateType(spectateType));
  
  switch (spectateType) {
    case 'CENTER':
      window.GameAPI?.spectateCenter();
      break;

    case 'FREE':
      window.GameAPI?.spectateFree();
      break;

    case 'TARGET':
      window.GameAPI?.spectateTarget();
      break;

    case 'TOP_ONE':
      window.GameAPI?.spectateTopOne();
      break;
  }
}