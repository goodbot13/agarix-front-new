import { FC } from "react";
import { connect } from "react-redux";

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

import { AppStateType, ThunkRootDispatchType } from "redux/store";

import Colorpick from "components/menu/settings/basic/colorpick";
import Select from "components/menu/settings/basic/select";
import Switch from "components/menu/settings/basic/switch";
import Range from "components/menu/settings/basic/range";

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
      <Range 
        text="Border width"
        from={5}
        to={25}
        value={borderWidth}
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
      <Range 
        text="Glow distance"
        from={20}
        to={150}
        value={glowDistance}
        onChange={setVirusGlowDistance}
        disabled={!glow}
      />
      <Range 
        text="Glow strength"
        from={2}
        to={22}
        value={glowStrength}
        onChange={setVirusGlowStrength}
        disabled={!glow}
      />
      <Range 
        text="Transparency"
        from={0.1}
        to={1}
        value={transparency}
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