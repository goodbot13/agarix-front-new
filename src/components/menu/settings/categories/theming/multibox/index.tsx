import { FC } from 'react';

import { connect } from 'react-redux';

import { RGB } from 'redux/settings/theming/types';

import { MultiboxRingStyleType } from 'redux/settings/theming/multibox/types';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import {
  thunkSetMultiboxFocusedRingColor,
  thunkSetMultiboxFocusedStaticCellColor,
  thunkSetMultiboxInitialRingColor,
  thunkSetMultiboxInitialStaticCellColor,
  thunkSetMultiboxLinedRingSize,
  thunkSetMultiboxRingStyle,
} from 'redux/settings/theming/multibox/thunks';

import Select from 'components/menu/settings/basic/select';
import Colorpick from 'components/menu/settings/basic/colorpick';
import Range from 'components/menu/settings/basic/range';

const Multibox: FC<MultiboxType> = ({
  ringStyle,
  linedRingSize,
  initialRingColor,
  focusedRingColor,
  initialStaticCellColor,
  focusedStaticCellColor,
  setMultiboxRingStyle,
  setMultiboxLinderRingSize,
  setMultiboxInitialRingColor,
  setMultiboxFocusedRingColor,
  setMultiboxInitialStaticCellColor,
  setMultiboxFocusedStaticCellColor,
}) => {
  return (
    <>
      <Select
        text="Ring style"
        items={['Author', 'Line'] as Array<MultiboxRingStyleType>}
        selectedItem={ringStyle}
        onChange={setMultiboxRingStyle}
      />
      <Range
        text="Lined ring size"
        from={5}
        to={160}
        value={linedRingSize}
        onChange={setMultiboxLinderRingSize}
        disabled={ringStyle !== 'Line'}
      />
      <Colorpick
        text="Initial ring color"
        color={initialRingColor}
        onChange={setMultiboxInitialRingColor}
      />
      <Colorpick
        text="Focused ring color"
        color={focusedRingColor}
        onChange={setMultiboxFocusedRingColor}
      />
      <Colorpick
        text="Initial static cell color"
        color={initialStaticCellColor}
        onChange={setMultiboxInitialStaticCellColor}
      />
      <Colorpick
        text="Focused static cell color"
        color={focusedStaticCellColor}
        onChange={setMultiboxFocusedStaticCellColor}
      />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.theming.multibox,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setMultiboxRingStyle: (type: MultiboxRingStyleType) => dispatch(thunkSetMultiboxRingStyle(type)),
  setMultiboxLinderRingSize: (value: number) => dispatch(thunkSetMultiboxLinedRingSize(value)),
  setMultiboxInitialRingColor: (color: RGB) => dispatch(thunkSetMultiboxInitialRingColor(color)),
  setMultiboxFocusedRingColor: (color: RGB) => dispatch(thunkSetMultiboxFocusedRingColor(color)),
  setMultiboxInitialStaticCellColor: (color: RGB) =>
    dispatch(thunkSetMultiboxInitialStaticCellColor(color)),
  setMultiboxFocusedStaticCellColor: (color: RGB) =>
    dispatch(thunkSetMultiboxFocusedStaticCellColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Multibox);

type MultiboxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
