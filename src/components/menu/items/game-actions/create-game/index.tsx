import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { setGameSocketConnecting } from 'redux/UI/actions';

import classNames from 'classnames';

import { changeGameServerToken, changeGameToken } from 'redux/game/actions';
import { thunkSetSpectateType } from 'redux/UI/thunks';
import { SpectateType } from 'redux/UI/types';

const CreateGame: FC<CreateGameType> = ({
  connecting,
  setConnecting,
  setToken,
  setServerToken,
  setSpectateType,
}) => {
  const [creating, setCreating] = useState(false);

  const disabled = connecting && !creating;

  useEffect(() => {
    if (!connecting) {
      setCreating(false);
    }
  }, [connecting]);

  const getTokens = () => {
    setSpectateType('CENTER');

    if (connecting) {
      setConnecting(false);
      setCreating(false);
    } else {
      setConnecting(true);
      setCreating(true);

      window.GameAPI?.join()
        .then((tokens) => {
          if (!tokens) {
            setToken('');
            setServerToken('');
          } else {
            setToken(tokens.split('%')[0]);
            setServerToken(tokens.split('%')[1]);
          }

          setConnecting(false);
        })
        .catch(() => {
          setToken('');
          setServerToken('');

          setConnecting(false);
        });
    }
  };

  return (
    <div className={css.wrap}>
      <button
        className={classNames({ [css.create]: true, [css.creating]: creating })}
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
          opacity: disabled ? 0.4 : 1,
        }}
        onClick={getTokens}
      >
        <div className={css.createText}>Create</div>
        <div className={css.cancelText}>Cancel</div>
      </button>
    </div>
  );
};

const mapStateToProps = ({ UI }: AppStateType) => ({
  connecting: UI.gameSocketConnecting,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value)),
  setToken: (value: string) => dispatch(changeGameToken(value)),
  setServerToken: (value: string) => dispatch(changeGameServerToken(value)),
  setSpectateType: (type: SpectateType) => dispatch(thunkSetSpectateType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);

type CreateGameType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
