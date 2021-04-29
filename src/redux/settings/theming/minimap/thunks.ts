import { RGB } from '../types';
import { ThemingMinimapThunkActionTypes } from './types';

import {
  setMinimapBackgroundColor,
  setMinimapGhostCellsColor,
  setMinimapMyViewportColor,
  setMinimapPlayerColor,
  setMinimapPlayerSize,
  setMinimapSize,
  setMinimapTopOneViewportColor,
} from './actions';

import ThemingSettingsMinimap from 'api/settings/Theming/ThemingSettingsMinimap';

export const thunkSetMinimapBackgroundColor = (
  backgroundColor: RGB,
): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapBackgroundColor(backgroundColor));
  ThemingSettingsMinimap.setMinimapBackgroundColor(backgroundColor);
};

export const thunkSetMinimapSize = (size: number): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapSize(size));
  ThemingSettingsMinimap.setMinimapSize(size);
};

export const thunkSetMinimapMyViewportColor = (
  myViewportColor: RGB,
): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapMyViewportColor(myViewportColor));
  ThemingSettingsMinimap.setMinimapMyViewportColor(myViewportColor);
};

export const thunkSetMinimapTopOneViewportColor = (
  topOneViewportColor: RGB,
): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapTopOneViewportColor(topOneViewportColor));
  ThemingSettingsMinimap.setMinimapTopOneViewportColor(topOneViewportColor);
};

export const thunkSetMinimapPlayerSize = (playerSize: number): ThemingMinimapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMinimapPlayerSize(playerSize));
  ThemingSettingsMinimap.setMinimapPlayerSize(playerSize);
};

export const thunkSetMinimapPlayerColor = (playerColor: RGB): ThemingMinimapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMinimapPlayerColor(playerColor));
  ThemingSettingsMinimap.setMinimapPlayerColor(playerColor);
};

export const thunkSetMinimapGhostCellsColor = (
  ghostCellsColor: RGB,
): ThemingMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMinimapGhostCellsColor(ghostCellsColor));
  ThemingSettingsMinimap.setMinimapGhostCellsColor(ghostCellsColor);
};
