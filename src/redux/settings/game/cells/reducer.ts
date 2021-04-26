import Storage from "api/storage/Storage";
import { 
  GameCellsActionTypes, 
  IGameCellsState, 
  SET_AUTO_HIDE_MASS_AND_NICKS, 
  SET_FADE_SPEED, 
  SET_MASS_UPDATE_DELAY, 
  SET_ONE_COLORED, 
  SET_RINGS_SPINNING, 
  SET_RINGS_TYPE, 
  SET_SHADOW, 
  SET_SHORT_MASS, 
  SET_SHOW_MASS, 
  SET_SHOW_MASS_MY_CELL, 
  SET_SHOW_NICKS, 
  SET_SHOW_NICK_MY_CELL, 
  SET_SKINS_TYPE, 
  SET_SOAK_SPEED 
} from "./types";

const initState: IGameCellsState = Storage.get().settings.game.cells;

export const gameCellsReducer = (state = initState, action: GameCellsActionTypes): IGameCellsState => {
  switch (action.type) {
    case SET_SHOW_MASS:
      return {
        ...state,
        mass: action.mass
      }

    case SET_SHOW_NICKS:
      return {
        ...state,
        nicks: action.nicks
      }

    case SET_SHOW_MASS_MY_CELL:
      return {
        ...state,
        myMass: action.myMass
      }

    case SET_SHOW_NICK_MY_CELL:
      return {
        ...state,
        myNick: action.myNick
      }

    case SET_AUTO_HIDE_MASS_AND_NICKS:
      return {
        ...state,
        autoHideMassAndNicks: action.autoHideMassAndNicks
      }

    case SET_SHORT_MASS:
      return {
        ...state,
        shortMass: action.shortMass
      }

    case SET_MASS_UPDATE_DELAY:
      return {
        ...state,
        massUpdateDelay: action.massUpdateDelay
      }

    case SET_SKINS_TYPE:
      return {
        ...state,
        skinsType: action.skinsType
      }

    case SET_RINGS_TYPE:
      return {
        ...state,
        ringsType: action.ringsType
      }

    case SET_RINGS_SPINNING:
      return {
        ...state,
        ringsSpinning: action.ringsSpinning
      }

    case SET_SOAK_SPEED:
      return {
        ...state,
        soakSpeed: action.soakSpeed
      }

    case SET_FADE_SPEED:
      return {
        ...state,
        fadeSpeed: action.fadeSpeed
      }

    case SET_ONE_COLORED:
      return {
        ...state,
        oneColored: action.oneColored
      }

    case SET_SHADOW: 
      return {
        ...state,
        shadow: action.shadow
      }

    default: return state;
  }
}