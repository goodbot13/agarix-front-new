import { RingsType, ShadowType, SkinsType } from "redux/settings/game/cells/types";

export default class GameCellsSettings {
  static setShowMass(value: boolean) {
    window.GameSettings.all.settings.game.cells.mass = value;
  }

  static setShowNicks(value: boolean) {
    window.GameSettings.all.settings.game.cells.nicks = value;
  }

  static setShowMassMyCell(value: boolean) {
    window.GameSettings.all.settings.game.cells.myMass = value;
  }

  static setShowNickMyCell(value: boolean) {
    window.GameSettings.all.settings.game.cells.myNick = value;
  }

  static setAutoHideMassAndNicks(value: boolean) {
    window.GameSettings.all.settings.game.cells.autoHideMassAndNicks = value;
  }

  static setShortMass(value: boolean) {
    window.GameSettings.all.settings.game.cells.shortMass = value;
  }

  static setMassUpdateDelay(value: number) {
    window.GameSettings.all.settings.game.cells.massUpdateDelay = value;
  }

  static setSkinsType(value: SkinsType) {
    window.GameSettings.all.settings.game.cells.skinsType = value;
  }

  static setRingsType(value: RingsType) {
    window.GameSettings.all.settings.game.cells.ringsType = value;
  }

  static setRingsSpinning(value: boolean) {
    window.GameSettings.all.settings.game.cells.ringsSpinning = value;
  }

  static setSoakSpeed(value: number) {
    window.GameSettings.all.settings.game.cells.soakSpeed = value;
  }

  static setFadeSpeed(value: number) {
    window.GameSettings.all.settings.game.cells.fadeSpeed = value;
  }

  static setOneColored(value: boolean) {
    window.GameSettings.all.settings.game.cells.oneColored = value;
  }

  static setShadow(value: ShadowType) {
    window.GameSettings.all.settings.game.cells.shadow = value;
  }
}