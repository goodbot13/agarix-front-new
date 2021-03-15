import { FC } from "react";
import { 
  setLeaderboardBackdropBlur, 
  setLeaderboardBackgroundColor, 
  setLeaderboardDisplayAmount, 
  setLeaderboardDisplayPosition, 
  setLeaderboardMeColor, 
  setLeaderboardShowMass, 
  setLeaderboardShown 
} from "redux/settings/UI/leaderboard/actions";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "redux/store";

import { RGB } from "redux/settings/theming/types";

import Switch from "components/menu/settings/basic/switch";
import Select from "components/menu/settings/basic/select";
import Colorpick from "components/menu/settings/basic/colorpick";

import { LEADERBOARD_DISPLAY_AMOUNT_VALUES } from "redux/settings/UI/leaderboard/values";
import { LEADERBOARD_BACKDROP_BLUR_HINT } from "redux/settings/UI/leaderboard/hints";

const Leaderboard: FC<LeaderboardType> = ({
  shown,
  displayAmount,
  displayPosition,
  showMass,
  backdropBlur,
  backgroundColor,
  meColor,
  setLbShown,
  setLbDisplayAmount,
  setLbDisplayPosition,
  setLbShowMass,
  setLbBackdropBlur,
  setLbBackgroundColor,
  setLbMeColor
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={shown}
        onChange={setLbShown}
        main
      />
      <Colorpick
        text="Background color"
        color={backgroundColor} 
        onChange={setLbBackgroundColor}
        disabled={!shown}
        useAlpha
      />
      <Switch 
        text="Backdrop blur"
        enabled={backdropBlur}
        onChange={setLbBackdropBlur}
        hint={LEADERBOARD_BACKDROP_BLUR_HINT}
        disabled={!shown}
      />
      <Colorpick
        text="My color"
        color={meColor} 
        onChange={setLbMeColor}
        disabled={!shown}
      />
      <Select
        text="Players amount"
        items={LEADERBOARD_DISPLAY_AMOUNT_VALUES}
        selectedItem={displayAmount} 
        onChange={setLbDisplayAmount}
        disabled={!shown}
      />
      <Switch 
        text="Players position"
        enabled={displayPosition}
        onChange={setLbDisplayPosition}
        disabled={!shown}
      />
      <Switch 
        text="Show mass"
        enabled={showMass}
        onChange={setLbShowMass}
        disabled={!shown}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.UI.leaderboard
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLbShown: (value: boolean) => dispatch(setLeaderboardShown(value)),
  setLbDisplayAmount: (value: number) => dispatch(setLeaderboardDisplayAmount(value)),
  setLbDisplayPosition: (value: boolean) => dispatch(setLeaderboardDisplayPosition(value)),
  setLbShowMass: (value: boolean) => dispatch(setLeaderboardShowMass(value)),
  setLbBackdropBlur: (value: boolean) => dispatch(setLeaderboardBackdropBlur(value)),
  setLbBackgroundColor: (value: RGB) => dispatch(setLeaderboardBackgroundColor(value)),
  setLbMeColor: (value: RGB) => dispatch(setLeaderboardMeColor(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

type LeaderboardType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;