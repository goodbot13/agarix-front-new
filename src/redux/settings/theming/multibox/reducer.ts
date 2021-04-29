import Storage from 'api/storage/Storage';
import {
  IThemingMultiboxState,
  ThemingMultiboxActionTypes,
  SET_MULTIBOX_LINED_RING_SIZE,
  SET_MUTLIBOX_RING_STYLE,
  SET_MULTIBOX_INITIAL_RING_COLOR,
  SET_MULTIBOX_FOCUSED_RING_COLOR,
  SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR,
  SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR,
} from './types';

const initState: IThemingMultiboxState = Storage.get().settings.theming.multibox;

export const themingMultiboxReducer = (
  state = initState,
  action: ThemingMultiboxActionTypes,
): IThemingMultiboxState => {
  switch (action.type) {
    case SET_MUTLIBOX_RING_STYLE:
      return {
        ...state,
        ringStyle: action.ringStyle,
      };

    case SET_MULTIBOX_LINED_RING_SIZE:
      return {
        ...state,
        linedRingSize: action.linedRingSize,
      };

    case SET_MULTIBOX_INITIAL_RING_COLOR:
      return {
        ...state,
        initialRingColor: action.initialRingColor,
      };

    case SET_MULTIBOX_FOCUSED_RING_COLOR:
      return {
        ...state,
        focusedRingColor: action.focusedRingColor,
      };

    case SET_MULTIBOX_INITIAL_STATIC_CELL_COLOR:
      return {
        ...state,
        initialStaticCellColor: action.initialStaticCellColor,
      };

    case SET_MULTIBOX_FOCUSED_STATIC_CELL_COLOR:
      return {
        ...state,
        focusedStaticCellColor: action.focusedStaticCellColor,
      };

    default:
      return state;
  }
};
