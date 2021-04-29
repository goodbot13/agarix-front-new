import { RGB } from 'redux/settings/theming/types';

export default class ThemingSettingsFood {
  static setFoodEnabled(value: boolean) {
    window.GameSettings.all.settings.theming.food.enabled = value;
  }

  static setFoodFirstTabEnabled(value: boolean) {
    window.GameSettings.all.settings.theming.food.firstTabEnabled = value;
  }

  static setFoodSecondTabEnabled(value: boolean) {
    window.GameSettings.all.settings.theming.food.secondTabEnabled = value;
  }

  static setFoodTopOneTabEnabled(value: boolean) {
    window.GameSettings.all.settings.theming.food.topOneTabEnabled = value;
  }

  static setFoodSize(value: number) {
    window.GameSettings.all.settings.theming.food.size = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodColor(value: RGB) {
    window.GameSettings.all.settings.theming.food.color = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodGlow(value: boolean) {
    window.GameSettings.all.settings.theming.food.glow = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodGlowColor(value: RGB) {
    window.GameSettings.all.settings.theming.food.glowColor = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodGlowDistance(value: number) {
    window.GameSettings.all.settings.theming.food.glowDistance = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodGlowStrength(value: number) {
    window.GameSettings.all.settings.theming.food.glowStrength = value;
    window.GameSettings.updateThemingFood();
  }

  static setFoodCrisp(value: boolean) {
    window.GameSettings.all.settings.theming.food.crisp = value;
    window.GameSettings.updateThemingFood();
  }
}
