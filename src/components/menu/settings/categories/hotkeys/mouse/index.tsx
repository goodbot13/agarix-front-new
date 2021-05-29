import { FC } from "react";

import { connect } from "react-redux";

import { thunkSetLeftMouseHotkey, thunkSetMiddleMouseHotkey, thunkSetRightMouseHotkey } from "redux/settings/hotkeys/mouse/thunks";
import { arrayOfNames, TGameActionName } from "redux/settings/hotkeys/mouse/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import Select from "components/menu/settings/basic/select";

export const Mouse: FC<TMouse> = ({
  left,
  right,
  middle,
  setLeft,
  setRight,
  setMiddle
}) => {
  return (
    <>
      <Select 
        text="Left click"
        items={arrayOfNames}
        selectedItem={left}
        onChange={setLeft}
      />
      <Select 
        text="Middle click"
        items={arrayOfNames}
        selectedItem={middle}
        onChange={setMiddle}
      />
      <Select 
        text="Right click"
        items={arrayOfNames}
        selectedItem={right}
        onChange={setRight}
      />
    </>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  ...state.settings.hotkeys.mouse
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setLeft: (value: TGameActionName) => dispatch(thunkSetLeftMouseHotkey(value)),
  setRight: (value: TGameActionName) => dispatch(thunkSetRightMouseHotkey(value)),
  setMiddle: (value: TGameActionName) => dispatch(thunkSetMiddleMouseHotkey(value))
});

type TMouse = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Mouse);