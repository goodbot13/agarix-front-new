import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

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
import { gameBotsReducer } from './settings/game/bots/reducer';

import { themingCellsReducer } from './settings/theming/cells/reducer';
import { themingFoodReducer } from './settings/theming/food/reducer';
import { themingMapReducer } from './settings/theming/map/reducer';
import { themingMinimapReducer } from './settings/theming/minimap/reducer';
import { themingMultiboxReducer } from './settings/theming/multibox/reducer';
import { themingVirusReducer } from './settings/theming/viruses/reducer';

import { hotkeysKeyboardReducer } from './settings/hotkeys/keyboard/reducer';

import { configureStore } from '@reduxjs/toolkit';
import { settingsLeaderboardReducer } from './settings/UI/leaderboard/reducer';
import { settingsStatsReducer } from './settings/UI/stats/reducer';
import { settingsTopTeamReducer } from './settings/UI/top-team/reducer';
import { settingsSpectateReducer } from './settings/UI/spectate/reducer';
import { settingsChatReducer } from './settings/UI/chat/reducer';

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
      effects: gameEffectsReducer,
      bots: gameBotsReducer,
    }),
    theming: combineReducers({
      cells: themingCellsReducer,
      food: themingFoodReducer,
      map: themingMapReducer,
      minimap: themingMinimapReducer,
      multibox: themingMultiboxReducer,
      viruses: themingVirusReducer,
    }),
    hotkeys: combineReducers({
      keyboard: hotkeysKeyboardReducer,
    }),
    UI: combineReducers({
      leaderboard: settingsLeaderboardReducer,
      stats: settingsStatsReducer,
      topTeam: settingsTopTeamReducer,
      spectate: settingsSpectateReducer,
      chat: settingsChatReducer,
    }),
  }),
});

const configuredStore = configureStore({
  reducer: rootReducer,
});

export default configuredStore;

export type TStore = typeof configuredStore;
export type AppStateType = ReturnType<typeof rootReducer>;
export type RootActionsType =
  | UIActionTypes
  | ProfilesActionTypes
  | GameActionTypes
  | SettingsActionTypes;
export type ThunkRootDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;
