import { FC } from "react";

import { connect } from "react-redux";
import { MapBorderType, MapLiveEffectStrengthType } from "redux/settings/theming/map/types";
import { RGB } from "redux/settings/theming/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { 
  thunkSetMapBackgroundImage, 
  thunkSetMapBackgroundImageliveEffectStrength, 
  thunkSetMapBackgroundImageUrl, 
  thunkSetMapBackgroundTint, 
  thunkSetMapBorderColor, 
  thunkSetMapBorderGlow, 
  thunkSetMapBorderGlowColor, 
  thunkSetMapBorderGlowDistance, 
  thunkSetMapBorderRoundness, 
  thunkSetMapBordersGlowStrength, 
  thunkSetMapBorderType, 
  thunkSetMapBorderWidth, 
  thunkSetMapGlobalBackgroundImage, 
  thunkSetMapGlobalBackgroundImageLiveEffectStrength,
  thunkSetMapGlobalBackgroundImageTint, 
  thunkSetMapGlobalBackgroundImageUrl 
} from "redux/settings/theming/map/thunks";

import Select from "components/menu/settings/basic/select";
import Colorpick from "components/menu/settings/basic/colorpick";
import Switch from "components/menu/settings/basic/switch";
import Input from "components/menu/settings/basic/input";
import Range from "components/menu/settings/basic/range";
import { RANGE_ZERO_HINT } from "redux/settings/game/cells/hints";

const MapComponent: FC<MapComponentType> = ({
  borderType,
  borderRoundness,
  borderWidth,
  borderColor,
  borderGlow,
  borderGlowColor,
  borderGlowDistance,
  borderGlowStrength,
  backgroundTint,
  backgroundImage,
  backgroundImageUrl,
  backgroundImageLiveEffectStrength,
  globalBackgroundImage,
  globalBackgroundImageUrl,
  globalBackgroundImageTint,
  globalBackgroundImageLiveEffectStrength,
  setMapBorderType,
  setMapBorderRoundness,
  setMapBorderWidth,
  setMapBorderColor,
  setMapBorderGlow,
  setMapBorderGlowColor,
  setMapBorderGlowDistance,
  setMapBorderGlowStrength,
  setMapBackgroundTint,
  setMapBackgroundImage,
  setMapBackgroundImageUrl,
  setMapBackgroundImageLiveEffectStrength,
  setMapGlobalBackgroundImage,
  setMapGlobalBackgroundImageUrl,
  setMapGlobalBackgroundImageTint,
  setMapGlobalBackgroundImageLiveEffectStrength
}) => {
  return (
    <>
      <Select 
        text="Border type"
        selectedItem={borderType}
        items={['Disabled', 'Common', 'Common (anim)', 'RGB', 'RGB (anim)'] as Array<MapBorderType>}
        onChange={setMapBorderType}
      />
      <Range
        text="Border roundness"
        hint={RANGE_ZERO_HINT}
        from={0}
        to={140}
        value={borderRoundness}
        onChange={setMapBorderRoundness}
      />
      <Range
        text="Border width"
        from={5}
        to={100}
        value={borderWidth}
        onChange={setMapBorderWidth}
      />
      <Colorpick
        text="Border color"
        color={borderColor}
        onChange={setMapBorderColor} 
      />
      <Switch
        text="Border glow"
        enabled={borderGlow}
        onChange={setMapBorderGlow} 
      />
      <Colorpick
        text="Border glow color"
        color={borderGlowColor}
        onChange={setMapBorderGlowColor} 
        disabled={!borderGlow}
      />
      <Range
        text="Border glow distance"
        from={10}
        to={350}
        value={borderGlowDistance}
        onChange={setMapBorderGlowDistance}
        disabled={!borderGlow}
      />
      <Range
        text="Border glow strength"
        from={1}
        to={30}
        value={borderGlowStrength}
        onChange={setMapBorderGlowStrength}
        disabled={!borderGlow}
      />
      <Colorpick
        text="Background tint"
        color={backgroundTint}
        onChange={setMapBackgroundTint} 
      />
      <Switch
        text="Background image"
        enabled={backgroundImage}
        onChange={setMapBackgroundImage} 
      />
      <Input
        text="Background image URL"
        value={backgroundImageUrl}
        onChange={setMapBackgroundImageUrl} 
        disabled={!backgroundImage}
      />
      <Select
        text="Background image live effect strength"
        selectedItem={backgroundImageLiveEffectStrength}
        items={['Disabled', '1', '2', '3', '4', '5'] as Array<MapLiveEffectStrengthType>}
        onChange={setMapBackgroundImageLiveEffectStrength}
        disabled={!backgroundImage}
      />
      <Switch
        text="Global background image"
        enabled={globalBackgroundImage}
        onChange={setMapGlobalBackgroundImage} 
      />
      <Input
        text="Global background image URL"
        value={globalBackgroundImageUrl}
        onChange={setMapGlobalBackgroundImageUrl} 
        disabled={!globalBackgroundImage}
      />
      <Colorpick
        text="Global background image tint"
        color={globalBackgroundImageTint}
        onChange={setMapGlobalBackgroundImageTint} 
        disabled={!globalBackgroundImage}
      />
      <Select
        text="Global background image live effect strength"
        selectedItem={globalBackgroundImageLiveEffectStrength}
        items={['Disabled', '1', '2', '3', '4', '5'] as Array<MapLiveEffectStrengthType>}
        onChange={setMapGlobalBackgroundImageLiveEffectStrength}
        disabled={!globalBackgroundImage}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.map
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setMapBorderType: (type: MapBorderType) => dispatch(thunkSetMapBorderType(type)), 
  setMapBorderRoundness: (value: number) => dispatch(thunkSetMapBorderRoundness(value)),
  setMapBorderWidth: (value: number) => dispatch(thunkSetMapBorderWidth(value)),
  setMapBorderColor: (color: RGB) => dispatch(thunkSetMapBorderColor(color)),
  setMapBorderGlow: (value: boolean) => dispatch(thunkSetMapBorderGlow(value)),
  setMapBorderGlowColor: (color: RGB) => dispatch(thunkSetMapBorderGlowColor(color)),
  setMapBorderGlowDistance: (value: number) => dispatch(thunkSetMapBorderGlowDistance(value)),
  setMapBorderGlowStrength: (value: number) => dispatch(thunkSetMapBordersGlowStrength(value)),
  setMapBackgroundTint: (color: RGB) => dispatch(thunkSetMapBackgroundTint(color)),
  setMapBackgroundImage: (value: boolean) => dispatch(thunkSetMapBackgroundImage(value)),
  setMapBackgroundImageUrl: (value: string) => dispatch(thunkSetMapBackgroundImageUrl(value)),
  setMapBackgroundImageLiveEffectStrength: (value: MapLiveEffectStrengthType) => dispatch(thunkSetMapBackgroundImageliveEffectStrength(value)),
  setMapGlobalBackgroundImage: (value: boolean) => dispatch(thunkSetMapGlobalBackgroundImage(value)),
  setMapGlobalBackgroundImageUrl: (value: string) => dispatch(thunkSetMapGlobalBackgroundImageUrl(value)),
  setMapGlobalBackgroundImageTint: (color: RGB) => dispatch(thunkSetMapGlobalBackgroundImageTint(color)),
  setMapGlobalBackgroundImageLiveEffectStrength: (value: MapLiveEffectStrengthType) => dispatch(thunkSetMapGlobalBackgroundImageLiveEffectStrength(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);

type MapComponentType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;