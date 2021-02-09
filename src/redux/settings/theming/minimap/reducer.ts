import Storage from "api/storage/Storage";
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

const initState: IThemingMinimapState = Storage.get().settings.theming.minimap;

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