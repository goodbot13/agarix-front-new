import {
  CameraStyleType,
  SpectatorModeType,
  ViewportType,
} from 'redux/settings/game/gameplay/types';

export default class GameGameplaySettings {
  static setAnimationSpeed(value: number) {
    window.GameSettings.all.settings.game.gameplay.animationSpeed = value;
  }

  static zetZoomSpeed(value: number) {
    window.GameSettings.all.settings.game.gameplay.zoomSpeed = value;
  }

  static setCameraSpeed(value: number) {
    window.GameSettings.all.settings.game.gameplay.cameraSpeed = value;
  }

  static setCameraStyle(value: CameraStyleType) {
    window.GameSettings.all.settings.game.gameplay.cameraStyle = value;
  }

  static setSpectatorMode(value: SpectatorModeType) {
    window.GameSettings.all.settings.game.gameplay.spectatorMode = value;

    switch (value) {
      case 'Disabled':
        window.GameAPI?.setTopOneView(false);
        window.GameAPI?.setFullMapView(false);
        break;

      case 'Top one':
        window.GameAPI?.setTopOneView(true);
        break;

      case 'Full map':
        window.GameAPI?.setFullMapView(true);
        break;
    }
  }

  static setViewport(value: ViewportType) {
    window.GameSettings.all.settings.game.gameplay.viewport = value;
  }
}
