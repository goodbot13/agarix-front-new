import { MultiboxRingStyleType } from "redux/settings/theming/multibox/types";
import { RGB } from "redux/settings/theming/types";

export default class ThemingSettingsMultibox {
  static setMultiboxRingStyle(value: MultiboxRingStyleType) {
    window.GameSettings.all.settings.theming.multibox.ringStyle = value;
  }

  static setMultiboxLinedRingSize(value: number) {
    window.GameSettings.all.settings.theming.multibox.linedRingSize = value;
    window.GameSettings.updateThemingMultibox('LinedRing');
  }

  static setMultiboxInitialRingColor(value: RGB) {
    window.GameSettings.all.settings.theming.multibox.initialRingColor = value;
  }

  static setMultiboxFocusedRingColor(value: RGB) {
    window.GameSettings.all.settings.theming.multibox.focusedRingColor = value;
  }

  static setMultiboxInitialStaticCellColor(value: RGB) {
    window.GameSettings.all.settings.theming.multibox.initialStaticCellColor = value;
  }

  static setMultiboxFocusedStaticCellColor(value: RGB) {
    window.GameSettings.all.settings.theming.multibox.focusedStaticCellColor = value;
  }
}