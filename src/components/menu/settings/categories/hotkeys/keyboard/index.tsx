import { FC } from "react"

import { AppStateType, ThunkRootDispatchType } from "redux/store"

import { connect } from "react-redux";

import KeyboardBinder from "components/menu/settings/basic/keyboard-binder";

import { 
  thunkSetDoubleSplit, 
  thunkSetFeed, 
  thunkSetMacroFeed, 
  thunkSetPauseCell, 
  thunkSetQuickRespawn, 
  thunkSetSplit, 
  thunkSetSplitSixteen, 
  thunkSetSwitchTabs, 
  thunkSetToggleCellHelpers, 
  thunkSetToggleCellRings, 
  thunkSetToggleCellSkins, 
  thunkSetToggleFoodRender, 
  thunkSetToggleHuds, 
  thunkSetToggleSpectatorMode, 
  thunkSetTripleSplit 
} from "redux/settings/hotkeys/keyboard/thunks";

import Hint from "components/menu/settings/basic/hint";

export const Keyboard: FC<KeyboardType> = ({
  feed,
  macroFeed,
  split,
  doubleSplit,
  tripleSplit,
  splitSixteen,
  quickRespawn,
  pauseCell,
  toggleCellHelpers,
  toggleCellSkins,
  toggleCellRings,
  switchTabs,
  toggleFoodRender,
  toggleSpectatorMode,
  toggleHuds,
  setFeed,
  setMacroFeed,
  setSplit,
  setDoubleSplit,
  setTripleSplit,
  setSplitSixteen,
  setQuickRespawn,
  setPauseCell,
  setToggleCellHelpers,
  setToggleCellSkins,
  setToggleCellRings,
  setSwitchTabs,
  setToggleFoodRender,
  setToggleSpectatorMode,
  setToggleHuds
}) => {
  return (
    <>
      <Hint text='Use DEL (Delete) key to unbind keybinding'/>
      <KeyboardBinder 
        text="Feed"
        value={feed}
        onChage={setFeed}
      />
      <KeyboardBinder 
        text="Macro feed"
        value={macroFeed}
        onChage={setMacroFeed}
      />
      <KeyboardBinder 
        text="Split"
        value={split}
        onChage={setSplit}
      />
      <KeyboardBinder 
        text="Double split"
        value={doubleSplit}
        onChage={setDoubleSplit}
      />
      <KeyboardBinder 
        text="Triple split"
        value={tripleSplit}
        onChage={setTripleSplit}
      />
      <KeyboardBinder 
        text="Split 16"
        value={splitSixteen}
        onChage={setSplitSixteen}
      />
      <KeyboardBinder 
        text="Switch tabs (multibox)"
        value={switchTabs}
        onChage={setSwitchTabs}
      />
      <KeyboardBinder 
        text="Quick respawn"
        value={quickRespawn}
        onChage={setQuickRespawn}
      />
      <KeyboardBinder 
        text="Pause cell"
        value={pauseCell}
        onChage={setPauseCell}
      />
      <KeyboardBinder 
        text="Toggle cell helpers"
        value={toggleCellHelpers}
        onChage={setToggleCellHelpers}
      />
      <KeyboardBinder 
        text="Toggle cell skins"
        value={toggleCellSkins}
        onChage={setToggleCellSkins}
      />
      <KeyboardBinder 
        text="Toggle cell rings"
        value={toggleCellRings}
        onChage={setToggleCellRings}
      />
      <KeyboardBinder 
        text="Toggle food visibility"
        value={toggleFoodRender}
        onChage={setToggleFoodRender}
      />
      <KeyboardBinder 
        text="Toggle spectator mode visibility"
        value={toggleSpectatorMode}
        onChage={setToggleSpectatorMode}
      />
      <KeyboardBinder 
        text="Toggle huds"
        value={toggleHuds}
        onChage={setToggleHuds}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.hotkeys.keyboard
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setFeed: (value: string) => dispatch(thunkSetFeed(value)),
  setMacroFeed: (value: string) => dispatch(thunkSetMacroFeed(value)),
  setSplit: (value: string) => dispatch(thunkSetSplit(value)),
  setDoubleSplit: (value: string) => dispatch(thunkSetDoubleSplit(value)),
  setTripleSplit: (value: string) => dispatch(thunkSetTripleSplit(value)),
  setSplitSixteen: (value: string) => dispatch(thunkSetSplitSixteen(value)),
  setQuickRespawn: (value: string) => dispatch(thunkSetQuickRespawn(value)),
  setPauseCell: (value: string) => dispatch(thunkSetPauseCell(value)),
  setToggleCellHelpers: (value: string) => dispatch(thunkSetToggleCellHelpers(value)),
  setToggleCellSkins: (value: string) => dispatch(thunkSetToggleCellSkins(value)),
  setToggleCellRings: (value: string) => dispatch(thunkSetToggleCellRings(value)),
  setSwitchTabs: (value: string) => dispatch(thunkSetSwitchTabs(value)),
  setToggleFoodRender: (value: string) => dispatch(thunkSetToggleFoodRender(value)),
  setToggleSpectatorMode: (value: string) => dispatch(thunkSetToggleSpectatorMode(value)),
  setToggleHuds: (value: string) => dispatch(thunkSetToggleHuds(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);

type KeyboardType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;