import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from 'redux/store';
import { setGameSocketConnecting } from 'redux/UI/actions';

import classNames from 'classnames';
import ClientCommunicationService from 'api/ClientCommunicationService/ClientCommunicationService';
import { changeGameServerToken, changeGameToken } from 'redux/game/actions';

const CreateGame: FC<CreateGameType> = ({ connecting, setConnecting, setToken, setServerToken }) => {
  const [creating, setCreating] = useState(false);

  const disabled = connecting && !creating;

  useEffect(() => {
    if (!connecting) {
      setCreating(false);
    }
  }, [connecting]);

  const getTokens = () => {
    if (connecting) {
      setConnecting(false);
      setCreating(false);
    } else {
      setConnecting(true);
      setCreating(true);

      ClientCommunicationService.create().then((tokens) => {

        if (!tokens) {
          setToken('');
          setServerToken('');
        } else {
          setToken(tokens.split('%')[0]);
          setServerToken(tokens.split('%')[1]);
        }

        setConnecting(false);

      }).catch(() => {

        setToken('');
        setServerToken('');

        setConnecting(false);
        
      });
    }
  }

  return (
    <div className={css.wrap}>
      <button 
        className={classNames({ [css.create]: true, [css.creating]: creating })}
        style={{ 
          pointerEvents: disabled ? 'none' : 'auto',
          opacity: disabled ? 0.4 : 1 
        }}
        onClick={getTokens}
      >
        <div className={css.createText}>Create</div>
        <div className={css.cancelText}>Cancel</div>
      </button>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  connecting: UI.gameSocketConnecting
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value)),
  setToken: (value: string) => dispatch(changeGameToken(value)),
  setServerToken: (value: string) => dispatch(changeGameServerToken(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);

type CreateGameType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;