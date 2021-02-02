import { GameEffectsActionTypes, IGameEffectsState, SET_CELL_REMOVE_ANIMATION, SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR, SET_SPAWN_ANIMATION, SET_WTF_RGB_MODE } from "./types";

const initState: IGameEffectsState = {
  cellRemoveAnimation: 'Default',
  cellRemoveAnimationForHiddenSpectator: false,
  spawnAnimation: 'Acimazis',
  wtfRgbMode: false
}

export const gameEffectsReducer = (state = initState, action: GameEffectsActionTypes): IGameEffectsState => {
  switch (action.type) {
    case SET_CELL_REMOVE_ANIMATION:
      return {
        ...state,
        cellRemoveAnimation: action.cellRemoveAnimation
      }

    case SET_CELL_REMOVE_ANIMATION_FOR_HIDDEN_SPECTATOR:
      return {
        ...state,
        cellRemoveAnimationForHiddenSpectator: action.cellRemoveAnimationForHiddenSpectator
      }

    case SET_SPAWN_ANIMATION:
      return {
        ...state,
        spawnAnimation: action.spawnAnimation
      }

    case SET_WTF_RGB_MODE:
      return {
        ...state,
        wtfRgbMode: action.wtfRgbMode
      }

    default: return state;
  }
}