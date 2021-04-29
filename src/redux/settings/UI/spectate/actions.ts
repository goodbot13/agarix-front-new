import { RGB } from 'redux/settings/theming/types';
import {
  SET_SPECTATE_BACKDROP_BLUR,
  SET_SPECTATE_BACKGROUND_COLOR,
  SET_SPECTATE_SHOWN,
  UISpectateActionTypes,
} from './types';

export const setSpectateShown = (shown: boolean): UISpectateActionTypes => ({
  type: SET_SPECTATE_SHOWN,
  shown,
});

export const setSpectateBackgroundColor = (backgroundColor: RGB): UISpectateActionTypes => ({
  type: SET_SPECTATE_BACKGROUND_COLOR,
  backgroundColor,
});

export const setSpectateBackdropBlur = (backdropBlur: boolean): UISpectateActionTypes => ({
  type: SET_SPECTATE_BACKDROP_BLUR,
  backdropBlur,
});
