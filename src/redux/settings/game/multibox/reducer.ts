import { 
  IGameMultiboxState, 
  GameMultiboxActionTypes, 
  MULTIBOX_ENABLED, 
  MULTIBOX_CHANGE_RING_COLOR, 
  MULTIBOX_CHANGE_CELL_COLOR, 
  MULTIBOX_HIDE_OWN_SKINS, 
  MULTIBOX_STATIC_COLOR, 
  MULTIBOX_RING
} from "./types";

const initState: IGameMultiboxState = {
  enabled: false,
  ring: true,
  changeRingColor: true,
  changeCellColor: false,
  hideOwnSkins: true,
  staticColor: true
}

export const gameMultiboxReducer = (state = initState, action: GameMultiboxActionTypes): IGameMultiboxState => {
  switch (action.type) {
    case MULTIBOX_ENABLED: 
      return {
        ...state,
        enabled: action.enabled
      }

    case MULTIBOX_RING:
      return {
        ...state,
        ring: action.ring
      }

    case MULTIBOX_CHANGE_RING_COLOR:
      return {
        ...state,
        changeRingColor: action.changeRingColor
      }

    case MULTIBOX_CHANGE_CELL_COLOR:
      return {
        ...state,
        changeCellColor: action.changeCellColor
      }

    case MULTIBOX_HIDE_OWN_SKINS:
      return {
        ...state,
        hideOwnSkins: action.hideOwnSkins
      }

    case MULTIBOX_STATIC_COLOR:
      return {
        ...state,
        staticColor: action.staticColor
      }

    default: return state;
  }
}