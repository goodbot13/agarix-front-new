import Colorpick from 'components/menu/settings/basic/colorpick';

import { FC } from 'react';

import { RGB } from 'redux/settings/theming/types';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import {
  thunkSetAdaptiveShadow,
  thunkSetCellsColorLighten,
  thunkSetCellsTransparency,
  thunkSetMyShadowColor,
  thunkSetMyShadowDistance,
  thunkSetMyShadowStrength,
  thunkSetOneColoredColor,
  thunkSetOneColoredStatsColor,
  thunkSetShadowColor,
  thunkSetShadowDistance,
  thunkSetShadowStrength,
} from 'redux/settings/theming/cells/thunks';

import {
  ADAPTIVE_SHADOW_HINT,
  ONE_COLORED_STATS_COLOR_HINT,
} from 'redux/settings/theming/cells/hints';
import Switch from 'components/menu/settings/basic/switch';
import Range from 'components/menu/settings/basic/range';

const Cells: FC<CellsType> = ({
  oneColoredColor,
  oneColoredStatsColor,
  shadowColor,
  myShadowColor,
  shadowDistance,
  myShadowDistance,
  shadowStrength,
  myShadowStrength,
  transparency,
  colorLighten,
  adaptiveShadow,
  setOneColoredColor,
  setOneColoredStatsColor,
  setShadowColor,
  setMyShadowColor,
  setShadowDistance,
  setMyShadowDistance,
  setShadowStrength,
  setMyShadowStrength,
  setCellsTransparency,
  setCellsColorLighten,
  setAdaptiveShadow,
}) => {
  return (
    <>
      <Colorpick
        text="One colored cells color"
        color={oneColoredColor}
        onChange={setOneColoredColor}
      />
      <Colorpick
        text="One colored stats color"
        color={oneColoredStatsColor}
        onChange={setOneColoredStatsColor}
        hint={ONE_COLORED_STATS_COLOR_HINT}
      />
      <Switch
        text="Adaptive shadow"
        hint={ADAPTIVE_SHADOW_HINT}
        enabled={adaptiveShadow}
        onChange={setAdaptiveShadow}
      />
      <Colorpick text="Shadow color" color={shadowColor} onChange={setShadowColor} />
      <Range
        text="Shadow distance"
        from={5}
        to={100}
        value={shadowDistance}
        onChange={setShadowDistance}
      />
      <Range
        text="Shadow strength"
        from={1}
        to={10}
        value={shadowStrength}
        onChange={setShadowStrength}
      />
      <Colorpick text="My cell shadow color" color={myShadowColor} onChange={setMyShadowColor} />
      <Range
        text="My cell shadow distance"
        from={5}
        to={100}
        value={myShadowDistance}
        onChange={setMyShadowDistance}
      />
      <Range
        text="My cell shadow strength"
        from={1}
        to={10}
        value={myShadowStrength}
        onChange={setMyShadowStrength}
      />
      <Range
        text="Transparency"
        from={0.1}
        to={1}
        value={transparency}
        onChange={setCellsTransparency}
      />
      <Range
        text="Color lighten"
        from={10}
        to={160}
        value={colorLighten}
        onChange={setCellsColorLighten}
      />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.cells,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setOneColoredColor: (color: RGB) => dispatch(thunkSetOneColoredColor(color)),
  setOneColoredStatsColor: (color: RGB) => dispatch(thunkSetOneColoredStatsColor(color)),
  setShadowColor: (color: RGB) => dispatch(thunkSetShadowColor(color)),
  setMyShadowColor: (color: RGB) => dispatch(thunkSetMyShadowColor(color)),
  setShadowDistance: (value: number) => dispatch(thunkSetShadowDistance(value)),
  setMyShadowDistance: (value: number) => dispatch(thunkSetMyShadowDistance(value)),
  setShadowStrength: (value: number) => dispatch(thunkSetShadowStrength(value)),
  setMyShadowStrength: (value: number) => dispatch(thunkSetMyShadowStrength(value)),
  setCellsTransparency: (value: number) => dispatch(thunkSetCellsTransparency(value)),
  setCellsColorLighten: (value: number) => dispatch(thunkSetCellsColorLighten(value)),
  setAdaptiveShadow: (value: boolean) => dispatch(thunkSetAdaptiveShadow(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cells);

type CellsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
