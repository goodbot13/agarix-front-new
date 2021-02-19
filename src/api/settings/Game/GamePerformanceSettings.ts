import { FpsLockType, GlowFilterShaderType, RenderModeType } from "redux/settings/game/performance/types";

export default class GamePerformanceSettings {
  static setRenderMode(value: RenderModeType) {
    window.GameSettings.all.settings.game.performance.renderMode = value;
  }

  static setAntialiasing(value: boolean) {
    window.GameSettings.all.settings.game.performance.antialiasing = value;
  }

  static setCulling(value: boolean) {
    window.GameSettings.all.settings.game.performance.culling = value;
  }

  static setFoodPerformanceMode(value: boolean) {
    window.GameSettings.all.settings.game.performance.foodPerformanceMode = value;
  }

  static setGlowFilterShaderType(value: GlowFilterShaderType) {
    window.GameSettings.all.settings.game.performance.glowFilterShaderType = value;
  }

  static setFpsLockType(value: FpsLockType) {
    window.GameSettings.all.settings.game.performance.fpsLockType = value;
  }
}