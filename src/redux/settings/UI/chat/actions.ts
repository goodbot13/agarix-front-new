import { RGB } from "redux/settings/theming/types";
import { 
  ChatType,
  SET_CHAT_BACKGROUND_COLOR, 
  SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR, 
  SET_CHAT_COMMAND_MESSAGE_FONT_COLOR, 
  SET_CHAT_ENABLED, 
  SET_CHAT_FONT_COLOR, 
  SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR, 
  SET_CHAT_GAME_MESSAGE_FONT_COLOR, 
  SET_CHAT_HEIGHT, 
  SET_CHAT_TYPE, 
  UIChatActionTypes 
} from "./types";

export const setChatEnabled = (enabled: boolean): UIChatActionTypes => ({
  type: SET_CHAT_ENABLED,
  enabled
});

export const setChatHeight = (height: number): UIChatActionTypes => ({
  type: SET_CHAT_HEIGHT,
  height
});

export const setChatType = (chatType: ChatType): UIChatActionTypes => ({
  type: SET_CHAT_TYPE,
  chatType
});

export const setChatBackgroundColor = (backgroundColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_BACKGROUND_COLOR,
  backgroundColor
});

export const setChatFontColor = (fontColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_FONT_COLOR,
  fontColor
});

export const setChatCommandMessageBackgroundColor = (commandMessageBackgroundColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR,
  commandMessageBackgroundColor
});

export const setChatCommandMessageFontColor = (commandMessageFontColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_COMMAND_MESSAGE_FONT_COLOR,
  commandMessageFontColor
});

export const setChatGameMessageBackgroundColor = (gameMessageBackgroundColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR,
  gameMessageBackgroundColor
});

export const setChatGameMessageFontColor = (gameMessageFontColor: RGB): UIChatActionTypes => ({
  type: SET_CHAT_GAME_MESSAGE_FONT_COLOR,
  gameMessageFontColor
});
