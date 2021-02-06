import { 
  IThemingVirusesState, 
  SET_FILL_CIRCLE_COLOR, 
  SET_FILL_CIRCLE_TRANSPARENCY, 
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

const initState: IThemingVirusesState = {
  color: { red: 0, green: 0, blue: 0 },
  borderWidth: 8,
  borderColor: { red: 0, green: 0, blue: 0 },
  glow: true,
  glowColor: { red: 0, green: 0, blue: 0 },
  glowDistance: 120,
  glowStrength: 8,
  transparency: 1,
  massType: 'Fill circle',
  fillCircleColor: { red: 0, green: 0, blue: 0 },
  fillCircleTransparency: 0.9
}

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

    case SET_FILL_CIRCLE_TRANSPARENCY: 
      return {
        ...state,
        fillCircleTransparency: action.fillCircleTransparency
      }

    default: return state;
  }
}