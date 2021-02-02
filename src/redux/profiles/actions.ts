import { 
  ProfilesActionTypes,
  SET_LEFT_PROFILE_NICK,
  SET_LEFT_PROFILE_SELECTED_INDEX,
  SET_LEFT_PROFILE_SKIN_URL,
  SET_RIGHT_PROFILE_NICK,
  SET_RIGHT_PROFILE_SELECTED_INDEX,
  SET_RIGHT_PROFILE_SKIN_URL,
  SET_TAG
 } from "./types";

export const setLeftProfileNick = (nick: string): ProfilesActionTypes => ({ 
  type: SET_LEFT_PROFILE_NICK, 
  nick 
});

export const setLeftProfileSkinUrl = (skinUrl: string): ProfilesActionTypes => ({ 
  type: SET_LEFT_PROFILE_SKIN_URL, 
  skinUrl 
});

export const setLeftProfileSelectedIndex = (leftSelectedIndex: number): ProfilesActionTypes => ({
  type: SET_LEFT_PROFILE_SELECTED_INDEX,
  leftSelectedIndex
})

export const setRightProfileNick = (nick: string): ProfilesActionTypes => ({ 
  type: SET_RIGHT_PROFILE_NICK, 
  nick 
});

export const setRightProfileSkinUrl = (skinUrl: string): ProfilesActionTypes => ({ 
  type: SET_RIGHT_PROFILE_SKIN_URL, 
  skinUrl 
});

export const setRightProfileSelectedIndex = (rightSelectedIndex: number): ProfilesActionTypes => ({
  type: SET_RIGHT_PROFILE_SELECTED_INDEX,
  rightSelectedIndex
});

export const setTag = (tag: string): ProfilesActionTypes => ({ 
  type: SET_TAG, 
  tag 
});