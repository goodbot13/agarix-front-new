import { createArray } from "api/utils";

export const VIRUS_BORDER_WIDTH_VALUES = createArray(11, 4, 1); // 4...15
export const VIRUS_GLOW_DISTANCE_VALUES = createArray(15, 10, 10); // 10...150
export const VIRUS_GLOW_STRENGTH_VALUES = createArray(14, 2, 1); // 2...15
export const VIRUS_TRANSPARENCY_VALUES = createArray(51, 0.50, 0.01, 2); // 0.50...1.00