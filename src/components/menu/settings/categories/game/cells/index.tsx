import { FC } from "react";

import { connect } from "react-redux";
import { FadeSpeedType, RingsType, SkinsType, SoakSpeedType } from "redux/settings/game/cells/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { 
  thunkSetAutoHideMassAndNicks, 
  thunkSetFadeSpeed, 
  thunkSetRingsSpinning, 
  thunkSetRingsType, 
  thunkSetShowMass, 
  thunkSetShowMassMyCell, 
  thunkSetShowNickMyCell, 
  thunkSetShowNicks, 
  thunkSetSkinsType, 
  thunkSetSoakSpeed 
} from "redux/settings/game/cells/thunks";

import Switch from "components/menu/settings/basic/switch";

import { AUTO_HIDE_MASS_AND_NICKS_HINT } from "redux/settings/game/cells/hints";

import Select from "components/menu/settings/basic/select";

const Cells: FC<CellsType> = ({
  mass,
  myMass,
  nicks,
  myNick,
  autoHideMassAndNicks,
  skinsType,
  ringsType,
  ringsSpinning,
  soakSpeed,
  fadeSpeed,
  setShowMass,
  setShowNicks,
  setShowMassMyCell,
  setShowNickMyCell,
  setAutoHideMassAndNicks,
  setSkinsType,
  setRingsType,
  setRingsSpinning,
  setSoakSpeed,
  setFadeSpeed
}) => {
  return (
    <>
      <Switch 
        text="Show mass" 
        enabled={mass} 
        onChange={setShowMass}
      />
      <Switch 
        text="Show mass my cell" 
        enabled={myMass} 
        onChange={setShowMassMyCell}
      />
      <Switch 
        text="Show nicks" 
        enabled={nicks} 
        onChange={setShowNicks}
      />
      <Switch 
        text="Show nicks my cell" 
        enabled={myNick} 
        onChange={setShowNickMyCell}
      />
      <Switch 
        text="Auto hide mass and nicks" 
        hint={AUTO_HIDE_MASS_AND_NICKS_HINT}
        enabled={autoHideMassAndNicks} 
        onChange={setAutoHideMassAndNicks}
      />
      <Select 
        text="Skins"
        items={['Disabled', 'Custom', 'Vanilla', 'All'] as Array<SkinsType>}
        selectedItem={skinsType}
        onChange={setSkinsType}
      />
      <Select 
        text="Rings"
        items={['Disabled', '2CL', 'Yue', 'Acimazis'] as Array<RingsType>}
        selectedItem={ringsType}
        onChange={setRingsType}
      />
      <Switch 
        text="Spinning rings"
        enabled={ringsSpinning} 
        onChange={setRingsSpinning}
      />
      <Select 
        text="Soak animation speed"
        items={['Disabled', '1', '2', '3', '4', '5'] as Array<SoakSpeedType>}
        selectedItem={soakSpeed}
        onChange={setSoakSpeed}
      />
      <Select 
        text="Fade in/out speed"
        items={['Disabled', '1', '2', '3', '4', '5'] as Array<FadeSpeedType>}
        selectedItem={fadeSpeed}
        onChange={setFadeSpeed}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.cells
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setShowMass: (value: boolean) => dispatch(thunkSetShowMass(value)),
  setShowMassMyCell: (value: boolean) => dispatch(thunkSetShowMassMyCell(value)),
  setShowNicks: (value: boolean) => dispatch(thunkSetShowNicks(value)),
  setShowNickMyCell: (value: boolean) => dispatch(thunkSetShowNickMyCell(value)),
  setAutoHideMassAndNicks: (value: boolean) => dispatch(thunkSetAutoHideMassAndNicks(value)),
  setSkinsType: (type: SkinsType) => dispatch(thunkSetSkinsType(type)),
  setRingsType: (type: RingsType) => dispatch(thunkSetRingsType(type)),
  setRingsSpinning: (value: boolean) => dispatch(thunkSetRingsSpinning(value)),
  setSoakSpeed: (type: SoakSpeedType) => dispatch(thunkSetSoakSpeed(type)),
  setFadeSpeed: (type: FadeSpeedType) => dispatch(thunkSetFadeSpeed(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cells);

type CellsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;