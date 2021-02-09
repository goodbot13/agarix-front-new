import GameCellsSettings from "api/settings/Game/GameCellsSetting";

import {
  setAutoHideMassAndNicks,
  setFadeSpeed,
  setOneColored,
  setRingsSpinning,
  setRingsType,
  setShadow,
  setShowMass,
  setShowMassMyCell,
  setShowNickMyCell,
  setShowNicks,
  setSkinsType,
  setSoakSpeed
} from "./actions";

import { FadeSpeedType, GameCellsThunkActionTypes, RingsType, ShadowType, SkinsType, SoakSpeedType } from "./types";

export const thunkSetShowMass = (mass: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowMass(mass));
  GameCellsSettings.setShowMass(mass);
}

export const thunkSetShowNicks = (nicks: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowNicks(nicks));
  GameCellsSettings.setShowNicks(nicks);
}

export const thunkSetShowMassMyCell = (myMass: boolean): GameCellsThunkActionTypes => (disaptch) => {
  disaptch(setShowMassMyCell(myMass));
  GameCellsSettings.setShowMassMyCell(myMass);
}

export const thunkSetShowNickMyCell = (myNick: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowNickMyCell(myNick));
  GameCellsSettings.setShowNickMyCell(myNick);
}

export const thunkSetAutoHideMassAndNicks = (autoHideMassAndNicks: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setAutoHideMassAndNicks(autoHideMassAndNicks));
  GameCellsSettings.setAutoHideMassAndNicks(autoHideMassAndNicks);
}

export const thunkSetSkinsType = (skinsType: SkinsType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setSkinsType(skinsType));
  GameCellsSettings.setSkinsType(skinsType);
}

export const thunkSetRingsType = (ringsType: RingsType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setRingsType(ringsType));
  GameCellsSettings.setRingsType(ringsType);
}

export const thunkSetRingsSpinning = (ringsSpinning: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setRingsSpinning(ringsSpinning));
  GameCellsSettings.setRingsSpinning(ringsSpinning);
}

export const thunkSetSoakSpeed = (soakSpeed: SoakSpeedType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setSoakSpeed(soakSpeed));
  GameCellsSettings.setSoakSpeed(soakSpeed);
}

export const thunkSetFadeSpeed = (fadeSpeed: FadeSpeedType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setFadeSpeed(fadeSpeed));
  GameCellsSettings.setFadeSpeed(fadeSpeed);
}

export const thunkSetOneColored = (oneColored: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setOneColored(oneColored));
  GameCellsSettings.setOneColored(oneColored);
}

export const thunkSetShadow = (shadow: ShadowType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShadow(shadow));
  GameCellsSettings.setShadow(shadow);
}