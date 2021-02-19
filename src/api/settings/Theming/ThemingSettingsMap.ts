import { MapBorderType, MapLiveEffectStrengthType } from "redux/settings/theming/map/types";
import { RGB } from "redux/settings/theming/types";

export default class ThemingSettingsMap {
  static setMapBorderType(value: MapBorderType) {
    window.GameSettings.all.settings.theming.map.borderType = value;
  }

  static setMapBorderRoundness(value: number) {
    window.GameSettings.all.settings.theming.map.borderRoundness = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBorderWidth(value: number) {
    window.GameSettings.all.settings.theming.map.borderWidth = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBorderColor(value: RGB) {
    window.GameSettings.all.settings.theming.map.borderColor = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBorderGlow(value: boolean) {
    window.GameSettings.all.settings.theming.map.borderGlow = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBorderGlowColor(value: RGB) {
    window.GameSettings.all.settings.theming.map.borderGlowColor = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBorderGlowDistance(value: number) {
    window.GameSettings.all.settings.theming.map.borderGlowDistance = value;
    window.GameSettings.updateThemingMap('Border');
  }
  
  static setMapBorderGlowStrength(value: number) {
    window.GameSettings.all.settings.theming.map.borderGlowStrength = value;
    window.GameSettings.updateThemingMap('Border');
  }

  static setMapBackgroundTint(value: RGB) {
    window.GameSettings.all.settings.theming.map.backgroundTint = value;
    window.GameSettings.updateThemingMap('BgTint');
  }

  static setMapBackgroundImage(value: boolean) {
    window.GameSettings.all.settings.theming.map.backgroundImage = value;
  }

  static setMapBackgroundImageUrl(value: string) {
    window.GameSettings.all.settings.theming.map.backgroundImageUrl = value;
    window.GameSettings.updateThemingMap('BgImgUrl');
  }

  static setMapBackgroundImageLiveEffectStrength(value: MapLiveEffectStrengthType) {
    window.GameSettings.all.settings.theming.map.backgroundImageLiveEffectStrength = value;
  }

  static setMapGlobalBackgroundImage(value: boolean) {
    window.GameSettings.all.settings.theming.map.globalBackgroundImage = value;
  }

  static setMapGlobalBackgroundImageUrl(value: string) {
    window.GameSettings.all.settings.theming.map.globalBackgroundImageUrl = value;
    window.GameSettings.updateThemingMap('GlobalBgImgUrl');
  }

  static setMapGlobalBackgroundImageTint(value: RGB) {
    window.GameSettings.all.settings.theming.map.globalBackgroundImageTint = value;
    window.GameSettings.updateThemingMap('GlobalBgImgTint');
  }

  static setMapGlobalBackgroundImageLiveEffectStrength(value: MapLiveEffectStrengthType) {
    window.GameSettings.all.settings.theming.map.globalBackgroundImageLiveEffectStrength = value;
  }
}