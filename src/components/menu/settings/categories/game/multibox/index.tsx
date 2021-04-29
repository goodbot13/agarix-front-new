import { FC } from 'react';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import {
  thunkSetMultiboxChangeCellColor,
  thunkSetMultiboxChangeRingColor,
  thunkSetMultiboxEnabled,
  thunkSetMultiboxHideOwnSkins,
  thunkSetMultiboxRing,
  thunkSetMultiboxSmoothSwitch,
  thunkSetMultiboxStaticColor,
} from 'redux/settings/game/multibox/thunks';

import Switch from 'components/menu/settings/basic/switch';

const Multibox: FC<MultiboxType> = ({
  enabled,
  ring,
  changeRingColor,
  changeCellColor,
  hideOwnSkins,
  staticColor,
  smoothSwitch,
  setEnabled,
  setRing,
  setChangeRingColor,
  setChangeCellColor,
  setHideOwnSkins,
  setStaticColor,
  setSmoothSwitch,
}) => {
  return (
    <>
      <Switch text="Enabled" enabled={enabled} onChange={setEnabled} main />
      <Switch text="Use ring" enabled={ring} onChange={setRing} disabled={!enabled} />
      <Switch
        text="Change ring color on focus"
        enabled={changeRingColor}
        onChange={setChangeRingColor}
        disabled={!enabled}
      />
      <Switch
        text="Smooth tabs switch"
        enabled={smoothSwitch}
        onChange={setSmoothSwitch}
        disabled={!changeRingColor || !enabled}
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
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.multibox,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setEnabled: (value: boolean) => dispatch(thunkSetMultiboxEnabled(value)),
  setRing: (value: boolean) => dispatch(thunkSetMultiboxRing(value)),
  setChangeRingColor: (value: boolean) => dispatch(thunkSetMultiboxChangeRingColor(value)),
  setChangeCellColor: (value: boolean) => dispatch(thunkSetMultiboxChangeCellColor(value)),
  setHideOwnSkins: (value: boolean) => dispatch(thunkSetMultiboxHideOwnSkins(value)),
  setStaticColor: (value: boolean) => dispatch(thunkSetMultiboxStaticColor(value)),
  setSmoothSwitch: (value: boolean) => dispatch(thunkSetMultiboxSmoothSwitch(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Multibox);

type MultiboxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
