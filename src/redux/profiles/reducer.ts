import Storage from "api/storage/Storage";
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

export const profilesReducer = (state = initState, action: ProfilesActionTypes): IProfilesState => {
  switch (action.type) {

    case SET_LEFT_PROFILE_NICK:
      state.leftProfiles[state.leftSelectedIndex].nick = action.nick;

      return { 
        ...state,
        leftProfiles: [...state.leftProfiles]
      }

    case SET_LEFT_PROFILE_SKIN_URL:
      state.leftProfiles[state.leftSelectedIndex].skinUrl = action.skinUrl;

      return { 
        ...state,
        leftProfiles: [...state.leftProfiles]
      }

    case SET_LEFT_PROFILE_SELECTED_INDEX:
      return {
        ...state,
        leftSelectedIndex: action.leftSelectedIndex
      }

    case SET_RIGHT_PROFILE_NICK:
      state.rightProfiles[state.rightSelectedIndex].nick = action.nick;

      return { 
        ...state,
        rightProfiles: [...state.rightProfiles]
      }

    case SET_RIGHT_PROFILE_SKIN_URL:
      state.rightProfiles[state.rightSelectedIndex].skinUrl = action.skinUrl;

      return { 
        ...state,
        rightProfiles: [...state.rightProfiles]
      }

    case SET_RIGHT_PROFILE_SELECTED_INDEX:
      return {
        ...state,
        rightSelectedIndex: action.rightSelectedIndex
      }

    case SET_TAG:
      state.leftProfiles[state.leftSelectedIndex].tag = action.tag;

      return { 
        ...state,
        leftProfiles: [...state.leftProfiles]
      }

    default: return state;
  }
}