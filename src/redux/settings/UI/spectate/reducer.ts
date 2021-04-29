import Storage from 'api/storage/Storage';
import {
  IUISpectateState,
  SET_SPECTATE_BACKDROP_BLUR,
  SET_SPECTATE_BACKGROUND_COLOR,
  SET_SPECTATE_SHOWN,
  UISpectateActionTypes,
} from './types';

const initState: IUISpectateState = Storage.get().settings.UI.spectate;

export const settingsSpectateReducer = (
  state = initState,
  action: UISpectateActionTypes,
): IUISpectateState => {
  switch (action.type) {
    case SET_SPECTATE_SHOWN:
      return {
        ...state,
        shown: action.shown,
      };

    case SET_SPECTATE_BACKDROP_BLUR:
      return {
        ...state,
        backdropBlur: action.backdropBlur,
      };

    case SET_SPECTATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };

    default:
      return state;
  }
};
