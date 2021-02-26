import Colorpick from "components/menu/settings/basic/colorpick";
import Switch from "components/menu/settings/basic/switch";
import { FC } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { RGB } from "redux/settings/theming/types";
import { setSpectateBackdropBlur, setSpectateBackgroundColor, setSpectateShown } from "redux/settings/UI/spectate/actions";

import { AppStateType } from "redux/store";

const Stats: FC<TSpectate> = ({
  shown,
  backgroundColor,
  backdropBlur,
  setSpectateShown,
  setSpectateBackgroundColor,
  setSpectateBackdropBlur
}) => {
  return (
    <>
      <Switch 
        text="Enabled"
        enabled={shown}
        onChange={setSpectateShown}
        main
      />
      <Switch 
        text="Backgrop blur"
        enabled={backdropBlur}
        onChange={setSpectateBackdropBlur}
        disabled={!shown} 
      />
      <Colorpick
        text="Background color"
        color={backgroundColor}
        onChange={setSpectateBackgroundColor}
        disabled={!shown} 
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.UI.spectate
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSpectateShown: (value: boolean) => dispatch(setSpectateShown(value)),
  setSpectateBackgroundColor: (color: RGB) => dispatch(setSpectateBackgroundColor(color)),
  setSpectateBackdropBlur: (value: boolean) => dispatch(setSpectateBackdropBlur(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

type TSpectate = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;