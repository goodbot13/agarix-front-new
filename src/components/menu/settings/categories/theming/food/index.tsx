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
import Colorpick from "components/menu/settings/basic/colorpick";
import Range from "components/menu/settings/basic/range";


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
      <Range 
        text="Food size"
        from={2}
        to={32}
        value={size}
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
      <Range 
        text="Glow distance"
        from={10}
        to={250}
        value={glowDistance}
        onChange={setFoodGlowDistance}
        disabled={!glow || !enabled}
      />
      <Range 
        text="Glow strength"
        from={1}
        to={30}
        value={glowStrength}
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