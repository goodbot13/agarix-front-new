import {
  setAutoHideMassAndNicks,
  setColorWash,
  setFadeSpeed,
  setRingsSpinning,
  setRingsType,
  setShowMass,
  setShowMassMyCell,
  setShowNickMyCell,
  setShowNicks,
  setSkinsType,
  setSoakSpeed
} from "./actions";

import { FadeSpeedType, GameCellsThunkActionTypes, RingsType, SkinsType, SoakSpeedType } from "./types";

export const thunkSetShowMass = (mass: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowMass(mass));
}

export const thunkSetShowNicks = (nicks: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowNicks(nicks));
}

export const thunkSetShowMassMyCell = (myMass: boolean): GameCellsThunkActionTypes => (disaptch) => {
  disaptch(setShowMassMyCell(myMass));
}

export const thunkSetShowNickMyCell = (myNick: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setShowNickMyCell(myNick));
}

export const thunkSetAutoHideMassAndNicks = (autoHideMassAndNicks: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setAutoHideMassAndNicks(autoHideMassAndNicks));
}

export const thunkSetSkinsType = (skinsType: SkinsType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setSkinsType(skinsType));
}

export const thunkSetRingsType = (ringsType: RingsType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setRingsType(ringsType));
}

export const thunkSetRingsSpinning = (ringsSpinning: boolean): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setRingsSpinning(ringsSpinning));
}

export const thunkSetSoakSpeed = (soakSpeed: SoakSpeedType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setSoakSpeed(soakSpeed));
}

export const thunkSetFadeSpeed = (fadeSpeed: FadeSpeedType): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setFadeSpeed(fadeSpeed));
}

export const thunkSetColorWash = (colorWash: number): GameCellsThunkActionTypes => (dispatch) => {
  dispatch(setColorWash(colorWash))
}