import { FC } from "react";

import { connect } from "react-redux";

import { AUTO_HIDE_MASS_AND_NICKS_HINT, RANGE_ZERO_HINT, SOAK_TO_EATEN_HINT } from "redux/settings/game/cells/hints";

import { RingsType, ShadowType, SkinsType } from "redux/settings/game/cells/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { 
  thunkSetAutoHideMassAndNicks, 
  thunkSetFadeSpeed, 
  thunkSetMassUpdateDelay, 
  thunkSetOneColored, 
  thunkSetRingsSpinning, 
  thunkSetRingsType, 
  thunkSetShadow, 
  thunkSetShortMass, 
  thunkSetShowMass, 
  thunkSetShowMassMyCell, 
  thunkSetShowNickMyCell, 
  thunkSetShowNicks, 
  thunkSetSkinsType, 
  thunkSetSoakSpeed, 
  thunkSetSoakToEaten
} from "redux/settings/game/cells/thunks";

import Switch from "components/menu/settings/basic/switch";

import Select from "components/menu/settings/basic/select";
import Range from "components/menu/settings/basic/range";

const Cells: FC<CellsType> = ({
  mass,
  myMass,
  nicks,
  myNick,
  autoHideMassAndNicks,
  shortMass,
  massUpdateDelay,
  skinsType,
  ringsType,
  ringsSpinning,
  soakSpeed,
  fadeSpeed,
  oneColored,
  shadow,
  soakToEaten,
  setShowMass,
  setShowNicks,
  setShowMassMyCell,
  setShowNickMyCell,
  setAutoHideMassAndNicks,
  setShortMass,
  setMassUpdateDelay,
  setSkinsType,
  setRingsType,
  setRingsSpinning,
  setSoakSpeed,
  setFadeSpeed,
  setOneColored,
  setShadow,
  setSoakToEaten
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
        text="Show nick my cell" 
        enabled={myNick} 
        onChange={setShowNickMyCell}
      />
      <Switch 
        text="Auto-hide mass and nicks" 
        hint={AUTO_HIDE_MASS_AND_NICKS_HINT}
        enabled={autoHideMassAndNicks} 
        onChange={setAutoHideMassAndNicks}
      />
      <Switch 
        text="Short mass (k)" 
        enabled={shortMass} 
        onChange={setShortMass}
      />
      <Range 
        text="Mass update (refresh) delay"
        from={1}
        to={30}
        value={massUpdateDelay}
        onChange={setMassUpdateDelay}
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
        disabled={ringsType === 'Disabled'}
      />
      <Switch 
        text="Animate (move) eaten cell to the center of eater (HSLO style)"
        hint={SOAK_TO_EATEN_HINT}
        enabled={soakToEaten} 
        onChange={setSoakToEaten}
      />
      <Range 
        text="Soak animation speed"
        hint={RANGE_ZERO_HINT}
        from={0}
        to={215}
        value={soakSpeed}
        onChange={setSoakSpeed}
      />
      <Range 
        text="Fade animation speed"
        hint={RANGE_ZERO_HINT}
        from={0}
        to={215}
        value={fadeSpeed}
        onChange={setFadeSpeed}
      />
      <Switch 
        text="One-colored" 
        enabled={oneColored} 
        onChange={setOneColored}
      />
      <Select 
        text="Shadow"
        items={['Disabled', 'Only me', 'All'] as Array<ShadowType>}
        selectedItem={shadow}
        onChange={setShadow}
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
  setShortMass: (value: boolean) => dispatch(thunkSetShortMass(value)),
  setMassUpdateDelay: (value: number) => dispatch(thunkSetMassUpdateDelay(value)),
  setSkinsType: (type: SkinsType) => dispatch(thunkSetSkinsType(type)),
  setRingsType: (type: RingsType) => dispatch(thunkSetRingsType(type)),
  setRingsSpinning: (value: boolean) => dispatch(thunkSetRingsSpinning(value)),
  setSoakSpeed: (type: number) => dispatch(thunkSetSoakSpeed(type)),
  setFadeSpeed: (type: number) => dispatch(thunkSetFadeSpeed(type)),
  setOneColored: (value: boolean) => dispatch(thunkSetOneColored(value)),
  setShadow: (shadow: ShadowType) => dispatch(thunkSetShadow(shadow)),
  setSoakToEaten: (value: boolean) => dispatch(thunkSetSoakToEaten(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cells);

type CellsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;