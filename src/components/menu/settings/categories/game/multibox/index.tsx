import { FC } from "react";

import { connect } from "react-redux";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { 
  thunkSetMultiboxChangeCellColor, 
  thunkSetMultiboxChangeRingColor, 
  thunkSetMultiboxEnabled, 
  thunkSetMultiboxHideOwnSkins, 
  thunkSetMultiboxStaticColor 
} from "redux/settings/game/multibox/thunks";

import Switch from "components/menu/settings/basic/switch";

const Multibox: FC<MultiboxType> = ({
  enabled,
  changeRingColor,
  changeCellColor,
  hideOwnSkins,
  staticColor,
  setEnabled,
  setChangeRingColor,
  setChangeCellColor,
  setHideOwnSkins,
  setStaticColor
}) => {
  return (
    <>
      <Switch
        text="Enabled"
        enabled={enabled}
        onChange={setEnabled}
        main
      />
      <Switch
        text="Change ring color on focus"
        enabled={changeRingColor}
        onChange={setChangeRingColor}
        disabled={!enabled}
      />
      <Switch
        text="Change cell color on focus"
        enabled={changeCellColor}
        onChange={setChangeCellColor}
        disabled={!enabled}
      />
      <Switch
        text="Hide own skins"
        enabled={hideOwnSkins}
        onChange={setHideOwnSkins}
        disabled={!enabled}
      />
      <Switch
        text="Use static color for my cells"
        enabled={staticColor}
        onChange={setStaticColor}
        disabled={!enabled}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.multibox
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setEnabled: (value: boolean) => dispatch(thunkSetMultiboxEnabled(value)),
  setChangeRingColor: (value: boolean) => dispatch(thunkSetMultiboxChangeRingColor(value)),
  setChangeCellColor: (value: boolean) => dispatch(thunkSetMultiboxChangeCellColor(value)),
  setHideOwnSkins: (value: boolean) => dispatch(thunkSetMultiboxHideOwnSkins(value)),
  setStaticColor: (value: boolean) => dispatch(thunkSetMultiboxStaticColor(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Multibox);

type MultiboxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;