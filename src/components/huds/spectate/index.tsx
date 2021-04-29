import { FC } from 'react';
import css from './index.module.scss';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { rgbToCssString } from 'api/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAlt,
  faBullseye,
  faDotCircle,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import { SpectateType } from 'redux/UI/types';
import { thunkSetSpectateType } from 'redux/UI/thunks';

const Spectate: FC<TSpectate> = ({
  shown,
  backdropBlur,
  backgroundColor,
  spectateType,
  setSpectateType,
  isPlayerPlaying,
}) => {
  const _backgroundColor = rgbToCssString({
    ...backgroundColor,
    alpha: 0.9,
  });

  const _buttonColor = rgbToCssString({
    red: backgroundColor.red + 22,
    green: backgroundColor.green + 22,
    blue: backgroundColor.blue + 22,
    alpha: 0.9,
  });

  const _boxShadowColor = rgbToCssString({
    red: backgroundColor.red - 8,
    green: backgroundColor.green - 8,
    blue: backgroundColor.blue - 8,
    alpha: 0.9,
  });

  return shown ? (
    <div
      className={classNames({
        [css.wrap]: true,
        [css.targetMode]: spectateType === 'TARGET',
        [css.hidden]: isPlayerPlaying,
      })}
      style={{
        backgroundColor: _backgroundColor,
        boxShadow: `0 0 8px ${_boxShadowColor}`,
        backdropFilter: backdropBlur ? `blur(7px)` : '',
      }}
    >
      <button
        style={{ backgroundColor: _buttonColor }}
        onClick={() => setSpectateType('TOP_ONE')}
        className={classNames({ [css.active]: spectateType === 'TOP_ONE' })}
      >
        <FontAwesomeIcon icon={faDotCircle} /> Top 1
      </button>
      <button
        style={{ backgroundColor: _buttonColor }}
        onClick={() => setSpectateType('CENTER')}
        className={classNames({ [css.active]: spectateType === 'CENTER' })}
      >
        <FontAwesomeIcon icon={faArrowsAlt} /> Center
      </button>
      <button
        style={{ backgroundColor: _buttonColor }}
        onClick={() => setSpectateType('FREE')}
        className={classNames({ [css.active]: spectateType === 'FREE' })}
      >
        <FontAwesomeIcon icon={faMousePointer} /> Free
      </button>
      <button
        style={{ backgroundColor: _buttonColor }}
        onClick={() => setSpectateType('TARGET')}
        className={classNames({ [css.active]: spectateType === 'TARGET' })}
      >
        <FontAwesomeIcon icon={faBullseye} /> Target
      </button>
      <div className={css.target}>Click on cell to set target [disabled]</div>
    </div>
  ) : null;
};

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  ...settings.UI.spectate,
  spectateType: UI.spectateType,
  isPlayerPlaying: UI.isPlayerPlaying,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSpectateType: (type: SpectateType) => dispatch(thunkSetSpectateType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Spectate);

type TSpectate = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
