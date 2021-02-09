import { 
  doubleSplit, 
  feed, 
  macroFeed, 
  pauseCell, 
  quickRespawn, 
  split, 
  splitSixteen, 
  stopMacroFeed, 
  switchTabs, 
  toggleCellHelpers, 
  toggleCellRings, 
  toggleCellSkins, 
  toggleFoodRender, 
  toggleHuds, 
  toggleSpectatorMode, 
  tripleSplit 
} from "./GameEvents";

import Keyboard, { TKeyBindEvent } from "../Keyboard";

class KeyboardGameEvens {
  private prevBindedKeys: GameEventsObjectType = {
    feedKey: '-not-set-',
    macroFeedKey: '-not-set-',
    splitKey: '-not-set-',
    doubleSplitKey: '-not-set-',
    tripleSplitKey: '-not-set-',
    splitSixteenKey: '-not-set-',
    quickRespawnKey: '-not-set-',
    pauseCellKey: '-not-set-',
    toggleCellHelpersKey: '-not-set-',
    toggleCellRingsKey: '-not-set-',
    toggleCellSkinsKey: '-not-set-',
    switchTabsKey: '-not-set-',
    toggleFoodRenderKey: '-not-set-',
    toggleSpectatorModeKey: '-not-set-',
    toggleHudsKey: '-not-set-'
  };

  private rebind(prevKey: string, key: string, event: TKeyBindEvent, func: () => void) {
    Keyboard.removeBinded(event, prevKey);
    Keyboard.bindFunctionToKey(event, key, func);
  }

  public init(keys: GameEventsObjectType) {
    this.bindFeed(keys.feedKey);
    this.bindMacroFeed(keys.macroFeedKey);
    this.bindSplit(keys.splitKey);
    this.bindDoubleSplit(keys.doubleSplitKey);
    this.bindTripleSplit(keys.tripleSplitKey);
    this.bindSplitSixteen(keys.splitSixteenKey);
    this.bindQuickRespawn(keys.quickRespawnKey);
    this.bindPauseCell(keys.pauseCellKey);
    this.bindToggleCellHelpersKey(keys.toggleCellHelpersKey);
    this.bindToggleCellRingsKey(keys.toggleCellRingsKey);
    this.bindToggleCellSkinsKey(keys.toggleCellSkinsKey);
    this.bindSwitchTabsKey(keys.switchTabsKey);
    this.bindToggleFoodRenderKey(keys.toggleFoodRenderKey);
    this.bindToggleSpectatorModeKey(keys.toggleSpectatorModeKey);
    this.bindToggleHuds(keys.toggleHudsKey);
  }

  public bindFeed(key: string) {
    if (this.prevBindedKeys.feedKey !== key) {
      this.rebind(this.prevBindedKeys.feedKey, key, 'down', feed);
      this.prevBindedKeys.feedKey = key;
    }
  }

  public bindMacroFeed(key: string) {
    if (this.prevBindedKeys.macroFeedKey !== key) {
      this.rebind(this.prevBindedKeys.macroFeedKey, key, 'down', macroFeed);
      this.rebind(this.prevBindedKeys.macroFeedKey, key, 'up', stopMacroFeed);
      this.prevBindedKeys.macroFeedKey = key;
    }
  }

  public bindSplit(key: string) {
    if (this.prevBindedKeys.splitKey !== key) {
      this.rebind(this.prevBindedKeys.splitKey, key, 'down', split);
      this.prevBindedKeys.splitKey = key;
    }
  }

  public bindDoubleSplit(key: string) {
    if (this.prevBindedKeys.doubleSplitKey !== key) {
      this.rebind(this.prevBindedKeys.doubleSplitKey, key, 'down', doubleSplit);
      this.prevBindedKeys.doubleSplitKey = key;
    }
  }

