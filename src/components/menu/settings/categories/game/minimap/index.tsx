import { FC } from 'react';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import {
  thunkSetGhostCells,
  thunkSetMass,
  thunkSetMinimapEnabled,
  thunkSetNicks,
  thunkSetViewport,
  thunkSetRealPlayersCells,
  thunkSetDrawPlayerPosition,
} from 'redux/settings/game/minimap/thunks';

import Switch from 'components/menu/settings/basic/switch';
import Select from 'components/menu/settings/basic/select';
import { ViewportType } from 'redux/settings/game/minimap/types';

const Minimap: FC<MinimapType> = ({
  enabled,
  viewport,
  ghostCells,
  realPlayersCells,
  mass,
  nicks,
  playerPosition,
  setEnabled,
  setViewport,
  setGhostCells,
  setRealPlayersCells,
  setMass,
  setNicks,
  setDrawPlayerPosition,
}) => {
  return (
    <>
      <Switch text="Enabled" enabled={enabled} onChange={setEnabled} main />
      <Select
        text="Show viewport"
        items={['Disabled', 'Main tab', 'Second tab', 'Top one tab', 'All'] as Array<ViewportType>}
        selectedItem={viewport}
        onChange={setViewport}
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
      <Switch text="Show mass" enabled={mass} onChange={setMass} disabled={!enabled} />
      <Switch text="Show nicks" enabled={nicks} onChange={setNicks} disabled={!enabled} />
      <Switch
        text="Show player position"
        enabled={playerPosition}
        onChange={setDrawPlayerPosition}
        disabled={!enabled}
      />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.minimap,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setEnabled: (value: boolean) => dispatch(thunkSetMinimapEnabled(value)),
  setViewport: (viewport: ViewportType) => dispatch(thunkSetViewport(viewport)),
  setGhostCells: (value: boolean) => dispatch(thunkSetGhostCells(value)),
  setRealPlayersCells: (value: boolean) => dispatch(thunkSetRealPlayersCells(value)),
  setMass: (value: boolean) => dispatch(thunkSetMass(value)),
  setNicks: (value: boolean) => dispatch(thunkSetNicks(value)),
  setDrawPlayerPosition: (value: boolean) => dispatch(thunkSetDrawPlayerPosition(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Minimap);

type MinimapType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
