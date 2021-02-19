import Storage from "api/Storage/Storage";
import { 
  IThemingVirusesState, 
  SET_FILL_CIRCLE_COLOR, 
  SET_VIRUS_BORDER_COLOR, 
  SET_VIRUS_BORDER_WIDTH, 
  SET_VIRUS_COLOR, 
  SET_VIRUS_GLOW, 
  SET_VIRUS_GLOW_COLOR, 
  SET_VIRUS_GLOW_DISTANCE, 
  SET_VIRUS_GLOW_STRENGTH, 
  SET_VIRUS_MASS_TYPE, 
  SET_VIRUS_TRANSPARENCY, 
  ThemingVirusesActionTypes 
} from "./types";

const initState: IThemingVirusesState = Storage.get().settings.theming.viruses;

export const themingVirusReducer = (state = initState, action: ThemingVirusesActionTypes): IThemingVirusesState => {
  switch (action.type) {
    case SET_VIRUS_COLOR:
      return {
        ...state,
        color: action.color
      }

    case SET_VIRUS_BORDER_WIDTH:
      return {
        ...state,
        borderWidth: action.borderWidth
      }

    case SET_VIRUS_BORDER_COLOR:
      return {
        ...state,
        borderColor: action.borderColor
      }

    case SET_VIRUS_GLOW:
      return {
        ...state,
        glow: action.glow
      }

    case SET_VIRUS_GLOW_COLOR:
      return {
        ...state,
        glowColor: action.glowColor
      }

    case SET_VIRUS_GLOW_DISTANCE:
      return {
        ...state, 
        glowDistance: action.glowDistance
      }

    case SET_VIRUS_GLOW_STRENGTH:
      return {
        ...state,
        glowStrength: action.glowStrength
      }

    case SET_VIRUS_TRANSPARENCY:
      return {
        ...state,
        transparency: action.transparency
      }

    case SET_VIRUS_MASS_TYPE:
      return {
        ...state,
        massType: action.massType
      }

    case SET_FILL_CIRCLE_COLOR:
      return {
        ...state,
        fillCircleColor: action.fillCircleColor
      }

    default: return state;
  }
}