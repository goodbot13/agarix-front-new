import Storage from "api/storage/Storage";

import { 
  IProfilesState, 
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
  SET_TAG 
} from "./types";

const initState: IProfilesState = Storage.get().profiles;

export const profilesReducer = (state = initState, action: ProfilesActionTypes): IProfilesState => {
  switch (action.type) {

    case SET_LEFT_PROFILE_NICK:
      return { 
        ...state,
        leftProfiles: [...state.leftProfiles].map((profile, i) => {
          if (i === state.leftSelectedIndex) {
            return {
              ...profile,
              nick: action.nick
            }
          }
    
          return profile;
        })
      }

    case SET_LEFT_PROFILE_SKIN_URL:
      return { 
        ...state,
        leftProfiles: [...state.leftProfiles].map((profile, i) => {
          if (i === state.leftSelectedIndex) {
            return {
              ...profile,
              skinUrl: action.skinUrl
            }
          }
    
          return profile;
        })
      }

    case SET_LEFT_PROFILE_SELECTED_INDEX:
      return {
        ...state,
        leftSelectedIndex: action.leftSelectedIndex
      }

    case SET_RIGHT_PROFILE_NICK:
      console.log(action.nick);
      return { 
        ...state,
        rightProfiles: [...state.rightProfiles].map((profile, i) => {
          if (i === state.rightSelectedIndex) {
            return {
              ...profile,
              nick: action.nick
            }
          }
    
          return profile;
        })
      }

    case SET_RIGHT_PROFILE_SKIN_URL:
      return { 
        ...state,
        rightProfiles: [...state.rightProfiles].map((profile, i) => {
          if (i === state.rightSelectedIndex) {
            return {
              ...profile,
              skinUrl: action.skinUrl
            }
          }
    
          return profile;
        })
      }

    case SET_RIGHT_PROFILE_SELECTED_INDEX:
      return {
        ...state,
        rightSelectedIndex: action.rightSelectedIndex
      }

    case SET_TAG:
      return { 
        ...state,
        leftProfiles: [...state.leftProfiles].map((profile, i) => {
          if (i === state.leftSelectedIndex) {
            return {
              ...profile,
              tag: action.tag
            }
          }
    
          return profile;
        })
      }

    case SET_LEFT_PROFILE_LOGIN_TYPE:
      return {
        ...state,
        leftProfileLoginType: action.loginType
      }

    case SET_RIGHT_PROFILE_LOGIN_TYPE:
      return {
        ...state,
        rightProfileLoginType: action.loginType
      }

    case SET_FACEBOOK_LOGGED_IN:
      return {
        ...state,
        facebookLoggedIn: action.facebookLoggedIn
      }

    case SET_GOOGLE_LOGGED_IN:
      return {
        ...state,
        googleLoggedIn: action.googleLoggedIn
      }

    default: return state;
  }
}