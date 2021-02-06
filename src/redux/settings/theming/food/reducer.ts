import { 
  IThemingFoodState, 
  SET_FOOD_COLOR, 
  SET_FOOD_CRISP, 
  SET_FOOD_GLOW, 
  SET_FOOD_GLOW_COLOR, 
  SET_FOOD_GLOW_DISTANCE, 
  SET_FOOD_GLOW_STRENGTH, 
  SET_FOOD_SIZE, 
  ThemingFoodActionTypes 
} from "./types";

const initState: IThemingFoodState = {
  size: 16,
  color: { red: 255, green: 255, blue: 255 },
  glow: true,
  glowColor: { red: 0, green: 200, blue: 128 },
  glowDistance: 90,
  glowStrength: 9,
  crisp: true
}

export const themingFoodReducer = (state = initState, action: ThemingFoodActionTypes): IThemingFoodState => {
  switch (action.type) {
    case SET_FOOD_SIZE:
      return {
        ...state,
        size: action.size
      }

    case SET_FOOD_COLOR:
      return {
        ...state,
        color: action.color
      }

    case SET_FOOD_GLOW:
      return {
        ...state,
        glow: action.glow
      }

    case SET_FOOD_GLOW_COLOR:
      return {
        ...state,
        glowColor: action.glowColor
      }

    case SET_FOOD_GLOW_DISTANCE:
      return {
        ...state,
        glowDistance: action.glowDistance
      }

    case SET_FOOD_GLOW_STRENGTH:
      return {
        ...state,
        glowStrength: action.glowStrength
      }

    case SET_FOOD_CRISP:
      return {
        ...state,
        crisp: action.crisp
      }

    default: return state;
  }
} 