export default class GameMultiboxSettings {
  static setMultiboxEnabled(value: boolean) {
    window.GameSettings.all.settings.game.multibox.enabled = value;
    window.GameAPI?.setMultiboxEnabled(value);
  }
  
  static setMultiboxRing(value: boolean) {
    window.GameSettings.all.settings.game.multibox.ring = value;
  }

  static setMultiboxChangeRingColor(value: boolean) {
    window.GameSettings.all.settings.game.multibox.changeRingColor = value;
  }

  static setMultiboxChangeCellColor(value: boolean) {
    window.GameSettings.all.settings.game.multibox.changeCellColor = value;
  }

  static setMultiboxHideOwnSkins(value: boolean) {
    window.GameSettings.all.settings.game.multibox.hideOwnSkins = value;
  }

  static setMultiboxStaticColor(value: boolean) {
    window.GameSettings.all.settings.game.multibox.staticColor = value;
  }
}