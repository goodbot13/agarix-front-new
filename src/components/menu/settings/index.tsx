import { FC } from 'react';
import css from './index.module.scss';

import SettingsHeader from './header';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import { setSettingsType } from 'redux/UI/actions';
import { SettingsType } from 'redux/UI/types';

import classNames from 'classnames';
import Game from './categories/game';

const Settings: FC<SettingsComponentType> = ({ shown, settingsType, setSettingsType }) => {
  return (
    <div className={classNames({ [css.wrap]: true, [css.shown]: shown })}>
      <SettingsHeader />
      <div className={css.content}>
        {settingsType === 'GAME' && <Game />}
      </div>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  shown: UI.settingsShown,
  settingsType: UI.settingsType
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsType: (type: SettingsType) => dispatch(setSettingsType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

type SettingsComponentType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;