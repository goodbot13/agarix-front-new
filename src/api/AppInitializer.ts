
import KeyboardGameplay from 'api/Keyboard/Gameplay/KeyboardGameplay';
import Storage from 'api/storage/Storage';
import Keyboard from 'api/Keyboard/Keyboard';
import { thunkSetMenuShown, thunkSetSettingsShown } from 'redux/UI/thunks';
import { TStore } from 'redux/store';

const initializeApp = (store: TStore): void => {
  const state = store.getState();

  // init keyboard 
  const kb = state.settings.hotkeys.keyboard;

  KeyboardGameplay.init({
    feedKey: kb.feed,
    macroFeedKey: kb.macroFeed,
    splitKey: kb.split,
    doubleSplitKey: kb.doubleSplit,
    tripleSplitKey: kb.tripleSplit,
    splitSixteenKey: kb.splitSixteen,
    quickRespawnKey: kb.quickRespawn,
    pauseCellKey: kb.pauseCell,
    toggleCellHelpersKey: kb.toggleCellHelpers,
    toggleCellRingsKey: kb.toggleCellRings,
    toggleCellSkinsKey: kb.toggleCellSkins,
    switchTabsKey: kb.switchTabs,
    toggleFoodRenderKey: kb.toggleFoodRender,
    toggleSpectatorModeKey: kb.toggleSpectatorMode,
    toggleHudsKey: kb.toggleHuds
  });

  // init menu intraction using keyboard
  Keyboard.bindFunctionToKey('press', 'Escape', () => {
    const { settingsShown, menuShown } = store.getState().UI;

    if (menuShown) {
      if (settingsShown) {
        store.dispatch(thunkSetSettingsShown(false));
      } else {
        store.dispatch(thunkSetMenuShown(false))
      }
    } else {
      store.dispatch(thunkSetMenuShown(true))
    }
  });

  // save store to localStorage on every update
  store.subscribe(() => Storage.save(store.getState()));
}

export default initializeApp;