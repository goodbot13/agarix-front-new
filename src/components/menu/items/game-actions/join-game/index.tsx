import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setGameSocketConnecting } from 'redux/UI/actions';

import classNames from 'classnames';

const JoinGame: FC<JoinGameType> = ({ connecting, setConnecting }) => {
  const [joining, setJoining] = useState(false);

  const disabled = connecting && !joining;

  useEffect(() => {
    if (!connecting) {
      setJoining(false);
    }
  }, [connecting]);

  return (
    <div className={css.wrap}>
      <button 
        className={classNames({ [css.joinGame]: true, [css.joining]: joining })}
        style={{ 
          pointerEvents: disabled ? 'none' : 'auto',
          opacity: disabled ? 0.4 : 1 
        }}
        onClick={() => {
          if (connecting || joining) {
            setConnecting(false);
            setJoining(false);
          } else {
            setConnecting(true);
            setJoining(true);
          } 
        }}
      >
        <div className={css.joinText}>Join</div>
        <div className={css.cancelText}>Cancel</div>
      </button>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  connecting: UI.gameSocketConnecting
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);

type JoinGameType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;