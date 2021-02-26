import Colorpick from "components/menu/settings/basic/colorpick";

import { FC } from "react";

import { RGB } from "redux/settings/theming/types";

import { connect } from "react-redux";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

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
  thunkSetShadowStrength 
} from "redux/settings/theming/cells/thunks";

import Select from "components/menu/settings/basic/select";

import { ADAPTIVE_SHADOW_HINT, ONE_COLORED_STATS_COLOR_HINT } from "redux/settings/theming/cells/hints";
import { CELLS_COLOR_LIGHTEN_VALUES, CELLS_SHADOW_DISTANCE_VALUES, CELLS_SHADOW_STRENGTH_VALUES, CELLS_TRANSPARENCY_VALUES } from "redux/settings/theming/cells/values";
import Switch from "components/menu/settings/basic/switch";

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
  setAdaptiveShadow
}) => {
  return (
    <>
      <Colorpick 
        text='One colored cells color'
        color={oneColoredColor}
        onChange={setOneColoredColor}
      />
      <Colorpick 
        text='One colored stats color'
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
      <Colorpick 
        text='Shadow color'
        color={shadowColor}
        onChange={setShadowColor}
      />
      <Select 
        text='Shadow distance'
        items={CELLS_SHADOW_DISTANCE_VALUES}
        selectedItem={shadowDistance}
        onChange={setShadowDistance}
      />
      <Select 
        text='Shadow strength'
        items={CELLS_SHADOW_STRENGTH_VALUES}
        selectedItem={shadowStrength}
        onChange={setShadowStrength}
      />
      <Colorpick 
        text='My cell shadow color'
        color={myShadowColor}
        onChange={setMyShadowColor}
      />
      <Select 
        text='My cell shadow distance'
        items={CELLS_SHADOW_DISTANCE_VALUES}
        selectedItem={myShadowDistance}
        onChange={setMyShadowDistance}
      />
      <Select 
        text='My cell shadow strength'
        items={CELLS_SHADOW_STRENGTH_VALUES}
        selectedItem={myShadowStrength}
        onChange={setMyShadowStrength}
      />
      <Select 
        text='Transparency'
        items={CELLS_TRANSPARENCY_VALUES}
        selectedItem={transparency}
        onChange={setCellsTransparency}
      />
      <Select
        text="Color lighten"
        items={CELLS_COLOR_LIGHTEN_VALUES}
        selectedItem={colorLighten}
        onChange={setCellsColorLighten} 
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.cells
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
  setAdaptiveShadow: (value: boolean) => dispatch(thunkSetAdaptiveShadow(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(Cells);

type CellsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;