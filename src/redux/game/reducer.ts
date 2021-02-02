import { 
  IGameState,
  GameActionTypes, 
  CHANGE_GAME_TAG, 
  CHANGE_GAME_MODE, 
  CHANGE_GAME_SERVER, 
  UPDATE_GAME_SERVERS_LIST, 
  CHANGE_GAME_TOKEN 
} from "./types";

const initState: IGameState = {
  servers: [
    { location: 'China', playersAmount: 0 },
    { location: 'East Asia', playersAmount: 0 },
    { location: 'Europe', playersAmount: 4891 },
    { location: 'North America', playersAmount: 0 },
    { location: 'Oceania', playersAmount: 0 },
    { location: 'Russia', playersAmount: 0 },
    { location: 'South America', playersAmount: 9724 },
    { location: 'Turkey', playersAmount: 0 }
  ],
  currentServerIndex: 2,
  mode: 'Party',
  tag: '',
  token: ''
}

export const gameReducer = (state = initState, action: GameActionTypes): IGameState => {
  switch (action.type) {

    case UPDATE_GAME_SERVERS_LIST:
      return {
        ...state,
        servers: [...action.servers]
      }
      
    case CHANGE_GAME_SERVER:
      return {
        ...state,
        currentServerIndex: action.currentServerIndex
      }

    case CHANGE_GAME_MODE:
      return {
        ...state,
        mode: action.mode
      }

    case CHANGE_GAME_TAG:
      return {
        ...state,
        tag: action.tag
      }

    case CHANGE_GAME_TOKEN:
      return {
        ...state,
        token: action.token
      }

    default: return state;
  }
}