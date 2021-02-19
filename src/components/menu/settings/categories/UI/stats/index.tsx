import { FC } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RGB } from "redux/settings/theming/types";

import { 
  setStatsBackdropBlur, 
  setStatsBackgroundColor, 
  setStatsFpsShown, 
  setStatsLossShown, 
  setStatsScale, 
  setStatsShown 
} from "redux/settings/UI/stats/actions";

import { AppStateType } from "redux/store";

import Select from "components/menu/settings/basic/select";
import Switch from "components/menu/settings/basic/switch";
import { STATS_SCALE_VALUES } from "redux/settings/UI/stats/values";
import Colorpick from "components/menu/settings/basic/colorpick";
import { STATS_BACKDROP_BLUR_HINT } from "redux/settings/UI/stats/hints";

const Stats: FC<StatsType> = ({
  shown,
  fps,
  loss,
  backgroundColor,
  backdropBlur,
  scale,
  setShown,
  setFps,
  setLoss,
  setBackgroundColor,
  setBackdropBlur,
  setScale
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={shown}
        onChange={setShown}
        main
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
      <Select 
        text="Scale"
        items={STATS_SCALE_VALUES}
        selectedItem={scale}
        onChange={setScale}
        disabled={!shown}
      />
      <Switch 
        text="Show FPS"
        enabled={fps}
        onChange={setFps}
        disabled={!shown}
      />
      <Switch 
        text="Show LOSS"
        enabled={loss}
        onChange={setLoss}
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
  setScale: (value: number) => dispatch(setStatsScale(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

type StatsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;