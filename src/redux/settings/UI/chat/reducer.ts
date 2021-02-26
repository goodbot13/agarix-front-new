import Storage from "api/Storage/Storage";
import { 
  IUIChatState, 
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

const initState: IUIChatState = Storage.get().settings.UI.chat;

export const settingsChatReducer = (state = initState, action: UIChatActionTypes): IUIChatState => {
  switch (action.type) {
    case SET_CHAT_ENABLED:
      return {
        ...state,
        enabled: action.enabled
      }

    case SET_CHAT_TYPE:
      return {
        ...state,
        chatType: action.chatType
      }

    case SET_CHAT_HEIGHT:
      return {
        ...state,
        height: action.height
      }

    case SET_CHAT_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor
      }

    case SET_CHAT_FONT_COLOR:
      return {
        ...state,
        fontColor: action.fontColor
      }

    case SET_CHAT_COMMAND_MESSAGE_BACKGROUND_COLOR:
      return {
        ...state,
        commandMessageBackgroundColor: action.commandMessageBackgroundColor
      }

    case SET_CHAT_COMMAND_MESSAGE_FONT_COLOR:
      return {
        ...state,
        commandMessageFontColor: action.commandMessageFontColor
      }

    case SET_CHAT_GAME_MESSAGE_BACKGROUND_COLOR:
      return {
        ...state,
        gameMessageBackgroundColor: action.gameMessageBackgroundColor
      }

    case SET_CHAT_GAME_MESSAGE_FONT_COLOR:
      return {
        ...state,
        gameMessageFontColor: action.gameMessageFontColor
      }

    default: return state;
  }
}