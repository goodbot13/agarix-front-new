import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_SHOW_MASS = 'SET_SHOW_MASS';
export const SET_SHOW_NICKS = 'SET_SHOW_NICKS';
export const SET_SHOW_MASS_MY_CELL = 'SET_SHOW_MASS_MY_CELL';
export const SET_SHOW_NICK_MY_CELL = 'SET_SHOW_NICK_MY_CELL';
export const SET_AUTO_HIDE_MASS_AND_NICKS = 'SET_AUTO_HIDE_MASS_AND_NICKS';
export const SET_SKINS_TYPE = 'SET_SKINS_TYPE';
export const SET_RINGS_TYPE = 'SET_RINGS_TYPE';
export const SET_RINGS_SPINNING = 'SET_RINGS_SPINNING';
export const SET_SOAK_SPEED = 'SET_SOAK_SPEED';
export const SET_FADE_SPEED = 'SET_FADE_SPEED';
export const SET_ONE_COLORED = ''; // todo
export const SET_SHADOW = 'SET_SHADOW';

export type SkinsType = 'Disabled' | 'Custom' | 'Vanilla' | 'All';
export type RingsType = 'Disabled' | '2CL' | 'Acimazis' | 'Yue';
export type SoakSpeedType = 'Disabled' | '1' | '2' | '3' | '4' | '5';
export type FadeSpeedType = 'Disabled' | '1' | '2' | '3' | '4' | '5';
export type ShadowType = 'Disabled' | 'Only me' | 'All';

export interface IGameCellsState {
  mass: boolean,
  nicks: boolean,
  myMass: boolean,
  myNick: boolean,
  autoHideMassAndNicks: boolean,
  skinsType: SkinsType,
  ringsType: RingsType,
  ringsSpinning: boolean,
  soakSpeed: SoakSpeedType,
  fadeSpeed: FadeSpeedType,
  oneColored: boolean,
  shadow: ShadowType
}

interface SetShowMassAction {
  type: typeof SET_SHOW_MASS,
  mass: boolean
}

interface SetShowNicksAction {
  type: typeof SET_SHOW_NICKS,
  nicks: boolean
}

interface SetShowMassMyCellAction {
  type: typeof SET_SHOW_MASS_MY_CELL,
  myMass: boolean
}

interface SetShowNickMyCellAction {
  type: typeof SET_SHOW_NICK_MY_CELL,
  myNick: boolean
}

interface SetAutoHideMassAndNicksAction {
  type: typeof SET_AUTO_HIDE_MASS_AND_NICKS,
  autoHideMassAndNicks: boolean
}

interface SetSkinsTypeAction {
  type: typeof SET_SKINS_TYPE,
  skinsType: SkinsType
}

interface SetRingsTypeAction {
  type: typeof SET_RINGS_TYPE,
  ringsType: RingsType
}

interface SetRingsSpinningAction {
  type: typeof SET_RINGS_SPINNING,
  ringsSpinning: boolean
}

interface SetSoakSpeedAction {
  type: typeof SET_SOAK_SPEED,
  soakSpeed: SoakSpeedType
}

interface SetFadeSpeedAction {
  type: typeof SET_FADE_SPEED,
  fadeSpeed: FadeSpeedType
}

interface SetOneColoredAction {
  type: typeof SET_ONE_COLORED,
  oneColored: boolean
}

interface SetShadowAction {
  type: typeof SET_SHADOW,
  shadow: ShadowType
}

export type GameCellsActionTypes = SetShowMassAction | SetShowNicksAction | SetShowMassMyCellAction |
                                   SetShowNickMyCellAction | SetAutoHideMassAndNicksAction | SetSkinsTypeAction |
                                   SetRingsTypeAction | SetRingsSpinningAction | SetSoakSpeedAction | SetFadeSpeedAction |
                                   SetOneColoredAction | SetShadowAction;

export type GameCellsThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameCellsActionTypes>;