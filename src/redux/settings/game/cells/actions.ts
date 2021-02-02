import {
  FadeSpeedType,
  GameCellsActionTypes,
  RingsType,
  SET_AUTO_HIDE_MASS_AND_NICKS,
  SET_COLOR_WASH,
  SET_FADE_SPEED,
  SET_RINGS_SPINNING,
  SET_RINGS_TYPE,
  SET_SHOW_MASS,
  SET_SHOW_MASS_MY_CELL,
  SET_SHOW_NICKS,
  SET_SHOW_NICK_MY_CELL,
  SET_SKINS_TYPE,
  SET_SOAK_SPEED,
  SkinsType,
  SoakSpeedType
} from "./types";

export const setShowMass = (mass: boolean): GameCellsActionTypes => ({
  type: SET_SHOW_MASS,
  mass
});

export const setShowNicks = (nicks: boolean): GameCellsActionTypes => ({
  type: SET_SHOW_NICKS,
  nicks
});

export const setShowMassMyCell = (myMass: boolean): GameCellsActionTypes => ({
  type: SET_SHOW_MASS_MY_CELL,
  myMass
});

export const setShowNickMyCell = (myNick: boolean): GameCellsActionTypes => ({
  type: SET_SHOW_NICK_MY_CELL,
  myNick
});

export const setAutoHideMassAndNicks = (autoHideMassAndNicks: boolean): GameCellsActionTypes => ({
  type: SET_AUTO_HIDE_MASS_AND_NICKS,
  autoHideMassAndNicks
});

export const setSkinsType = (skinsType: SkinsType): GameCellsActionTypes => ({
  type: SET_SKINS_TYPE,
  skinsType
});

export const setRingsType = (ringsType: RingsType): GameCellsActionTypes => ({
  type: SET_RINGS_TYPE,
  ringsType
});

export const setRingsSpinning = (ringsSpinning: boolean): GameCellsActionTypes => ({
  type: SET_RINGS_SPINNING,
  ringsSpinning
});

export const setSoakSpeed = (soakSpeed: SoakSpeedType): GameCellsActionTypes => ({
  type: SET_SOAK_SPEED,
  soakSpeed
});

export const setFadeSpeed = (fadeSpeed: FadeSpeedType): GameCellsActionTypes => ({
  type: SET_FADE_SPEED,
  fadeSpeed
});

export const setColorWash = (colorWash: number): GameCellsActionTypes => ({
  type: SET_COLOR_WASH,
  colorWash
});