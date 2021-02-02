import { GameCellsActionTypes } from "./game/cells/types";
import { GameEffectsActionTypes } from "./game/effects/types";
import { GameGameplayActionTypes } from "./game/gameplay/types";
import { GameMultiboxActionTypes } from "./game/multibox/types";
import { GamePerformanceActionTypes } from "./game/performance/types";

export type SettingsActionTypes = GamePerformanceActionTypes | GameCellsActionTypes | GameGameplayActionTypes | 
                                  GameMultiboxActionTypes | GameEffectsActionTypes;