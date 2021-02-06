import Colorpick from "components/menu/settings/basic/colorpick";

import { FC } from "react";

import { RGB } from "redux/settings/theming/types";

import { connect } from "react-redux";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { 
  thunkSetCellsTransparency, 
  thunksetMyShadowColor, 
  thunkSetOneColoredColor, 
  thunkSetShadowColor, 
  thunksetShadowDistance, 
  thunksetShadowStrength 
} from "redux/settings/theming/cells/thunks";
import Select from "components/menu/settings/basic/select";
import { ONE_COLORED_STATS_COLOR_HINT } from "redux/settings/theming/cells/hints";
import { CELLS_SHADOW_DISTANCE_VALUES, CELLS_SHADOW_STRENGTH_VALUES, CELLS_TRANSPARENCY_VALUES } from "redux/settings/theming/cells/values";

const Cells: FC<CellsType> = ({
  oneColoredColor,
  oneColoredStatsColor,
  shadowColor,
  myShadowColor,
  shadowDistance,
  shadowStrength,
  transparency,
  setOneColoredColor,
  setOneColoredStatsColor,
  setShadowColor,
  setMyShadowColor,
  setShadowDistance,
  setShadowStrength,
  setCellsTransparency
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
      <Colorpick 
        text='Shadow color'
        color={shadowColor}
        onChange={setShadowColor}
      />
      <Colorpick 
        text='My shadow color'
        color={myShadowColor}
        onChange={setMyShadowColor}
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
      <Select 
        text='Transparency'
        items={CELLS_TRANSPARENCY_VALUES}
        selectedItem={transparency}
        onChange={setCellsTransparency}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.cells
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setOneColoredColor: (color: RGB) => dispatch(thunkSetOneColoredColor(color)),
  setOneColoredStatsColor: (color: RGB) => dispatch(thunkSetOneColoredColor(color)),
  setShadowColor: (color: RGB) => dispatch(thunkSetShadowColor(color)),
  setMyShadowColor: (color: RGB) => dispatch(thunksetMyShadowColor(color)),
  setShadowDistance: (value: number) => dispatch(thunksetShadowDistance(value)),
  setShadowStrength: (value: number) => dispatch(thunksetShadowStrength(value)),
  setCellsTransparency: (value: number) => dispatch(thunkSetCellsTransparency(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(Cells);

type CellsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;