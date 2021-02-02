import css from './index.module.scss';
import { FC, useEffect, useState } from "react";

import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import DelayedRenderComponent from '../StandartComponents/DelayedRenderCompnent';
import { setGameLoaded } from 'redux/UI/actions';

import spinner from 'assets/loader-spinner.svg';

import classNames from 'classnames';

const GameLoader: FC<GameLoaderType> = ({ gameLoaded, setShown }) => {
  const [status, setStatus] = useState('Receiving game version...');

  useEffect(() => {
    (window as any).setCurrentGameVersion = setStatus;
    (window as any).setGameLoaderShown = setShown;
  }, [gameLoaded, setShown]);

  return (
    <DelayedRenderComponent rendered={!gameLoaded} hideDelayMs={500}>
      <div className={classNames({
        [css.wrap]: true,
        [css.hidden]: gameLoaded
      })}>
        <div className={css.status}>
          <img src={spinner}></img> 
          <span className={css.text}>{status}</span>
        </div>
      </div>
    </DelayedRenderComponent>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({ gameLoaded: UI.gameLoaded });

const mapDispatchToProps = (dispatch: Dispatch) => ({ 
  setShown: (value: boolean) => dispatch(setGameLoaded(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameLoader);

type GameLoaderType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;