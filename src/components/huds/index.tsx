import classNames from 'classnames';
import { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';

import Chat from './chat';
import Leaderboard from './leaderboard';
import Spectate from './spectate';
import Stats from './stats';
import TopTeam from './top-team';

import css from './index.module.scss';

const Huds: FC<HudsType> = ({ menuShown, settingsShown, settingsType, hudsShown }) => {
  let hudsHidden = true;

  if (menuShown) {
    if (settingsShown && settingsType === 'UI') {
      hudsHidden = false;
    } else {
      hudsHidden = true;
    }
  } else {
    hudsHidden = hudsShown;
  }

  return (
    <>
      <div
        className={classNames({
          [css.hudsWrap]: true,
          [css.hidden]: hudsHidden,
        })}
      >
        <Chat />
        <Leaderboard />
        <Stats />
        <TopTeam />
        <Spectate />
      </div>
    </>
  );
};

const mapStateToProps = ({ UI }: AppStateType) => ({
  menuShown: UI.menuShown,
  settingsShown: UI.settingsShown,
  hudsShown: UI.hudsShown,
  settingsType: UI.settingsType,
});

type HudsType = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Huds);
