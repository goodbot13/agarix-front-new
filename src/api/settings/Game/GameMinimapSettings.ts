import { ViewportType } from 'redux/settings/game/minimap/types';

export default class GameMinimapSettings {
  static setMinimapEnabled(value: boolean) {
    window.GameSettings.all.settings.game.minimap.enabled = value;
  }

  static setViewport(value: ViewportType) {
    window.GameSettings.all.settings.game.minimap.viewport = value;
  }

  static setGhostCells(value: boolean) {
    window.GameSettings.all.settings.game.minimap.ghostCells = value;
  }

  static setRealPlayersCells(value: boolean) {
    window.GameSettings.all.settings.game.minimap.realPlayersCells = value;
  }

  static setMass(value: boolean) {
    window.GameSettings.all.settings.game.minimap.mass = value;
  }

  static setNicks(value: boolean) {
    window.GameSettings.all.settings.game.minimap.nicks = value;
  }

  static setDrawPlayerPosition(value: boolean) {
    window.GameSettings.all.settings.game.minimap.playerPosition = value;
  }
}
