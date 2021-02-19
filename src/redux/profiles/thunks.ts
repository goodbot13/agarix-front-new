import ProfilesSettings from "api/settings/Profiles/ProfilesSettings";

import { 
  setLeftProfileNick, 
  setLeftProfileSelectedIndex, 
  setLeftProfileSkinUrl, 
  setRightProfileNick, 
  setRightProfileSelectedIndex, 
  setRightProfileSkinUrl,
  setTag 
} from "./actions";

import { ProfilesThunkActionTypes } from "./types";

export const thunkSetLeftProfileNick = (nick: string): ProfilesThunkActionTypes => (dispatch) => {
  dispatch(setLeftProfileNick(nick));
  ProfilesSettings.setLeftProfileNick(nick);
}

export const thunkSetLeftProfileSkinUrl = (url: string): ProfilesThunkActionTypes => (dispatch) => {
  dispatch(setLeftProfileSkinUrl(url));
  ProfilesSettings.setLeftProfileSkinUrl(url);
}

export const thunkSetLeftProfileSelectedIndex = (i: number): ProfilesThunkActionTypes => (dispatch, getState) => {
  dispatch(setLeftProfileSelectedIndex(i));
  
  const currentProfile = getState().profiles.leftProfiles[i];
  ProfilesSettings.setLeftProfile(currentProfile.nick, currentProfile.skinUrl, currentProfile.tag);
}

export const thunkSetRightProfileNick = (nick: string): ProfilesThunkActionTypes => (dispatch) => {
  dispatch(setRightProfileNick(nick));
  ProfilesSettings.setRightProfileNick(nick);
}

export const thunkSetRightProfileSkinUrl = (url: string): ProfilesThunkActionTypes => (dispatch) => {
  dispatch(setRightProfileSkinUrl(url));
  ProfilesSettings.setRightProfileSkinUrl(url);
}

export const thunkSetRightProfileSelectedIndex = (i: number): ProfilesThunkActionTypes => (dispatch, getState) => {
  dispatch(setRightProfileSelectedIndex(i));

  const currentProfile = getState().profiles.rightProfiles[i];
  ProfilesSettings.setRightProfile(currentProfile.nick, currentProfile.skinUrl);
}

export const thunkSetTag = (tag: string): ProfilesThunkActionTypes => (dispatch) => {
  dispatch(setTag(tag));
  ProfilesSettings.setTag(tag);
}