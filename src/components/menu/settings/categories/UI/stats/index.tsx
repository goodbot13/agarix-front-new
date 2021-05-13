import { FC } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RGB } from "redux/settings/theming/types";

import { 
  setStatsBackdropBlur, 
  setStatsBackgroundColor, 
  setStatsFpsShown, 
  setStatsFrametime, 
  setStatsLossShown, 
  setStatsPosition, 
  setStatsShown, 
  setStatsTabs
} from "redux/settings/UI/stats/actions";

import { AppStateType } from "redux/store";

import Switch from "components/menu/settings/basic/switch";
import Colorpick from "components/menu/settings/basic/colorpick";
import { STATS_BACKDROP_BLUR_HINT } from "redux/settings/UI/stats/hints";
import { TStatsPosition } from "redux/settings/UI/stats/types";
import Select from "components/menu/settings/basic/select";

const Stats: FC<StatsType> = ({
  shown,
  fps,
  loss,
  backgroundColor,
  backdropBlur,
  frametime,
  position,
  tabs,
  setShown,
  setFps,
  setLoss,
  setBackgroundColor,
  setBackdropBlur,
  setFrametime,
  setPosition,
  setTabs
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={shown}
        onChange={setShown}
        main
      />
      <Select 
        text="Position"
        items={['BOTTOM LEFT', 'BOTTOM CENTER', 'LEADERBOARD'] as Array<TStatsPosition>}
        selectedItem={position}
        onChange={setPosition}
        disabled={!shown}
      />
      <Colorpick 
        text="Background color"
        color={backgroundColor}
        onChange={setBackgroundColor}
        disabled={!shown}
        useAlpha
      />
      <Switch 
        text="Backdrop blur"
        hint={STATS_BACKDROP_BLUR_HINT}
        enabled={backdropBlur}
        onChange={setBackdropBlur}
        disabled={!shown}
      />
      <Switch 
        text="Show FPS"
        enabled={fps}
        onChange={setFps}
        disabled={!shown}
      />
      <Switch 
        text="Show frametime"
        enabled={frametime}
        onChange={setFrametime}
        disabled={!shown}
      />
      <Switch 
        text="Show LOSS"
        enabled={loss}
        onChange={setLoss}
        disabled={!shown}
      />
      <Switch 
        text="Show tabs status"
        enabled={tabs}
        onChange={setTabs}
        disabled={!shown}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.UI.stats
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setShown: (value: boolean) => dispatch(setStatsShown(value)),
  setFps: (value: boolean) => dispatch(setStatsFpsShown(value)),
  setLoss: (value: boolean) => dispatch(setStatsLossShown(value)),
  setBackgroundColor: (value: RGB) => dispatch(setStatsBackgroundColor(value)),
  setBackdropBlur: (value: boolean) => dispatch(setStatsBackdropBlur(value)),
  setFrametime: (value: boolean) => dispatch(setStatsFrametime(value)),
  setPosition: (value: TStatsPosition) => dispatch(setStatsPosition(value)),
  setTabs: (value: boolean) => dispatch(setStatsTabs(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

type StatsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;