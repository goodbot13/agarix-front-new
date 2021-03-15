import { FC } from "react";

import { FpsLockType, GlowFilterShaderType, RenderModeType } from "redux/settings/game/performance/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import { connect } from "react-redux";

import Switch from "components/menu/settings/basic/switch";
import { ANTIALIASING_HINT, CULLING_HINT, FOOD_PERFORMANCE_MODE_HINT, RENDER_MODE_HINT } from "redux/settings/game/performance/hints";
import Select from "components/menu/settings/basic/select";
import { 
  thunkSetAntialiasing, 
  thunkSetCulling, 
  thunkSetFoodPerformanceMode, 
  thunkSetFpsLockType, 
  thunkSetGlowFilterShaderType, 
  thunkSetRenderMode 
} from "redux/settings/game/performance/thunks";

const Performance: FC<PerformanceType> = ({
  renderMode,
  antialiasing,
  culling,
  foodPerformanceMode,
  glowFilterShaderType,
  fpsLockType,
  setRenderMode,
  setAntialiasing,
  setCulling,
  setFoodPerformanceMode,
  setGlowFilterShaderType,
  setFpsLockType
}) => {
  return (
    <>
      <Select 
        text='Render mode' 
        hint={RENDER_MODE_HINT}
        items={['Default (CPU)', 'GPU (Pixi)'] as Array<RenderModeType>} 
        selectedItem={renderMode} 
        onChange={setRenderMode}
        disabled
      />
      <Switch 
        text='Antialiasing' 
        hint={ANTIALIASING_HINT} 
        enabled={antialiasing} 
        onChange={setAntialiasing}
        disabled={renderMode === 'Default (CPU)'}
      />
      <Switch 
        text='Culling' 
        hint={CULLING_HINT} 
        enabled={culling} 
        onChange={setCulling}
        disabled={renderMode === 'Default (CPU)'}
      />
      <Switch 
        text='Food performance mode' 
        hint={FOOD_PERFORMANCE_MODE_HINT} 
        enabled={foodPerformanceMode} 
        onChange={setFoodPerformanceMode}
        disabled={renderMode === 'Default (CPU)'}
      />
      <Select 
        text='Glow filer shader'
        items={['Canvas', 'GPU-1'/* , 'GPU-2' */] as Array<GlowFilterShaderType>}
        selectedItem={glowFilterShaderType}
        onChange={setGlowFilterShaderType}
        disabled={renderMode === 'Default (CPU)'}
      />
      <Select
        text='FPS lock'
        items={['30', '60', '120', '144', '240', 'Screen-hz'] as Array<FpsLockType>}
        selectedItem={fpsLockType}
        onChange={setFpsLockType}
        disabled={renderMode === 'Default (CPU)'}
      />
    </>
  )
}

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.game.performance
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setRenderMode: (type: RenderModeType) => dispatch(thunkSetRenderMode(type)),
  setAntialiasing: (value: boolean) => dispatch(thunkSetAntialiasing(value)),
  setCulling: (value: boolean) => dispatch(thunkSetCulling(value)),
  setFoodPerformanceMode: (value: boolean) => dispatch(thunkSetFoodPerformanceMode(value)),
  setGlowFilterShaderType: (type: GlowFilterShaderType) => dispatch(thunkSetGlowFilterShaderType(type)),
  setFpsLockType: (type: FpsLockType) => dispatch(thunkSetFpsLockType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Performance);

type PerformanceType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;