import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_LEFT_PROFILE_NICK = 'SET_LEFT_PROFILE_NICK';
export const SET_LEFT_PROFILE_SKIN_URL = 'SET_LEFT_PROFILE_SKIN_URL';
export const SET_LEFT_PROFILE_SELECTED_INDEX = 'SET_LEFT_PROFILE_SELECTED_INDEX';
export const SET_LEFT_PROFILE_LOGIN_TYPE = 'SET_LEFT_PROFILE_LOGIN_TYPE';
export const SET_RIGHT_PROFILE_NICK = 'SET_RIGHT_PROFILE_NICK';
export const SET_RIGHT_PROFILE_SKIN_URL = 'SET_RIGHT_PROFILE_SKIN_URL';
export const SET_RIGHT_PROFILE_SELECTED_INDEX = 'SET_RIGHT_PROFILE_SELECTED_INDEX';
export const SET_RIGHT_PROFILE_LOGIN_TYPE = 'SET_RIGHT_PROFILE_LOGIN_TYPE';
export const SET_FACEBOOK_LOGGED_IN = 'SET_FACEBOOK_LOGGED_IN';
export const SET_GOOGLE_LOGGED_IN = 'SET_GOOGLE_LOGGED_IN';
export const SET_TAG = 'SET_TAG';

export type TLoginType = 'FACEBOOK' | 'GOOGLE';

export interface IProfile {
  nick: string,
  skinUrl: string,
  tag: string
}

export interface IProfilesState {
  leftProfiles: Array<IProfile>,
  rightProfiles: Array<IProfile>,
  leftSelectedIndex: number,
  rightSelectedIndex: number,
  facebookLoggedIn: boolean,
  googleLoggedIn: boolean,
  leftProfileLoginType: TLoginType,
  rightProfileLoginType: TLoginType
}

interface SetLeftProfileNickAction {
  type: typeof SET_LEFT_PROFILE_NICK,
  nick: string
}

interface SetLeftProfileSkinUrlAction {
  type: typeof SET_LEFT_PROFILE_SKIN_URL,
  skinUrl: string
}

interface SetLeftProfileSelectedIndexAction {
  type: typeof SET_LEFT_PROFILE_SELECTED_INDEX,
  leftSelectedIndex: number
}

interface SetRightProfileSkinUrlAction {
  type: typeof SET_RIGHT_PROFILE_SKIN_URL,
  skinUrl: string
}

interface SetRightProfileNickAction {
  type: typeof SET_RIGHT_PROFILE_NICK,
  nick: string
}

interface SetRightProfileSelectedIndexAction {
  type: typeof SET_RIGHT_PROFILE_SELECTED_INDEX,
  rightSelectedIndex: number
}

interface SetTagAction {
  type: typeof SET_TAG,
  tag: string
}

interface SetLeftProfileLoginTypeAction {
  type: typeof SET_LEFT_PROFILE_LOGIN_TYPE,
  loginType: TLoginType
}

interface SetRightProfileLoginTypeAction {
  type: typeof SET_RIGHT_PROFILE_LOGIN_TYPE,
  loginType: TLoginType
}

interface SetFacebookLoggedInAction {
  type: typeof SET_FACEBOOK_LOGGED_IN,
  facebookLoggedIn: boolean
}

interface SetGoogleLoggedInAction {
  type: typeof SET_GOOGLE_LOGGED_IN,
  googleLoggedIn: boolean
}

export type ProfilesActionTypes = SetLeftProfileNickAction | SetLeftProfileSkinUrlAction | SetLeftProfileSelectedIndexAction |
                                  SetRightProfileSkinUrlAction | SetRightProfileNickAction | SetRightProfileSelectedIndexAction |
                                  SetTagAction | SetLeftProfileLoginTypeAction | SetRightProfileLoginTypeAction |
                                  SetFacebookLoggedInAction | SetGoogleLoggedInAction;

export type ProfilesThunkActionTypes = ThunkAction<void, AppStateType, unknown, ProfilesActionTypes>;