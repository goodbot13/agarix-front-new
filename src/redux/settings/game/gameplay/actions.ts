import {
  CameraStyleType,
  GameGameplayActionTypes,
  SET_ANIMATION_SPEED,
  SET_CAMERA_SPEED,
  SET_CAMERA_STYLE,
  SET_SPECTATOR_MODE,
  SET_VIEWPORT,
  SET_ZOOM_SPEED,
  SpectatorModeType,
  ViewportType
} from "./types";

export const setAnimationSpeed = (animationSpeed: number): GameGameplayActionTypes => ({
  type: SET_ANIMATION_SPEED,
  animationSpeed
});

export const zetZoomSpeed = (zoomSpeed: number): GameGameplayActionTypes => ({
  type: SET_ZOOM_SPEED,
  zoomSpeed
});

export const setCameraSpeed = (cameraSpeed: number): GameGameplayActionTypes => ({
  type: SET_CAMERA_SPEED,
  cameraSpeed
});

export const setCameraStyle = (cameraStyle: CameraStyleType): GameGameplayActionTypes => ({
  type: SET_CAMERA_STYLE,
  cameraStyle
});

export const setSpectatorMode = (spectatorMode: SpectatorModeType): GameGameplayActionTypes => ({
  type: SET_SPECTATOR_MODE,
  spectatorMode
});

export const setViewport = (viewport: ViewportType): GameGameplayActionTypes => ({
  type: SET_VIEWPORT,
  viewport
})