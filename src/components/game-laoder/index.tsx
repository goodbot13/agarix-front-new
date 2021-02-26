import css from './index.module.scss';
import { FC } from "react";

import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';

import DelayedRenderComponent from '../StandartComponents/DelayedRenderCompnent';

import spinner from 'assets/loader-spinner.svg';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const GameLoader: FC<GameLoaderType> = ({ gameLoaded, status }) => {
  return (
    <DelayedRenderComponent rendered={!gameLoaded} hideDelayMs={667}>
      <div className={classNames({
        [css.wrap]: true,
        [css.hidden]: gameLoaded
      })}>
        <div className={css.status}>
          <img src={spinner}></img> 
          <span className={css.text}>{status}</span>
        </div>
        <div className={css.discord}>
          <FontAwesomeIcon icon={faDiscord}/> 
          <a href="https://discord.gg/XX5sVwpqfa" target="_blank">
            Discord 
          </a>
        </div>
      </div>
    </DelayedRenderComponent>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({ 
  gameLoaded: UI.gameLoaded,
  status: UI.gameLoaderStatus
});

export default connect(mapStateToProps)(GameLoader);

type GameLoaderType = ReturnType<typeof mapStateToProps>;