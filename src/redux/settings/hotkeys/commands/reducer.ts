import Storage from "api/storage/Storage";
import { HotkeysCommandsActionTypes, IHotkeysCommands, SET_COMMAND_HOTKEY } from "./types";

const initState: IHotkeysCommands = Storage.get().settings.hotkeys.commands;

export const hotkeysCommandsReducer = (state = initState, action: HotkeysCommandsActionTypes): IHotkeysCommands => {
  switch(action.type) { 

    case SET_COMMAND_HOTKEY: {
      const { index, key, message } = action;

      const newState = state.map((command) => ({ ...command }));

      newState.forEach((command, i) => {
        if (i === index) {
          command.key = key;
          command.message = message;
        } else {
          if (command.key === key) {
            command.key = '';
          }
        }
      });

      return newState;
    }

    default: return state;
  }
}