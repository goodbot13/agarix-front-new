import GameMinimapSettings from 'api/settings/Game/GameMinimapSettings';

import {
  setDrawPlayerPosition,
  setGhostCells,
  setMass,
  setMinimapEnabled,
  setNicks,
  setRealPlayersCells,
  setViewport,
} from './actions';
import { GameMinimapThunkActionTypes, ViewportType } from './types';

export const thunkSetMinimapEnabled = (enabled: boolean): GameMinimapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setMinimapEnabled(enabled));
  GameMinimapSettings.setMinimapEnabled(enabled);
};

export const thunkSetViewport = (viewport: ViewportType): GameMinimapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setViewport(viewport));
  GameMinimapSettings.setViewport(viewport);
};

export const thunkSetGhostCells = (ghostCells: boolean): GameMinimapThunkActionTypes => (
  dispatch,
) => {
  dispatch(setGhostCells(ghostCells));
  GameMinimapSettings.setGhostCells(ghostCells);
};

export const thunkSetRealPlayersCells = (
  realPlayersCells: boolean,
): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setRealPlayersCells(realPlayersCells));
  GameMinimapSettings.setRealPlayersCells(realPlayersCells);
};

export const thunkSetMass = (mass: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setMass(mass));
  GameMinimapSettings.setMass(mass);
};

export const thunkSetNicks = (nicks: boolean): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setNicks(nicks));
  GameMinimapSettings.setNicks(nicks);
};

export const thunkSetDrawPlayerPosition = (
  playerPosition: boolean,
): GameMinimapThunkActionTypes => (dispatch) => {
  dispatch(setDrawPlayerPosition(playerPosition));
  GameMinimapSettings.setDrawPlayerPosition(playerPosition);
};
