import Command from "components/menu/settings/basic/command";
import { FC } from "react";
import { connect } from "react-redux";
import { thunkSetCommandHotkey } from "redux/settings/hotkeys/commands/thunks";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

const Commands: FC<TCommands> = ({
  setCommand,
  commands
}) => {
  return (
    <>
      {commands.map((command, i) => {
        return (
          <Command 
            name={'Command'} 
            id={i} 
            key={i}
            keybind={command.key} 
            message={command.message}
            onChange={setCommand}
          />
        )
      })}
    </>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  commands: state.settings.hotkeys.commands
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setCommand: (id: number, message: string, key: string) => dispatch(thunkSetCommandHotkey(id, message, key))
});

type TCommands = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Commands);