import { RGB } from "redux/settings/theming/types";

export default class ThemingSettingsCells {
  static setOneColoredColor(value: RGB) {
    window.GameSettings.all.settings.theming.cells.oneColoredColor = value;
  }
  
  static setOneColoredStatsColor(value: RGB) {
    window.GameSettings.all.settings.theming.cells.oneColoredStatsColor = value;
  }

  static setShadowColor(value: RGB) {
    window.GameSettings.all.settings.theming.cells.shadowColor = value;
  }

  static setMyShadowColor(value: RGB) {
    window.GameSettings.all.settings.theming.cells.myShadowColor = value;
  }

  static setShadowDistance(value: number) {
    window.GameSettings.all.settings.theming.cells.shadowDistance = value;
    window.GameSettings.updateThemingCells('Shadow');
  }

  static setShadowStrength(value: number) {
    window.GameSettings.all.settings.theming.cells.shadowStrength = value;
    window.GameSettings.updateThemingCells('Shadow');
  }

  static setCellsTransparency(value: number) {
    window.GameSettings.all.settings.theming.cells.transparency = value;
  }
  
  static setCellsColorLighten(value: number) {
    window.GameSettings.all.settings.theming.cells.colorLighten = value;
  }
}