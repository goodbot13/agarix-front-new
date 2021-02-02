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

const initState: IProfilesState = {
  leftProfiles: [
    { nick: 'Profile #1', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #2', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #3', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #4', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #5', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #6', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #7', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #8', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #9', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #10', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' }
  ],
  rightProfiles: [
    { nick: 'Profile #11', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #12', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #13', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #14', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #15', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #16', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #17', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #18', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #19', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' },
    { nick: 'Profile #20', skinUrl: 'https://i.imgur.com/YE4BNGV.jpg', tag: '' }
  ],
  leftSelectedIndex: 0,
  rightSelectedIndex: 0,
}

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