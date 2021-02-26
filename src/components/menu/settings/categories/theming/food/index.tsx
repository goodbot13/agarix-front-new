import { FC } from "react";

import { RGB } from "redux/settings/theming/types";

import { connect } from "react-redux";

import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { 
  thunkSetFoodColor, 
  thunkSetFoodCrisp, 
  thunkSetFoodEnabled, 
  thunkSetFoodFirstTabEnabled, 
  thunkSetFoodGlow, 
  thunkSetFoodGlowColor, 
  thunkSetFoodGlowDistance, 
  thunkSetFoodGlowStrength, 
  thunkSetFoodSecondTabEnabled, 
  thunkSetFoodSize, 
  thunkSetFoodTopOneTabEnabled
} from "redux/settings/theming/food/thunks";
import Switch from "components/menu/settings/basic/switch";
import Select from "components/menu/settings/basic/select";
import Colorpick from "components/menu/settings/basic/colorpick";
import { FOOD_GLOW_DISTANCE_VALUES, FOOD_GLOW_STRENGTH_VALUES, FOOD_SIZE_VALUES } from "redux/settings/theming/food/values";


const Food: FC<FoodType> = ({
  enabled,
  firstTabEnabled,
  secondTabEnabled,
  topOneTabEnabled,
  size,
  color,
  glow,
  glowColor,
  glowDistance,
  glowStrength,
  crisp,
  setFoodEnabled,
  setFoodFirstTabEnabled,
  setFoodSecondTabEnabled,
  setFoodTopOneTabEnabled,
  setFoodSize,
  setFoodColor,
  setFoodGlow,
  setFoodGlowColor,
  setFoodGlowDistance,
  setFoodGlowStrength,
  setFoodCrisp
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={enabled}
        onChange={setFoodEnabled}
        main
      />
      <Switch 
        text="Enabled for main (first) player tab"
        enabled={firstTabEnabled}
        onChange={setFoodFirstTabEnabled}
        disabled={!enabled}
      />
      <Switch 
        text="Enabled for multibox (second) player tab"
        enabled={secondTabEnabled}
        onChange={setFoodSecondTabEnabled}
        disabled={!enabled}
      />
      <Switch 
        text="Enabled for top one (spectator) tab"
        enabled={topOneTabEnabled}
        onChange={setFoodTopOneTabEnabled}
        disabled={!enabled}
      />
      <Select 
        text="Food size"
        items={FOOD_SIZE_VALUES}
        selectedItem={size}
        onChange={setFoodSize}
        disabled={!enabled}
      />
      <Colorpick 
        text="Color"
        color={color}
        onChange={setFoodColor}
        disabled={!enabled}
      />
      <Switch 
        text="Glow"
        enabled={glow}
        onChange={setFoodGlow}
        disabled={!enabled}
      />
      <Colorpick 
        text="Glow color"
        color={glowColor}
        onChange={setFoodGlowColor}
        disabled={!glow || !enabled}
      />
      <Select 
        text="Glow distance"
        selectedItem={glowDistance}
        items={FOOD_GLOW_DISTANCE_VALUES}
        onChange={setFoodGlowDistance}
        disabled={!glow || !enabled}
      />
      <Select 
        text="Glow strength"
        selectedItem={glowStrength}
        items={FOOD_GLOW_STRENGTH_VALUES}
        onChange={setFoodGlowStrength}
        disabled={!glow || !enabled}
      />
      <Switch 
        text="Crispy"
        enabled={crisp}
        onChange={setFoodCrisp}
        disabled={!enabled}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.food
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setFoodEnabled: (value: boolean) => dispatch(thunkSetFoodEnabled(value)),
  setFoodFirstTabEnabled: (value: boolean) => dispatch(thunkSetFoodFirstTabEnabled(value)),
  setFoodSecondTabEnabled: (value: boolean) => dispatch(thunkSetFoodSecondTabEnabled(value)),
  setFoodTopOneTabEnabled: (value: boolean) => dispatch(thunkSetFoodTopOneTabEnabled(value)),
  setFoodSize: (value: number) => dispatch(thunkSetFoodSize(value)),
  setFoodColor: (color: RGB) => dispatch(thunkSetFoodColor(color)),
  setFoodGlow: (value: boolean) => dispatch(thunkSetFoodGlow(value)),
  setFoodGlowColor: (color: RGB) => dispatch(thunkSetFoodGlowColor(color)),
  setFoodGlowDistance: (value: number) => dispatch(thunkSetFoodGlowDistance(value)),
  setFoodGlowStrength: (value: number) => dispatch(thunkSetFoodGlowStrength(value)),
  setFoodCrisp: (value: boolean) => dispatch(thunkSetFoodCrisp(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Food);

type FoodType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;