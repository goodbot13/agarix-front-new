import {
  ProfilesActionTypes,
  SET_FACEBOOK_LOGGED_IN,
  SET_GOOGLE_LOGGED_IN,
  SET_LEFT_PROFILE_LOGIN_TYPE,
  SET_LEFT_PROFILE_NICK,
  SET_LEFT_PROFILE_SELECTED_INDEX,
  SET_LEFT_PROFILE_SKIN_URL,
  SET_RIGHT_PROFILE_LOGIN_TYPE,
  SET_RIGHT_PROFILE_NICK,
  SET_RIGHT_PROFILE_SELECTED_INDEX,
  SET_RIGHT_PROFILE_SKIN_URL,
  SET_TAG,
  TLoginType,
} from './types';

export const setLeftProfileNick = (nick: string): ProfilesActionTypes => ({
  type: SET_LEFT_PROFILE_NICK,
  nick,
});

export const setLeftProfileSkinUrl = (skinUrl: string): ProfilesActionTypes => ({
  type: SET_LEFT_PROFILE_SKIN_URL,
  skinUrl,
});

export const setLeftProfileSelectedIndex = (leftSelectedIndex: number): ProfilesActionTypes => ({
  type: SET_LEFT_PROFILE_SELECTED_INDEX,
  leftSelectedIndex,
});

export const setRightProfileNick = (nick: string): ProfilesActionTypes => ({
  type: SET_RIGHT_PROFILE_NICK,
  nick,
});

export const setRightProfileSkinUrl = (skinUrl: string): ProfilesActionTypes => ({
  type: SET_RIGHT_PROFILE_SKIN_URL,
  skinUrl,
});

export const setRightProfileSelectedIndex = (rightSelectedIndex: number): ProfilesActionTypes => ({
  type: SET_RIGHT_PROFILE_SELECTED_INDEX,
  rightSelectedIndex,
});

export const setTag = (tag: string): ProfilesActionTypes => ({
  type: SET_TAG,
  tag,
});

export const setLeftProfileLoginType = (loginType: TLoginType): ProfilesActionTypes => ({
  type: SET_LEFT_PROFILE_LOGIN_TYPE,
  loginType,
});

export const setRightProfileLoginType = (loginType: TLoginType): ProfilesActionTypes => ({
  type: SET_RIGHT_PROFILE_LOGIN_TYPE,
  loginType,
});

export const setFacebookLoggedIn = (facebookLoggedIn: boolean): ProfilesActionTypes => ({
  type: SET_FACEBOOK_LOGGED_IN,
  facebookLoggedIn,
});

export const setGoogleLoggedIn = (googleLoggedIn: boolean): ProfilesActionTypes => ({
  type: SET_GOOGLE_LOGGED_IN,
  googleLoggedIn,
});
