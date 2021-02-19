import ClientCommunicationService from "api/ClientCommunicationService/ClientCommunicationService";
import { setGameLoaded, setMenuShown, setSettingsShown, setSettingsType } from "./actions";
import { SettingsType, UIThunkActionTypes } from "./types";

export const thunkSetSettingsShown = (shown: boolean, type?: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsShown(shown));
  
  if (type) {
    dispatch(setSettingsType(type));
  }

  if (shown) {
    if (type === 'THEMING') {
      ClientCommunicationService.setSceneBlurred({ blurred: false, canMouseZoom: false });
    } else {
      ClientCommunicationService.setSceneBlurred({ blurred: true, canMouseZoom: false });
    }
  } else {
    ClientCommunicationService.setSceneBlurred({ blurred: true, canMouseZoom: false });
  }
}

export const thunkSetSettingsType = (type: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsType(type));

  if (type === 'THEMING') {
    ClientCommunicationService.setSceneBlurred({ blurred: false, canMouseZoom: false });
  } else {
    ClientCommunicationService.setSceneBlurred({ blurred: true, canMouseZoom: false });
  }
}

export const thunkSetMenuShown = (shown: boolean): UIThunkActionTypes => (dispatch) => {
  dispatch(setMenuShown(shown));

  ClientCommunicationService.setSceneBlurred({ blurred: shown, canMouseZoom: !shown });
}

export const thunkSetGameLoaderShown = (loaderShown: boolean): UIThunkActionTypes => (dispatch) => {
  setTimeout(() => {
    dispatch(setMenuShown(!loaderShown));
    dispatch(setGameLoaded(!loaderShown));
  }, 100);
}