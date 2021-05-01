import { FC } from 'react';
import css from './index.module.scss';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { rgbToCssString } from 'api/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

import { thunkSetBotsStarted } from '../../../redux/settings/game/bots/thunks';

const Bots: FC<TBots> = ({ enabled, provider, started, setBotsStarted }) => {
  // TODO: maybe add this as interface options
  const backgroundColor = { red: 24, green: 24, blue: 24, alpha: 0.5 };
  const backdropBlur = false;

  const _buttonColor = rgbToCssString({
    red: backgroundColor.red + 11,
    green: backgroundColor.green + 11,
    blue: backgroundColor.blue + 11,
    alpha: 0.9,
  });

  return enabled ? (
    <div
      className={classNames({
        [css.wrap]: true,
        // [css.hidden]: isPlayerPlaying,
      })}
      style={{
        backgroundColor: rgbToCssString(backgroundColor),
        boxShadow: `0 0 4px ${rgbToCssString(backgroundColor)}`,
        backdropFilter: backdropBlur ? `blur(7px)` : '',
      }}
    >
      <div className={css.stats}>Provider: {provider}</div>
      <button
        style={{ backgroundColor: _buttonColor }}
        onClick={() => setBotsStarted(!started)}
        className={classNames({ [css.active]: started })}
      >
        <FontAwesomeIcon icon={faPlayCircle} /> Start Bots
      </button>
    </div>
  ) : null;
};

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  ...settings.game.bots,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setBotsStarted: (started: boolean) => dispatch(thunkSetBotsStarted(started)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bots);

type TBots = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
