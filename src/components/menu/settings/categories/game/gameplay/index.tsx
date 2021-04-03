import { FC } from "react";

import Select from "components/menu/settings/basic/select";

import { connect } from "react-redux";
import { thunkSetAnimationSpeed, thunkSetCameraSpeed, thunkSetCameraStyle, thunkSetSpectatorMode, thunkSetViewport, thunkSetZoomSpeed } from "redux/settings/game/gameplay/thunks";
import { CameraStyleType, SpectatorModeType, ViewportType } from "redux/settings/game/gameplay/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { SPECTATOR_MODE_HINT } from "redux/settings/game/gameplay/hints";
import Range from "components/menu/settings/basic/range";

const Gameplay: FC<GameplayType> = ({
  animationSpeed,
  zoomSpeed,
  cameraSpeed,
  cameraStyle,
  spectatorMode,
  viewport,
  setAnimationSpeed,
  setZoomSpeed,
  setCameraSpeed,
  setCameraStyle,
  setSpectatorMode,
  setViewport
}) => {
  return (
    <>
      <Range
        text="Animation speed"
        value={animationSpeed} 
        from={25}
        to={300}
        onChange={setAnimationSpeed}
      />
      <Range
        text="Animation speed"
        value={zoomSpeed} 
        from={1}
        to={25}
        onChange={setZoomSpeed}
      />
      <Range 
        text="Camera speed"
        from={1}
        to={25}
        value={cameraSpeed}
        onChange={setCameraSpeed}
      />
      <Select 
        text="Camera style"
        items={['Default', 'Smooth'] as Array<CameraStyleType>}
        selectedItem={cameraStyle}
        onChange={setCameraStyle}
      />
      <Select 
        text="Spectator mode"
        items={['Disabled', 'Top one', 'Full map'] as Array<SpectatorModeType>}
        selectedItem={spectatorMode}
        onChange={setSpectatorMode}
        hint={SPECTATOR_MODE_HINT}
      />
      <Select 
        text="Show viewport"
        items={['Disabled', 'Main tab', 'Second tab', 'Top one tab', 'All'] as Array<ViewportType>}
        selectedItem={viewport}
        onChange={setViewport}
        disabled
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.gameplay
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setAnimationSpeed: (value: number) => dispatch(thunkSetAnimationSpeed(value)),
  setZoomSpeed: (value: number) => dispatch(thunkSetZoomSpeed(value)),
  setCameraSpeed: (value: number) => dispatch(thunkSetCameraSpeed(value)),
  setCameraStyle: (type: CameraStyleType) => dispatch(thunkSetCameraStyle(type)),
  setSpectatorMode: (type: SpectatorModeType) => dispatch(thunkSetSpectatorMode(type)),
  setViewport: (type: ViewportType) => dispatch(thunkSetViewport(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameplay);

type GameplayType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;