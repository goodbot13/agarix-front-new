import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { connect } from 'react-redux';
import { setGameSocketConnecting } from 'redux/UI/actions';

import classNames from 'classnames';
import { changeGameServerToken, changeGameToken } from 'redux/game/actions';
import { thunkSetSpectateType } from 'redux/UI/thunks';
import { SpectateType } from 'redux/UI/types';

const JoinGame: FC<JoinGameType> = ({
  connecting,
  setConnecting,
  selectedTokenType,
  serverToken,
  partyToken,
  setToken,
  setServerToken,
  setSpectateType,
}) => {
  const [joining, setJoining] = useState(false);

  const disabled = connecting && !joining;

  useEffect(() => {
    if (!connecting) {
      setJoining(false);
    }
  }, [connecting]);

  const join = () => {
    if (selectedTokenType === 'PARTY' && partyToken.length !== 6) {
      return;
    }

    if (selectedTokenType === 'SERVER' && (serverToken.length < 6 || serverToken.length > 7)) {
      return;
    }

    setSpectateType('CENTER');

    let token: string = '';

    if (selectedTokenType === 'PARTY') {
      token = partyToken;
    } else if (selectedTokenType === 'SERVER') {
      token = serverToken;
    }

    if (connecting) {
      setConnecting(false);
      setJoining(false);
    } else {
      setConnecting(true);
      setJoining(true);

      window.GameAPI?.join(token, selectedTokenType === 'SERVER')
        .then((tokens) => {
          setConnecting(false);
          setToken(tokens.split('%')[0]);
          setServerToken(tokens.split('%')[1]);
        })
        .catch(() => {
          setConnecting(false);
        });
    }
  };

  return (
    <div className={css.wrap}>
      <button
        className={classNames({ [css.joinGame]: true, [css.joining]: joining })}
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
          opacity: disabled ? 0.4 : 1,
        }}
        onClick={join}
      >
        <div className={css.joinText}>Join</div>
        <div className={css.cancelText}>Cancel</div>
      </button>
    </div>
  );
};

const mapStateToProps = ({ UI, game }: AppStateType) => ({
  connecting: UI.gameSocketConnecting,
  selectedTokenType: game.selectedGameTokenType,
  partyToken: game.token,
  serverToken: game.gameServerToken,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value)),
  setToken: (value: string) => dispatch(changeGameToken(value)),
  setServerToken: (value: string) => dispatch(changeGameServerToken(value)),
  setSpectateType: (type: SpectateType) => dispatch(thunkSetSpectateType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);

type JoinGameType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
