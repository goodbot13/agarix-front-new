import Storage from "api/storage/Storage";
import { 
  IThemingMapState, 
  ThemingMapActionTypes,
  SET_MAP_BACKGROUND_IMAGE, 
  SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH, 
  SET_MAP_BACKGROUND_IMAGE_URL, 
  SET_MAP_BACKGROUND_TINT, 
  SET_MAP_BORDER_COLOR, 
  SET_MAP_BORDER_GLOW, 
  SET_MAP_BORDER_GLOW_COLOR, 
  SET_MAP_BORDER_GLOW_DISTANCE, 
  SET_MAP_BORDER_GLOW_STRENGTH, 
  SET_MAP_BORDER_ROUNDNESS, 
  SET_MAP_BORDER_TYPE, 
  SET_MAP_BORDER_WIDTH, 
  SET_MAP_GLOBAL_BACKGROUND_IMAGE, 
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH, 
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT, 
  SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL, 
} from "./types";

const initState: IThemingMapState = Storage.get().settings.theming.map;

export const themingMapReducer = (state = initState, action: ThemingMapActionTypes): IThemingMapState => {
  switch (action.type) {
    case SET_MAP_BORDER_TYPE:
      return {
        ...state,
        borderType: action.borderType
      }

    case SET_MAP_BORDER_ROUNDNESS:
      return {
        ...state,
        borderRoundness: action.borderRoundness
      }

    case SET_MAP_BORDER_WIDTH:
      return {
        ...state,
        borderWidth: action.borderWidth
      }

    case SET_MAP_BORDER_COLOR:
      return {
        ...state,
        borderColor: action.borderColor
      }

    case SET_MAP_BORDER_GLOW:
      return {
        ...state,
        borderGlow: action.borderGlow
      }

    case SET_MAP_BORDER_GLOW_COLOR:
      return {
        ...state,
        borderGlowColor: action.borderGlowColor
      }

    case SET_MAP_BORDER_GLOW_DISTANCE:
      return {
        ...state,
        borderGlowDistance: action.borderGlowDistance
      }

    case SET_MAP_BORDER_GLOW_STRENGTH:
      return {
        ...state,
        borderGlowStrength: action.borderGlowStrength
      }

    case SET_MAP_BACKGROUND_TINT:
      return {
        ...state,
        backgroundTint: action.backgroundTint
      }

    case SET_MAP_BACKGROUND_IMAGE: 
      return {
        ...state,
        backgroundImage: action.backgroundImage
      }

    case SET_MAP_BACKGROUND_IMAGE_URL:
      return {
        ...state,
        backgroundImageUrl: action.backgroundImageUrl
      }

    case SET_MAP_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH:
      return {
        ...state,
        backgroundImageLiveEffectStrength: action.backgroundImageLiveEffectStrength
      }

    case SET_MAP_GLOBAL_BACKGROUND_IMAGE:
      return {
        ...state,
        globalBackgroundImage: action.globalBackgroundImage
      }

    case SET_MAP_GLOBAL_BACKGROUND_IMAGE_URL:
      return {
        ...state,
        globalBackgroundImageUrl: action.globalBackgroundImageUrl
      }

    case SET_MAP_GLOBAL_BACKGROUND_IMAGE_TINT:
      return {
        ...state,
        globalBackgroundImageTint: action.globalBackgroundImageTint
      }

    case SET_MAP_GLOBAL_BACKGROUND_IMAGE_LIVE_EFFECT_STRENGTH:
      return {
        ...state,
        globalBackgroundImageLiveEffectStrength: action.globalBackgroundImageLiveEffectStrength
      }

    default: return state;
  }
}