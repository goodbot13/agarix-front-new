import { FC } from "react";

import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { 
  thunkSetGhostCells, 
  thunkSetMass, 
  thunkSetMinimapEnabled, 
  thunkSetNicks, 
  thunkSetPlayerViewport, 
  thunkSetRealPlayersCells, 
  thunkSetTopOneViewport 
} from "redux/settings/game/minimap/thunks";

import Switch from "components/menu/settings/basic/switch";
import { connect } from "react-redux";

const Minimap: FC<MinimapType> = ({
  enabled,
  playerViewport,
  topOneViewport,
  ghostCells,
  realPlayersCells,
  mass,
  nicks,
  setEnabled,
  setPlayerViewport,
  setTopOneViewport,
  setGhostCells,
  setRealPlayersCells,
  setMass,
  setNicks
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={enabled}
        onChange={setEnabled}
        main
      />
      <Switch 
        text="Show player viewport"
        enabled={playerViewport}
        onChange={setPlayerViewport}
        disabled={!enabled}
      />
      <Switch 
        text="Show top one viewport"
        enabled={topOneViewport}
        onChange={setTopOneViewport}
        disabled={!enabled}
      />
      <Switch 
        text="Show ghost cells"
        enabled={ghostCells}
        onChange={setGhostCells}
        disabled={!enabled}
      />
      <Switch 
        text="Show real players cells"
        enabled={realPlayersCells}
        onChange={setRealPlayersCells}
        disabled={!enabled}
      />
      <Switch 
        text="Show mass"
        enabled={mass}
        onChange={setMass}
        disabled={!enabled}
      />
      <Switch 
        text="Show nicks"
        enabled={nicks}
        onChange={setNicks}
        disabled={!enabled}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.minimap
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setEnabled: (value: boolean) => dispatch(thunkSetMinimapEnabled(value)),
  setPlayerViewport: (value: boolean) => dispatch(thunkSetPlayerViewport(value)),
  setTopOneViewport: (value: boolean) => dispatch(thunkSetTopOneViewport(value)),
  setGhostCells: (value: boolean) => dispatch(thunkSetGhostCells(value)),
  setRealPlayersCells: (value: boolean) => dispatch(thunkSetRealPlayersCells(value)),
  setMass: (value: boolean) => dispatch(thunkSetMass(value)),
  setNicks: (value: boolean) => dispatch(thunkSetNicks(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Minimap);

type MinimapType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;