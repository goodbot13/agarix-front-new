import { FC } from "react";

import { connect } from "react-redux";

import { RGB } from "redux/settings/theming/types";

import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { 
  thunkSetMinimapBackgroundColor, 
  thunkSetMinimapGhostCellsColor, 
  thunkSetMinimapMyViewportColor, 
  thunkSetMinimapPlayerColor, 
  thunkSetMinimapPlayerSize, 
  thunkSetMinimapSize, 
  thunkSetMinimapTopOneViewportColor 
} from "redux/settings/theming/minimap/thunks";

import Colorpick from "components/menu/settings/basic/colorpick";
import Range from "components/menu/settings/basic/range";

const Minimap: FC<MinimapType> = ({
  backgroundColor,
  size,
  myViewportColor,
  topOneViewportColor,
  playerSize,
  playerColor,
  ghostCellsColor,
  setMinimapBackgroundColor,
  setMinimapSize,
  setMinimapMyViewportColor,
  setMinimapTopOneViewportColor,
  setMinimapPlayerSize,
  setMinimapPlayerColor,
  setMinimapGhostCellsColor
}) => {
  return (
    <>
      <Colorpick
        text="Background color"
        color={backgroundColor}
        onChange={setMinimapBackgroundColor} 
        useAlpha={true}
      />
      <Range 
        text="Size (width and height)"
        from={100}
        to={400}
        value={size}
        onChange={setMinimapSize}
      />
      <Colorpick
        text="My viewport color"
        color={myViewportColor}
        onChange={setMinimapMyViewportColor} 
        useAlpha={true}
      />
      <Colorpick
        text="Top one viewport color"
        color={topOneViewportColor}
        onChange={setMinimapTopOneViewportColor} 
        useAlpha={true}
      />
      <Range 
        text="Player size"
        from={4}
        to={16}
        value={playerSize}
        onChange={setMinimapPlayerSize}
      />
      <Colorpick
        text="Player color"
        color={playerColor}
        onChange={setMinimapPlayerColor} 
      />
      <Colorpick
        text="Ghost cells color"
        color={ghostCellsColor}
        onChange={setMinimapGhostCellsColor} 
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.minimap
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setMinimapBackgroundColor: (color: RGB) => dispatch(thunkSetMinimapBackgroundColor(color)),
  setMinimapSize: (value: number) => dispatch(thunkSetMinimapSize(value)),
  setMinimapMyViewportColor: (color: RGB) => dispatch(thunkSetMinimapMyViewportColor(color)),
  setMinimapTopOneViewportColor: (color: RGB) => dispatch(thunkSetMinimapTopOneViewportColor(color)),
  setMinimapPlayerSize: (value: number) => dispatch(thunkSetMinimapPlayerSize(value)),
  setMinimapPlayerColor: (color: RGB) => dispatch(thunkSetMinimapPlayerColor(color)),
  setMinimapGhostCellsColor: (color: RGB) => dispatch(thunkSetMinimapGhostCellsColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(Minimap);

type MinimapType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;