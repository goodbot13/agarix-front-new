import { FC } from "react";

import { RGB } from "redux/settings/theming/types";

import { connect } from "react-redux";

import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { 
  thunkSetFoodColor, 
  thunkSetFoodCrisp, 
  thunkSetFoodGlow, 
  thunkSetFoodGlowColor, 
  thunkSetFoodGlowDistance, 
  thunkSetFoodGlowStrength, 
  thunkSetFoodSize 
} from "redux/settings/theming/food/thunks";
import Switch from "components/menu/settings/basic/switch";
import Select from "components/menu/settings/basic/select";
import Colorpick from "components/menu/settings/basic/colorpick";
import { FOOD_GLOW_DISTANCE_VALUES, FOOD_GLOW_STRENGTH_VALUES, FOOD_SIZE_VALUES } from "redux/settings/theming/food/values";


const Food: FC<FoodType> = ({
  size,
  color,
  glow,
  glowColor,
  glowDistance,
  glowStrength,
  crisp,
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
      <Select 
        text="Food size"
        items={FOOD_SIZE_VALUES}
        selectedItem={size}
        onChange={setFoodSize}
      />
      <Colorpick 
        text="Color"
        color={color}
        onChange={setFoodColor}
      />
      <Switch 
        text="Glow"
        enabled={glow}
        onChange={setFoodGlow}
      />
      <Colorpick 
        text="Glow color"
        color={glowColor}
        onChange={setFoodGlowColor}
        disabled={!glow}
      />
      <Select 
        text="Glow distance"
        selectedItem={glowDistance}
        items={FOOD_GLOW_DISTANCE_VALUES}
        onChange={setFoodGlowDistance}
        disabled={!glow}
      />
      <Select 
        text="Glow strength"
        selectedItem={glowStrength}
        items={FOOD_GLOW_STRENGTH_VALUES}
        onChange={setFoodGlowStrength}
        disabled={!glow}
      />
      <Switch 
        text="Crispy"
        enabled={crisp}
        onChange={setFoodCrisp}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.food
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
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