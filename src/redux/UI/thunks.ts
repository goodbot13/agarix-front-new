import ClientCommunicationService from "api/ClientCommunicationService/ClientCommunicationService";
import { setMenuShown, setSettingsShown, setSettingsType } from "./actions";
import { SettingsType, UIThunkActionTypes } from "./types";

export const thunkSetSettingsShown = (shown: boolean, type?: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsShown(shown));
  
  if (type) {
    dispatch(setSettingsType(type));
  }

  if (shown) {
    if (type === 'THEMING') {
      ClientCommunicationService.setSceneBlured({ blured: false, canMouseZoom: false });
    } else {
      ClientCommunicationService.setSceneBlured({ blured: true, canMouseZoom: false });
    }
  } else {
    ClientCommunicationService.setSceneBlured({ blured: true, canMouseZoom: false });
  }
}

export const thunkSetSettingsType = (type: SettingsType): UIThunkActionTypes => (dispatch) => {
  dispatch(setSettingsType(type));

  if (type === 'THEMING') {
    ClientCommunicationService.setSceneBlured({ blured: false, canMouseZoom: false });
  } else {
    ClientCommunicationService.setSceneBlured({ blured: true, canMouseZoom: false });
  }
}

export const thunkSetMenuShown = (shown: boolean): UIThunkActionTypes => (dispatch) => {
  dispatch(setMenuShown(shown));

  ClientCommunicationService.setSceneBlured({ blured: shown, canMouseZoom: !shown });
}