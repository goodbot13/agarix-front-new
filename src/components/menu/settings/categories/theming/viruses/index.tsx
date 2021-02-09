import { FC } from "react";
import { connect } from "react-redux";

import { FOOD_GLOW_STRENGTH_VALUES } from "redux/settings/theming/food/values";
import { RGB } from "redux/settings/theming/types";

import { 
  thunkSetFillCircleColor, 
  thunkSetVirusBorderColor, 
  thunkSetVirusBorderWidth, 
  thunkSetVirusColor, 
  thunkSetVirusGloDistance, 
  thunkSetVirusGlow, 
  thunkSetVirusGlowColor, 
  thunkSetVirusGlowStrength, 
  thunkSetVirusMassType, 
  thunkSetVirusTransparency 
} from "redux/settings/theming/viruses/thunks";

import { VirusMassType } from "redux/settings/theming/viruses/types";
import { 
  VIRUS_BORDER_WIDTH_VALUES, 
  VIRUS_GLOW_DISTANCE_VALUES, 
  VIRUS_TRANSPARENCY_VALUES 
} from "redux/settings/theming/viruses/values";

import { AppStateType, ThunkRootDispatchType } from "redux/store";

import Colorpick from "components/menu/settings/basic/colorpick";
import Select from "components/menu/settings/basic/select";
import Switch from "components/menu/settings/basic/switch";

const Viruses: FC<VirusesType> = ({
  color,
  borderColor,
  borderWidth,
  glow,
  glowColor,
  glowDistance,
  glowStrength,
  transparency,
  massType,
  fillCircleColor,
  setVirusColor,
  setVirusBorderColor,
  setVirusBorderWidth,
  setVirusGlow,
  setVirusGlowColor,
  setVirusGlowDistance,
  setVirusGlowStrength,
  setVirusTransparency,
  setVirusMassType,
  setFillCircleColor,
}) => {
  return (
    <>
      <Colorpick 
        text="Color"
        color={color}
        onChange={setVirusColor}
        useAlpha={true}
      />
      <Colorpick 
        text="Border color"
        color={borderColor}
        onChange={setVirusBorderColor}
      />
      <Select 
        text="Border width"
        items={VIRUS_BORDER_WIDTH_VALUES}
        selectedItem={borderWidth}
        onChange={setVirusBorderWidth}
      />
      <Switch 
        text="Glow"
        enabled={glow}
        onChange={setVirusGlow}
      />
      <Colorpick 
        text="Glow color"
        color={glowColor}
        onChange={setVirusGlowColor}
        disabled={!glow}
      />
      <Select 
        text="Glow distance"
        items={VIRUS_GLOW_DISTANCE_VALUES}
        selectedItem={glowDistance}
        onChange={setVirusGlowDistance}
        disabled={!glow}
      />
      <Select 
        text="Glow strength"
        items={FOOD_GLOW_STRENGTH_VALUES}
        selectedItem={glowStrength}
        onChange={setVirusGlowStrength}
        disabled={!glow}
      />
      <Select 
        text="Transparency"
        items={VIRUS_TRANSPARENCY_VALUES}
        selectedItem={transparency}
        onChange={setVirusTransparency}
      />
      <Select 
        text="Mass type"
        items={['Disabled', 'Full mass', 'Shots amount', 'Fill circle'] as Array<VirusMassType>}
        selectedItem={massType}
        onChange={setVirusMassType}
      />
      <Colorpick 
        text="Fill circle color"
        color={fillCircleColor}
        onChange={setFillCircleColor}
        disabled={massType !== 'Fill circle'}
        useAlpha={true}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.viruses
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setVirusColor: (color: RGB) => dispatch(thunkSetVirusColor(color)),
  setVirusBorderColor: (color: RGB) => dispatch(thunkSetVirusBorderColor(color)),
  setVirusBorderWidth: (value: number) => dispatch(thunkSetVirusBorderWidth(value)),
  setVirusGlow: (value: boolean) => dispatch(thunkSetVirusGlow(value)),
  setVirusGlowColor: (color: RGB) => dispatch(thunkSetVirusGlowColor(color)),
  setVirusGlowDistance: (value: number) => dispatch(thunkSetVirusGloDistance(value)),
  setVirusGlowStrength: (value: number) => dispatch(thunkSetVirusGlowStrength(value)),
  setVirusTransparency: (value: number) => dispatch(thunkSetVirusTransparency(value)),
  setVirusMassType: (type: VirusMassType) => dispatch(thunkSetVirusMassType(type)),
  setFillCircleColor: (color: RGB) => dispatch(thunkSetFillCircleColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(Viruses);

type VirusesType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;