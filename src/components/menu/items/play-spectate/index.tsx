import { FC } from 'react';
import css from './index.module.scss';

import { changeGameServerToken, changeGameToken } from 'redux/game/actions';
import { setGameSocketConnecting } from 'redux/UI/actions';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { connect } from 'react-redux';
import { thunkSetMenuShown } from 'redux/UI/thunks';

const PlaySpectate: FC<PlaySpectateState> = ({ connecting, setConnecting, setToken, setServerToken, setMenuShown }) => {

  const hideMenuAndUnblur = () => {
    window.GameAPI?.setSceneBlurred(false, true);
    setMenuShown(false);
  }

  const play = () => {
    if (connecting) {
      return;
    }

    setConnecting(true);

    window.GameAPI?.play().then((tokens) => {
      if (tokens) {
        setToken(tokens.split('%')[0]);
        setServerToken(tokens.split('%')[1]);
        hideMenuAndUnblur();
      }

      setConnecting(false);

    }).catch(() => {
      setConnecting(false);
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
        onClick={hideMenuAndUnblur}
      ></button>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  connecting: UI.gameSocketConnecting
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setConnecting: (value: boolean) => dispatch(setGameSocketConnecting(value)),
  setToken: (value: string) => dispatch(changeGameToken(value)),
  setServerToken: (value: string) => dispatch(changeGameServerToken(value)),
  setMenuShown: (value: boolean) => dispatch(thunkSetMenuShown(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaySpectate);

type PlaySpectateState = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;