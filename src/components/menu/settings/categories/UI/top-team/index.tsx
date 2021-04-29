import { FC } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RGB } from 'redux/settings/theming/types';
import { AppStateType } from 'redux/store';

import {
  setTopTeamBackdropBlur,
  setTopTeamBackgroundColor,
  setTopTeamDisplayAmount,
  setTopTeamDisplayPlayerMass,
  setTopTeamDisplayTotalMass,
  setTopTeamShortMass,
  setTopTeamShown,
  setTopTeamTotalPlayers,
} from 'redux/settings/UI/top-team/actions';
import Switch from 'components/menu/settings/basic/switch';
import Select from 'components/menu/settings/basic/select';
import { TOP_TEAM_DISPLAY_AMOUNT_VALUES } from 'redux/settings/UI/top-team/values';
import Colorpick from 'components/menu/settings/basic/colorpick';

const TopTeam: FC<TopTeamType> = ({
  shown,
  displayAmount,
  displayPlayerMass,
  totalMass,
  shortMass,
  totalPlayers,
  backgroundColor,
  backdropBlur,
  setShown,
  setDisplayAmount,
  setDisplayPlayerMass,
  setDisplayTotalMass,
  setShortMass,
  setTotalPlayers,
  setBackgroundColor,
  setBackdropBlur,
}) => {
  return (
    <>
      <Switch text="Enabled" enabled={shown} onChange={setShown} main />
      <Colorpick
        text="Background color"
        color={backgroundColor}
        onChange={setBackgroundColor}
        useAlpha
      />
      <Switch
        text="Backdrop blur"
        enabled={backdropBlur}
        onChange={setBackdropBlur}
        disabled={!shown}
      />
      <Select
        text="Players amount to display"
        selectedItem={displayAmount}
        items={TOP_TEAM_DISPLAY_AMOUNT_VALUES}
        onChange={setDisplayAmount}
        disabled={!shown}
      />
      <Switch
        text="Show players mass"
        enabled={displayPlayerMass}
        onChange={setDisplayPlayerMass}
        disabled={!shown}
      />
      <Switch
        text="Show total mass"
        enabled={totalMass}
        onChange={setDisplayTotalMass}
        disabled={!shown}
      />
      <Switch text="Short mass (k)" enabled={shortMass} onChange={setShortMass} disabled={!shown} />
      <Switch
        text="Show total players"
        enabled={totalPlayers}
        onChange={setTotalPlayers}
        disabled={!shown}
      />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.UI.topTeam,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setShown: (value: boolean) => dispatch(setTopTeamShown(value)),
  setDisplayAmount: (value: number) => dispatch(setTopTeamDisplayAmount(value)),
  setDisplayPlayerMass: (value: boolean) => dispatch(setTopTeamDisplayPlayerMass(value)),
  setDisplayTotalMass: (value: boolean) => dispatch(setTopTeamDisplayTotalMass(value)),
  setShortMass: (value: boolean) => dispatch(setTopTeamShortMass(value)),
  setTotalPlayers: (value: boolean) => dispatch(setTopTeamTotalPlayers(value)),
  setBackgroundColor: (value: RGB) => dispatch(setTopTeamBackgroundColor(value)),
  setBackdropBlur: (value: boolean) => dispatch(setTopTeamBackdropBlur(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTeam);

type TopTeamType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
