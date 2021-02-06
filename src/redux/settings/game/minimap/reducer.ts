import { 
  GameMinimapActionTypes, 
  IGameMinimapState, 
  SET_DRAW_PLAYER_POSITION, 
  SET_GHOST_CELLS, 
  SET_MASS, 
  SET_MINIMAP_ENABLED, 
  SET_NICKS, 
  SET_REAL_PLAYERS_CELLS,
  SET_VIEWPORT, 
} from "./types";

const initState: IGameMinimapState = {
  enabled: true,
  viewport: 'Disabled',
  ghostCells: true,
  realPlayersCells: false,
  mass: false,
  nicks: true,
  playerPosition: true
}

export const gameMinimapReducer = (state = initState, action: GameMinimapActionTypes): IGameMinimapState => {
  switch (action.type) {
    case SET_MINIMAP_ENABLED:
      return {
        ...state,
        enabled: action.enabled
      }

    case SET_VIEWPORT:
      return {
        ...state,
        viewport: action.viewport
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

    case SET_DRAW_PLAYER_POSITION:
      return {
        ...state,
        playerPosition: action.playerPosition
      }

    default: return state;
  }
}