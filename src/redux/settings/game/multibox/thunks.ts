import { GameMultiboxThunkActionTypes } from './types';
import {
  setMultiboxChangeCellColor,
  setMultiboxChangeRingColor,
  setMultiboxEnabled,
  setMultiboxHideOwnSkins,
  setMultiboxStaticColor,
  setMultiboxRing,
  setMultiboxSmoothSwitch,
} from './actions';

import GameMultiboxSettings from 'api/settings/Game/GameMultiboxSettings';

export const thunkSetMultiboxEnabled = (enabled: boolean): GameMultiboxThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMultiboxEnabled(enabled));
  GameMultiboxSettings.setMultiboxEnabled(enabled);
};

export const thunkSetMultiboxRing = (ring: boolean): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxRing(ring));
  GameMultiboxSettings.setMultiboxRing(ring);
};

export const thunkSetMultiboxChangeRingColor = (
  changeRingColor: boolean,
): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxChangeRingColor(changeRingColor));
  GameMultiboxSettings.setMultiboxChangeRingColor(changeRingColor);
};

export const thunkSetMultiboxChangeCellColor = (
  changeCellColor: boolean,
): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxChangeCellColor(changeCellColor));
  GameMultiboxSettings.setMultiboxChangeCellColor(changeCellColor);
};

export const thunkSetMultiboxHideOwnSkins = (
  hideOwnSkins: boolean,
): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxHideOwnSkins(hideOwnSkins));
  GameMultiboxSettings.setMultiboxHideOwnSkins(hideOwnSkins);
};

export const thunkSetMultiboxStaticColor = (staticColor: boolean): GameMultiboxThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMultiboxStaticColor(staticColor));
  GameMultiboxSettings.setMultiboxStaticColor(staticColor);
};

export const thunkSetMultiboxSmoothSwitch = (
  smoothSwitch: boolean,
): GameMultiboxThunkActionTypes => (dispatch) => {
  dispatch(setMultiboxSmoothSwitch(smoothSwitch));
  GameMultiboxSettings.setMultiboxSmoothSwitch(smoothSwitch);
};
