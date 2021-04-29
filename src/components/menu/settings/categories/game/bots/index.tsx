import { FC } from 'react';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { thunkSetBotsEnabled, thunkSetBotsProvider } from 'redux/settings/game/bots/thunks';

import Switch from 'components/menu/settings/basic/switch';
import Select from 'components/menu/settings/basic/select';
import { BotsProviderType } from 'redux/settings/game/bots/types';

const Bots: FC<BotsType> = ({ enabled, provider, setEnabled, setBotsProvider }) => {
  return (
    <>
      <Switch text="Enabled" enabled={enabled} onChange={setEnabled} main />
      <Select
        text="Bot provider"
        items={['AGARBOT.OVH'] as Array<BotsProviderType>}
        selectedItem={provider}
        onChange={setBotsProvider}
        disabled={!enabled}
      />
      {/* <Switch
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
      /> */}
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.bots,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setEnabled: (value: boolean) => dispatch(thunkSetBotsEnabled(value)),
  setBotsProvider: (value: BotsProviderType) => dispatch(thunkSetBotsProvider(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bots);

type BotsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
