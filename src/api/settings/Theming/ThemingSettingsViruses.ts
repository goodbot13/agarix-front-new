import { RGB } from 'redux/settings/theming/types';
import { VirusMassType } from 'redux/settings/theming/viruses/types';

export default class ThemingSettingsViruses {
  static setVirusColor(value: RGB) {
    window.GameSettings.all.settings.theming.viruses.color = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusBorderWidth(value: number) {
    window.GameSettings.all.settings.theming.viruses.borderWidth = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusBorderColor(value: RGB) {
    window.GameSettings.all.settings.theming.viruses.borderColor = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusGlow(value: boolean) {
    window.GameSettings.all.settings.theming.viruses.glow = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusGlowColor(value: RGB) {
    window.GameSettings.all.settings.theming.viruses.glowColor = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusGlowDistance(value: number) {
    window.GameSettings.all.settings.theming.viruses.glowDistance = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusGlowStrength(value: number) {
    window.GameSettings.all.settings.theming.viruses.glowStrength = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusTransparency(value: number) {
    window.GameSettings.all.settings.theming.viruses.transparency = value;
    window.GameSettings.updateThemingViruses();
  }

  static setVirusMassType(value: VirusMassType) {
    window.GameSettings.all.settings.theming.viruses.massType = value;
  }

  static setFillCircleColor(value: RGB) {
    window.GameSettings.all.settings.theming.viruses.fillCircleColor = value;
  }
}
