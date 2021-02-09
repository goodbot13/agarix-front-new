import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_LEFT_PROFILE_NICK = 'SET_LEFT_PROFILE_NICK';
export const SET_LEFT_PROFILE_SKIN_URL = 'SET_LEFT_PROFILE_SKIN_URL';
export const SET_LEFT_PROFILE_SELECTED_INDEX = 'SET_LEFT_PROFILE_SELECTED_INDEX';
export const SET_RIGHT_PROFILE_NICK = 'SET_RIGHT_PROFILE_NICK';
export const SET_RIGHT_PROFILE_SKIN_URL = 'SET_RIGHT_PROFILE_SKIN_URL';
export const SET_RIGHT_PROFILE_SELECTED_INDEX = 'SET_RIGHT_PROFILE_SELECTED_INDEX';
export const SET_TAG = 'SET_TAG';

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

export type ProfilesActionTypes = SetLeftProfileNickAction | SetLeftProfileSkinUrlAction | SetLeftProfileSelectedIndexAction |
                                   SetRightProfileSkinUrlAction | SetRightProfileNickAction | SetRightProfileSelectedIndexAction |
                                   SetTagAction;

export type ProfilesThunkActionTypes = ThunkAction<void, AppStateType, unknown, ProfilesActionTypes>;