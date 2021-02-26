import { RGB } from "redux/settings/theming/types";

export const SET_CHAT_ENABLED = 'SET_CHAT_ENABLED';
export const SET_CHAT_TYPE = 'SET_CHAT_TYPE';
export const SET_CHAT_BACKGROUND_COLOR = 'SET_CHAT_BACKGROUND_COLOR';
export const SET_CHAT_FONT_COLOR = 'SET_CHAT_FONT_COLOR';
export const SET_CHAT_HEIGHT = 'SET_CHAT_HEIGHT';
export const SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR = 'SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR'
export const SET_CHAT_COMMAND_MESSAGE_FONT_COLOR = 'SET_CHAT_COMMAND_MESSAGE_FONT_COLOR';
export const SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR = 'SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR';
export const SET_CHAT_GAME_MESSAGE_FONT_COLOR = 'SET_CHAT_GAME_MESSAGE_FONT_COLOR';

export type ChatType = 'POPUP' | 'CHATBOX';

export interface IUIChatState {
  enabled: boolean,
  chatType: ChatType,
  height: number,
  backgroundColor: RGB,
  fontColor: RGB
  commandMessageBackgroundColor: RGB,
  commandMessageFontColor: RGB,
  gameMessageBackgroundColor: RGB,
  gameMessageFontColor: RGB,
}

interface SetEnabledAction {
  type: typeof SET_CHAT_ENABLED,
  enabled: boolean
}

interface SetTypeAction {
  type: typeof SET_CHAT_TYPE,
  chatType: ChatType
}

interface SetHeightAction {
  type: typeof SET_CHAT_HEIGHT,
  height: number
}

interface SetBackgroundColorAction {
  type: typeof SET_CHAT_BACKGROUND_COLOR,
  backgroundColor: RGB
}

interface SetFontColorAction {
  type: typeof SET_CHAT_FONT_COLOR,
  fontColor: RGB
}

interface SetCommandMessageBackgroundColorAction {
  type: typeof SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR,
  commandMessageBackgroundColor: RGB
}

interface SetCommandMessageFontColorAction {
  type: typeof SET_CHAT_COMMAND_MESSAGE_FONT_COLOR,
  commandMessageFontColor: RGB
}

interface SetGameMessageBackgroundColorAction {
  type: typeof SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR,
  gameMessageBackgroundColor: RGB
}

interface SetGameMessageFontColorAction {
  type: typeof SET_CHAT_GAME_MESSAGE_FONT_COLOR,
  gameMessageFontColor: RGB
}

export type UIChatActionTypes = SetEnabledAction | SetBackgroundColorAction | SetHeightAction | 
                                SetCommandMessageBackgroundColorAction | SetTypeAction | SetFontColorAction |
                                SetCommandMessageFontColorAction | SetGameMessageBackgroundColorAction | SetGameMessageFontColorAction; 