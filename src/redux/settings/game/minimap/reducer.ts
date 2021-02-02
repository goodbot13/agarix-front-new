import { 
  GameMinimapActionTypes, 
  IGameMinimapState, 
  SET_GHOST_CELLS, 
  SET_MASS, 
  SET_MINIMAP_ENABLED, 
  SET_NICKS, 
  SET_PLAYER_VIEWPORT, 
  SET_REAL_PLAYERS_CELLS, 
  SET_TOP_ONE_VIEWPORT 
} from "./types";

const initState: IGameMinimapState = {
  enabled: true,
  playerViewport: false,
  topOneViewport: true,
  ghostCells: true,
  realPlayersCells: false,
  mass: false,
  nicks: true
}

export const gameMinimapReducer = (state = initState, action: GameMinimapActionTypes): IGameMinimapState => {
  switch (action.type) {
    case SET_MINIMAP_ENABLED:
      return {
        ...state,
        enabled: action.enabled
      }

    case SET_PLAYER_VIEWPORT:
      return {
        ...state,
        playerViewport: action.playerViewport
      }

    case SET_TOP_ONE_VIEWPORT:
      return {
        ...state,
        topOneViewport: action.topOneViewport
      }

    case SET_GHOST_CELLS:
      return {
        ...state,
        ghostCells: action.ghostCells
      }

    case SET_REAL_PLAYERS_CELLS:
      return {
        ...state,
        realPlayersCells: action.realPlayersCells
      }

    case SET_MASS:
      return {
        ...state,
        mass: action.mass
      }

    case SET_NICKS:
      return {
        ...state,
        nicks: action.nicks
      }

    default: return state;
  }
}