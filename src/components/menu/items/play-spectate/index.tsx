import { FC } from 'react';
import css from './index.module.scss';

import ClientCommunicationService from 'api/ClientCommunicationService/ClientCommunicationService';

import { Dispatch } from 'redux';
import { changeGameServerToken, changeGameToken } from 'redux/game/actions';
import { setGameSocketConnecting, setMenuShown } from 'redux/UI/actions';
import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';

const PlaySpectate: FC<PlaySpectateState> = ({ connecting, setConnecting, setToken, setServerToken, setMenuShown }) => {

  const play = () => {
    if (connecting) {
      return;
    }

    setConnecting(true);

    ClientCommunicationService.play().then((tokens) => {

      if (!tokens) {
        setToken('');
        setServerToken('');
      } else {
        setToken(tokens.split('%')[0]);
        setServerToken(tokens.split('%')[1]);
      }

      setConnecting(false);

    }).catch(() => {
      setConnecting(false);
      setToken('');
      setServerToken('');
    });
  }

  return (
    <div className={css.wrap}>
      <button 
        className={`${css.play}`}
        onClick={play}
      ></button>
      <button 
        className={css.spectate}
        onClick={() => {
          ClientCommunicationService.setSceneBlurred({ blurred: false, canMouseZoom: true });
          setMenuShown(false);
        }}
      ></button>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  connecting: UI.gameSocketConnecting
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value)),
  setToken: (value: string) => dispatch(changeGameToken(value)),
  setServerToken: (value: string) => dispatch(changeGameServerToken(value)),
  setMenuShown: (value: boolean) => dispatch(setMenuShown(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaySpectate);

type PlaySpectateState = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;