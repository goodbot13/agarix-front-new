import { CellRemoveAnimationType, SpawnAnimationType } from "redux/settings/game/effects/types";

export default class GameEffectsSettings {
  static setCellRemoveAnimation(value: CellRemoveAnimationType) {
    window.GameSettings.all.settings.game.effects.cellRemoveAnimation = value;
  }

  static setCellRemoveAnimationForHiddenSpectator(value: boolean) {
    window.GameSettings.all.settings.game.effects.cellRemoveAnimationForHiddenSpectator = value;
  }

  static setSpawnAnimation(value: SpawnAnimationType) {
    window.GameSettings.all.settings.game.effects.spawnAnimation = value;
  }

  static setWtfRgbMode(value: boolean) {
    window.GameSettings.all.settings.game.effects.wtfRgbMode = value;
  }
} 