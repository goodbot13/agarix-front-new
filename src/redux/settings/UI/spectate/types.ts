import { RGB } from 'redux/settings/theming/types';

export const SET_SPECTATE_SHOWN = 'SET_SPECTATE_SHOWN';
export const SET_SPECTATE_BACKGROUND_COLOR = 'SET_SPECTATE_BACKGROUND_COLOR';
export const SET_SPECTATE_BACKDROP_BLUR = 'SET_SPECTATE_BACKDROP_BLUR';

export interface IUISpectateState {
  shown: boolean;
  backgroundColor: RGB;
  backdropBlur: boolean;
}

interface SetSpectateShownAction {
  type: typeof SET_SPECTATE_SHOWN;
  shown: boolean;
}

interface SetSpectateBackgroundColorAction {
  type: typeof SET_SPECTATE_BACKGROUND_COLOR;
  backgroundColor: RGB;
}

interface SetSpectateBackdropBlurAction {
  type: typeof SET_SPECTATE_BACKDROP_BLUR;
  backdropBlur: boolean;
}

export type UISpectateActionTypes =
  | SetSpectateShownAction
  | SetSpectateBackgroundColorAction
  | SetSpectateBackdropBlurAction;
