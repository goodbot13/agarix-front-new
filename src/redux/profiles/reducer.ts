import Storage from "api/Storage/Storage";
import { 
  IProfilesState, 
  ProfilesActionTypes, 
  SET_LEFT_PROFILE_NICK, 
  SET_LEFT_PROFILE_SELECTED_INDEX, 
  SET_LEFT_PROFILE_SKIN_URL, 
  SET_RIGHT_PROFILE_NICK, 
  SET_RIGHT_PROFILE_SELECTED_INDEX, 
  SET_RIGHT_PROFILE_SKIN_URL, 
  SET_TAG 
} from "./types";

const initState: IProfilesState = Storage.get().profiles;

// todo: FIX STATE MUTATION

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
      return { 
        ...state,
        rightProfiles: [...state.rightProfiles].map((profile, i) => {
          if (i === state.leftSelectedIndex) {
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
          if (i === state.leftSelectedIndex) {
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

    default: return state;
  }
}