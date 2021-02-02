import { FC } from "react";

import { connect } from "react-redux";

import { CellRemoveAnimationType, SpawnAnimationType } from "redux/settings/game/effects/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { 
  thunkSetCellRemoveAnimation, 
  thunkSetCellRemoveAnimationForHiddenSpectator, 
  thunkSetSpawnAnimation, 
  thunkSetWtfRgbMode 
} from "redux/settings/game/effects/thunks";

import { CELL_REMOVE_ANIMATION_HINT } from "redux/settings/game/effects/hints";

import Select from "components/menu/settings/basic/select";
import Switch from "components/menu/settings/basic/switch";


const Effects: FC<EffectsType> = ({
  cellRemoveAnimation,
  cellRemoveAnimationForHiddenSpectator,
  spawnAnimation,
  wtfRgbMode,
  setCellRemoveAnimation,
  setCellRemoveAnimationForHiddenSpectator,
  setSpawnAnimation,
  setWtfRgbMode
}) => {
  return (
    <>
      <Select
        text="Cell eat animation"
        items={['Disabled', 'Default', '2CL', 'Yue', 'Acimazis'] as Array<CellRemoveAnimationType>} 
        selectedItem={cellRemoveAnimation}
        onChange={setCellRemoveAnimation}
        hint={CELL_REMOVE_ANIMATION_HINT}
      />
      <Switch
        text="Cell eat animation for hidden spectator"
        enabled={cellRemoveAnimationForHiddenSpectator}
        onChange={setCellRemoveAnimationForHiddenSpectator}
        disabled={cellRemoveAnimation === 'Disabled'}
      />
      <Select
        text="Cell spawn animation"
        items={['Disabled', 'Default', '2CL', 'Yue', 'Acimazis'] as Array<SpawnAnimationType>} 
        selectedItem={spawnAnimation}
        onChange={setSpawnAnimation}
      />
      <Switch
        text="WTF RGB mode"
        enabled={wtfRgbMode}
        onChange={setWtfRgbMode}
      />
    </>
  )
}


const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.effects
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setCellRemoveAnimation: (type: CellRemoveAnimationType) => dispatch(thunkSetCellRemoveAnimation(type)),
  setCellRemoveAnimationForHiddenSpectator: (value: boolean) => dispatch(thunkSetCellRemoveAnimationForHiddenSpectator(value)),
  setSpawnAnimation: (type: SpawnAnimationType) => dispatch(thunkSetSpawnAnimation(type)),
  setWtfRgbMode: (value: boolean) => dispatch(thunkSetWtfRgbMode(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Effects);

type EffectsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;