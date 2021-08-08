import { RGB } from "redux/settings/theming/types";
import {
  SET_LEADERBOARD_BACKDROP_BLUR, 
  SET_LEADERBOARD_BACKGROUND_COLOR, 
  SET_LEADERBOARD_DISPLAY_AMOUNT, 
  SET_LEADERBOARD_DISPLAY_POSITION, 
  SET_LEADERBOARD_ME_COLOR, 
  SET_LEADERBOARD_SCALE, 
  SET_LEADERBOARD_SHORT_MASS, 
  SET_LEADERBOARD_SHOWN, 
  SET_LEADERBOARD_SHOW_MASS, 
  UILeaderboardActionTypes 
} from "./types";

export const setLeaderboardShown = (shown: boolean): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_SHOWN,
  shown
});

export const setLeaderboardDisplayAmount = (displayAmount: number): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_DISPLAY_AMOUNT,
  displayAmount
});

export const setLeaderboardScale = (scale: number): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_SCALE,
  scale
});

export const setLeaderboardShowMass = (showMass: boolean): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_SHOW_MASS,
  showMass
});

export const setLeaderboardBackdropBlur = (backdropBlur: boolean): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_BACKDROP_BLUR,
  backdropBlur
});

export const setLeaderboardBackgroundColor = (backgroundColor: RGB): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_BACKGROUND_COLOR,
  backgroundColor
});

export const setLeaderboardDisplayPosition = (displayPosition: boolean): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_DISPLAY_POSITION,
  displayPosition
});

export const setLeaderboardMeColor = (meColor: RGB): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_ME_COLOR,
  meColor
});

export const setLeaderboardShortMass = (shortMass: boolean): UILeaderboardActionTypes => ({
  type: SET_LEADERBOARD_SHORT_MASS,
  shortMass
});