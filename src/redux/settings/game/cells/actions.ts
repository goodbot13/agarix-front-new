import {
  GameCellsActionTypes,
  RingsType,
  SET_AUTO_HIDE_MASS_AND_NICKS,
  SET_FADE_SPEED,
  SET_MASS_SCALE,
  SET_MASS_UPDATE_DELAY,
  SET_NICKS_SCALE,
  SET_ONE_COLORED,
  SET_RINGS_SPINNING,
  SET_RINGS_TYPE,
  SET_SHADOW,
  SET_SHORT_MASS,
  SET_SHOW_MASS,
  SET_SHOW_MASS_MY_CELL,
  SET_SHOW_NICKS,
  SET_SHOW_NICK_MY_CELL,
  SET_SKINS_TYPE,
  SET_SOAK_SPEED,
  SET_SOAK_TO_EATEN,
  ShadowType,
  SkinsType,
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

export const setShortMass = (shortMass: boolean): GameCellsActionTypes => ({
  type: SET_SHORT_MASS,
  shortMass
});

export const setMassUpdateDelay = (massUpdateDelay: number): GameCellsActionTypes => ({
  type: SET_MASS_UPDATE_DELAY,
  massUpdateDelay
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

export const setSoakSpeed = (soakSpeed: number): GameCellsActionTypes => ({
  type: SET_SOAK_SPEED,
  soakSpeed
});

export const setFadeSpeed = (fadeSpeed: number): GameCellsActionTypes => ({
  type: SET_FADE_SPEED,
  fadeSpeed
});

export const setOneColored = (oneColored: boolean): GameCellsActionTypes => ({
  type: SET_ONE_COLORED,
  oneColored
});

export const setShadow = (shadow: ShadowType): GameCellsActionTypes => ({
  type: SET_SHADOW,
  shadow
});

export const setSoakToEaten = (soakToEaten: boolean): GameCellsActionTypes => ({
  type: SET_SOAK_TO_EATEN,
  soakToEaten
});

export const setNicksScale = (nicksScale: number): GameCellsActionTypes => ({
  type: SET_NICKS_SCALE,
  nicksScale
});

export const setMassScale = (massScale: number): GameCellsActionTypes => ({
  type: SET_MASS_SCALE,
  massScale
});