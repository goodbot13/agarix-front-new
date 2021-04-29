import { FC } from 'react';
import css from './index.module.scss';

import SettingsHeader from './header';

import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';

import classNames from 'classnames';

import Game from './categories/game';
import Theming from './categories/theming';
import Hotkeys from './categories/hotkeys';
import ThemingUI from './categories/UI';

const Settings: FC<SettingsComponentType> = ({ shown, settingsType, menuShown }) => {
  return (
    <div className={classNames({ [css.wrap]: true, [css.shown]: shown && menuShown })}>
      <SettingsHeader />
      <div className={css.content}>
        <div
          className={classNames({
            [css.category]: true,
            [css.hidden]: settingsType !== 'GAME',
          })}
        >
          <Game />
        </div>
        <div
          className={classNames({
            [css.category]: true,
            [css.hidden]: settingsType !== 'THEMING',
          })}
        >
          <Theming />
        </div>
        <div
          className={classNames({
            [css.category]: true,
            [css.hidden]: settingsType !== 'HOTKEYS',
          })}
        >
          <Hotkeys />
        </div>
        <div
          className={classNames({
            [css.category]: true,
            [css.hidden]: settingsType !== 'UI',
          })}
        >
          <ThemingUI />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ UI }: AppStateType) => ({
  shown: UI.settingsShown,
  settingsType: UI.settingsType,
  menuShown: UI.menuShown,
});

export default connect(mapStateToProps)(Settings);

type SettingsComponentType = ReturnType<typeof mapStateToProps>;
