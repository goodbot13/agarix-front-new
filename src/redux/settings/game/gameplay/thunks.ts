import GameGameplaySettings from "api/settings/Game/GameGameplaySettings";
import { thunkSetSpectateType } from "redux/UI/thunks";

import {
  setAnimationSpeed,
  setCameraSpeed,
  setCameraStyle,
  setSpectatorMode,
  setViewport,
  zetZoomSpeed
} from "./actions";

import {
  CameraStyleType,
  GameGameplayThunkActionTypes,
  SpectatorModeType,
  ViewportType
} from "./types";

export const thunkSetAnimationSpeed = (animationSpeed: number): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setAnimationSpeed(animationSpeed));
  GameGameplaySettings.setAnimationSpeed(animationSpeed);
}

export const thunkSetZoomSpeed = (zoomSpeed: number): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(zetZoomSpeed(zoomSpeed));
  GameGameplaySettings.zetZoomSpeed(zoomSpeed);
}

export const thunkSetCameraSpeed = (cameraSpeed: number): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setCameraSpeed(cameraSpeed));
  GameGameplaySettings.setCameraSpeed(cameraSpeed);
}

export const thunkSetCameraStyle = (cameraStyle: CameraStyleType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setCameraStyle(cameraStyle));
  GameGameplaySettings.setCameraStyle(cameraStyle);
}

export const thunkSetSpectatorMode = (spectatorMode: SpectatorModeType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setSpectatorMode(spectatorMode));
  dispatch(thunkSetSpectateType('CENTER'));

  GameGameplaySettings.setSpectatorMode(spectatorMode);
}

export const thunkSetViewport = (viewport: ViewportType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setViewport(viewport));
  GameGameplaySettings.setViewport(viewport);
}