  public bindTripleSplit(key: string) {
    if (this.prevBindedKeys.tripleSplitKey !== key) {
      this.rebind(this.prevBindedKeys.tripleSplitKey, key, 'down', tripleSplit);
      this.prevBindedKeys.tripleSplitKey = key;
    }
  }

  public bindSplitSixteen(key: string) {
    if (this.prevBindedKeys.splitSixteenKey !== key) {
      this.rebind(this.prevBindedKeys.splitSixteenKey, key, 'down', splitSixteen);
      this.prevBindedKeys.splitSixteenKey = key;
    }
  }

  public bindQuickRespawn(key: string) {
    if (this.prevBindedKeys.quickRespawnKey !== key) {
      this.rebind(this.prevBindedKeys.quickRespawnKey, key, 'down', quickRespawn);
      this.prevBindedKeys.quickRespawnKey = key;
    }
  }

  public bindPauseCell(key: string) {
    if (this.prevBindedKeys.pauseCellKey !== key) {
      this.rebind(this.prevBindedKeys.pauseCellKey, key, 'down', pauseCell);
      this.prevBindedKeys.pauseCellKey = key;
    }
  }

  public bindToggleCellHelpersKey(key: string) {
    if (this.prevBindedKeys.toggleCellHelpersKey !== key) {
      this.rebind(this.prevBindedKeys.toggleCellHelpersKey, key, 'down', toggleCellHelpers);
      this.prevBindedKeys.toggleCellHelpersKey = key;
    }
  }

  public bindToggleCellRingsKey(key: string) {
    if (this.prevBindedKeys.toggleCellRingsKey !== key) {
      this.rebind(this.prevBindedKeys.toggleCellRingsKey, key, 'down', toggleCellRings);
      this.prevBindedKeys.toggleCellRingsKey = key;
    }
  }

  public bindToggleCellSkinsKey(key: string) {
    if (this.prevBindedKeys.toggleCellSkinsKey !== key) {
      this.rebind(this.prevBindedKeys.toggleCellSkinsKey, key, 'down', toggleCellSkins);
      this.prevBindedKeys.toggleCellSkinsKey = key;
    }
  }

  public bindSwitchTabsKey(key: string) {
    if (this.prevBindedKeys.switchTabsKey !== key) {
      this.rebind(this.prevBindedKeys.switchTabsKey, key, 'down', switchTabs);
      this.prevBindedKeys.switchTabsKey = key;
    }
  }

  public bindToggleFoodRenderKey(key: string) {
    if (this.prevBindedKeys.toggleFoodRenderKey !== key) {
      this.rebind(this.prevBindedKeys.toggleFoodRenderKey, key, 'down', toggleFoodRender);
      this.prevBindedKeys.toggleFoodRenderKey = key;
    }
  }

  public bindToggleSpectatorModeKey(key: string) {
    if (this.prevBindedKeys.toggleSpectatorModeKey !== key) {
      this.rebind(this.prevBindedKeys.toggleSpectatorModeKey, key, 'down', toggleSpectatorMode);
      this.prevBindedKeys.toggleSpectatorModeKey = key;
    }
  }

  public bindToggleHuds(key: string) {
    if (this.prevBindedKeys.toggleHudsKey !== key) {
      this.rebind(this.prevBindedKeys.toggleHudsKey, key, 'down', toggleHuds);
      this.prevBindedKeys.toggleHudsKey = key;
    }
  }
} 

export default new KeyboardGameEvens;

type GameEventsObjectType = {
  feedKey: string,
  macroFeedKey: string,
  splitKey: string,
  doubleSplitKey: string,
  tripleSplitKey: string,
  splitSixteenKey: string,
  quickRespawnKey: string,
  pauseCellKey: string,
  toggleCellHelpersKey: string,
  toggleCellRingsKey: string,
  toggleCellSkinsKey: string,
  switchTabsKey: string,
  toggleFoodRenderKey: string,
  toggleSpectatorModeKey: string,
  toggleHudsKey: string
}