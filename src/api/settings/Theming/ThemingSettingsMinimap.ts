import { RGB } from "redux/settings/theming/types";

export default class ThemingSettingsMinimap {
  static setMinimapBackgroundColor(value: RGB) {
    window.GameSettings.all.settings.theming.minimap.backgroundColor = value;
    window.GameSettings.updateThemingMinimap('BgColor');
  }

  static setMinimapSize(value: number) {
    window.GameSettings.all.settings.theming.minimap.size = value;
  }

  static setMinimapMyViewportColor(value: RGB) {
    window.GameSettings.all.settings.theming.minimap.myViewportColor = value;
    window.GameSettings.updateThemingMinimap('ViewportColors');
  }

  static setMinimapTopOneViewportColor(value: RGB) {
    window.GameSettings.all.settings.theming.minimap.topOneViewportColor = value;
    window.GameSettings.updateThemingMinimap('ViewportColors');
  }

  static setMinimapPlayerSize(value: number) {
    window.GameSettings.all.settings.theming.minimap.playerSize = value;
  }

  static setMinimapPlayerColor(value: RGB) {
    window.GameSettings.all.settings.theming.minimap.playerColor = value;
    window.GameSettings.updateThemingMinimap('PlayerColor');
  }

  static setMinimapGhostCellsColor(value: RGB) {
    window.GameSettings.all.settings.theming.minimap.ghostCellsColor = value;
    window.GameSettings.updateThemingMinimap('GhostCellsColor');
  }
}