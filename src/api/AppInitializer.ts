
import KeyboardGameplay from 'api/Keyboard/Gameplay/KeyboardGameplay';
import Storage from 'api/Storage/Storage';
import Keyboard from 'api/Keyboard/Keyboard';
import { thunkSetMenuShown } from 'redux/UI/thunks';
import { TStore } from 'redux/store';
import { initFrontCommunicationService } from './FrontCommunicationService/FrontCommunicationService';
import StoreLink from './StoreLink';

export default (store: TStore): void => {
  // init keyboard
  initKeyboardIntercation(store);

  // init CLIENT -> FRONT communication
  initFrontCommunicationService(store);

  // save store to localStorage on every update
  store.subscribe(() => Storage.save(store.getState()));

  // set global store link
  StoreLink.set(store);
}

const initKeyboardIntercation = (store: TStore) => {
  const kb = store.getState().settings.hotkeys.keyboard;

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
    store.dispatch(thunkSetMenuShown(!store.getState().UI.menuShown));
  });
}