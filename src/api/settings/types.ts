import { IGameState } from 'redux/game/types';
import { IProfilesState, TLoginType } from 'redux/profiles/types';
import { IGameCellsState } from 'redux/settings/game/cells/types';
import { IGameEffectsState } from 'redux/settings/game/effects/types';
import { IGameGameplayState } from 'redux/settings/game/gameplay/types';
import { IGameMinimapState } from 'redux/settings/game/minimap/types';
import { IGameMultiboxState } from 'redux/settings/game/multibox/types';
import { IGamePerformanceState } from 'redux/settings/game/performance/types';
import { IGameBotsState } from 'redux/settings/game/bots/types';
import { IThemingCellsState } from 'redux/settings/theming/cells/types';
import { IThemingFoodState } from 'redux/settings/theming/food/types';
import { IThemingMapState } from 'redux/settings/theming/map/types';
import { IThemingMinimapState } from 'redux/settings/theming/minimap/types';
import { IThemingMultiboxState } from 'redux/settings/theming/multibox/types';
import { IThemingVirusesState } from 'redux/settings/theming/viruses/types';

export interface IState {
  settings: {
    game: {
      cells: IGameCellsState;
      effects: IGameEffectsState;
      gameplay: IGameGameplayState;
      minimap: IGameMinimapState;
      multibox: IGameMultiboxState;
      performance: IGamePerformanceState;
      bots: IGameBotsState;
    };
    theming: {
      cells: IThemingCellsState;
      food: IThemingFoodState;
      map: IThemingMapState;
      minimap: IThemingMinimapState;
      multibox: IThemingMultiboxState;
      viruses: IThemingVirusesState;
    };
  };
  game: IGameState;
  profiles: IProfiles;
}

interface IProfiles {
  leftProfileNick: string;
  leftProfileSkinUrl: string;
  rightProfileNick: string;
  rightProfileSkinUrl: string;
  tag: string;
  leftProfileLoginType: TLoginType;
  rightProfileLoginType: TLoginType;
}

declare global {
  interface Window {
    GameSettings: {
      all: IState;

      updateThemingCells(type: TThemingCells): void;
      updateThemingFood(): void;
      updateThemingMap(type: TThemingMap | null): void;
      updateThemingMinimap(type: TThemingMinimap): void;
      updateThemingMultibox(type: TThemingMultibox): void;
      updateThemingViewports(): void;
      updateThemingViruses(): void;

      updateSystemCells(): void;
      updateSystemEffects(): void;
      updateSystemGameplay(): void;
      updateSystemMinimap(): void;
      updateSystemMultibox(): void;
      updateSystemPerformance(): void;
    };
  }
}

export type TThemingMap = 'Border' | 'BgTint' | 'BgImgUrl' | 'GlobalBgImgUrl' | 'GlobalBgImgTint';
export type TThemingCells = 'Shadow' | 'MyShadow';
export type TThemingMultibox = 'LinedRing';
export type TThemingMinimap =
  | 'BgColor'
  | 'Size'
  | 'ViewportColors'
  | 'PlayerColor'
  | 'GhostCellsColor';
