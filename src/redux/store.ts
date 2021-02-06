import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { gameReducer } from './game/reducer';
import { profilesReducer } from './profiles/reducer';
import { UIReducer } from './UI/reducer';

import { GameActionTypes } from './game/types';
import { ProfilesActionTypes } from './profiles/types';
import { UIActionTypes } from './UI/types';
import { SettingsActionTypes } from './settings/types';

import { gamePerformanceReducer } from './settings/game/performance/reducer';
import { gameCellsReducer } from './settings/game/cells/reducer';
import { gameGameplayReducer } from './settings/game/gameplay/reducer';
import { gameMultiboxReducer } from './settings/game/multibox/reducer';
import { gameMinimapReducer } from './settings/game/minimap/reducer';
import { gameEffectsReducer } from './settings/game/effects/reducer';

import { themingCellsReducer } from './settings/theming/cells/reducer';
import { themingFoodReducer } from './settings/theming/food/reducer';
import { themingMapReducer } from './settings/theming/map/reducer';
import { themingMinimapReducer } from './settings/theming/minimap/reducer';
import { themingMultiboxReducer } from './settings/theming/multibox/reducer';
import { themingVirusReducer } from './settings/theming/viruses/reducer';

const rootReducer = combineReducers({
  UI: UIReducer,
  profiles: profilesReducer,
  game: gameReducer,
  settings: combineReducers({
    game: combineReducers({
      performance: gamePerformanceReducer,
      cells: gameCellsReducer,
      gameplay: gameGameplayReducer,
      multibox: gameMultiboxReducer,
      minimap: gameMinimapReducer,
      effects: gameEffectsReducer
    }),
    theming: combineReducers({
      cells: themingCellsReducer,
      food: themingFoodReducer,
      map: themingMapReducer,
      minimap: themingMinimapReducer,
      multibox: themingMultiboxReducer,
      viruses: themingVirusReducer
    })
  })
});

export default createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;

type RootActionsType = UIActionTypes | ProfilesActionTypes | GameActionTypes | SettingsActionTypes;
export type ThunkRootDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;