import { GameCellsActionTypes } from "./game/cells/types";
import { GameEffectsActionTypes } from "./game/effects/types";
import { GameGameplayActionTypes } from "./game/gameplay/types";
import { GameMultiboxActionTypes } from "./game/multibox/types";
import { GamePerformanceActionTypes } from "./game/performance/types";

import { ThemingCellsActionTypes } from "./theming/cells/types";
import { ThemingFoodActionTypes } from "./theming/food/types";
import { ThemingMapActionTypes } from "./theming/map/types";
import { ThemingMinimapActionTypes } from "./theming/minimap/types";
import { ThemingMultiboxActionTypes } from "./theming/multibox/types";
import { ThemingVirusesActionTypes } from "./theming/viruses/types";

export type SettingsActionTypes = GamePerformanceActionTypes | GameCellsActionTypes | GameGameplayActionTypes | GameMultiboxActionTypes | GameEffectsActionTypes | 
  ThemingCellsActionTypes | ThemingFoodActionTypes | ThemingVirusesActionTypes | ThemingMinimapActionTypes | ThemingMapActionTypes | ThemingMultiboxActionTypes;