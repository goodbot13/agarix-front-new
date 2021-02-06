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
}

export const thunkSetZoomSpeed = (zoomSpeed: number): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(zetZoomSpeed(zoomSpeed));
}

export const thunkSetCameraSpeed = (cameraSpeed: number): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setCameraSpeed(cameraSpeed));
}

export const thunkSetCameraStyle = (cameraStyle: CameraStyleType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setCameraStyle(cameraStyle));
}

export const thunkSetSpectatorMode = (spectatorMode: SpectatorModeType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setSpectatorMode(spectatorMode));
}

export const thunkSetViewport = (viewport: ViewportType): GameGameplayThunkActionTypes => (dispatch) => {
  dispatch(setViewport(viewport));
}