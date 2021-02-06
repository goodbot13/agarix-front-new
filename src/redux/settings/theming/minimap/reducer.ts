import { 
  IThemingMinimapState, 
  SET_MINIMAP_BACKGROUND_COLOR, 
  SET_MINIMAP_GHOST_CELLS_COLOR, 
  SET_MINIMAP_MY_VIEWPORT_COLOR, 
  SET_MINIMAP_PLAYER_COLOR, 
  SET_MINIMAP_PLAYER_SIZE, 
  SET_MINIMAP_SIZE, 
  SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR, 
  ThemingMinimapActionTypes 
} from "./types";

const initState: IThemingMinimapState = {
  backgroundColor: { red: 0, green: 0, blue: 0 },
  size: 250,
  myViewportColor: { red: 0, green: 0, blue: 0 },
  topOneViewportColor: { red: 0, green: 0, blue: 0 },
  playerSize: 10,
  playerColor: { red: 0, green: 0, blue: 0 },
  ghostCellsColor: { red: 0, green: 0, blue: 0 }
}

export const themingMinimapReducer = (state = initState, action: ThemingMinimapActionTypes): IThemingMinimapState => {
  switch (action.type) {
    case SET_MINIMAP_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      }

    case SET_MINIMAP_SIZE:
      return {
        ...state,
        size: action.size
      }

    case SET_MINIMAP_MY_VIEWPORT_COLOR:
      return {
        ...state,
        myViewportColor: action.myViewportColor
      }

    case SET_MINIMAP_TOP_ONE_VIEWPORT_COLOR:
      return {
        ...state,
        topOneViewportColor: action.topOneViewportColor
      }

    case SET_MINIMAP_PLAYER_SIZE:
      return {
        ...state,
        playerSize: action.playerSize
      }

    case SET_MINIMAP_PLAYER_COLOR:
      return {
        ...state,
        playerColor: action.playerColor
      }

    case SET_MINIMAP_GHOST_CELLS_COLOR:
      return {
        ...state,
        ghostCellsColor: action.ghostCellsColor
      }

    default: return state;
  }
}