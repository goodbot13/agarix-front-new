import { FC } from 'react';
import css from './index.module.scss';

import Settings from './settings';
import WrappedMenu from './wrapped-menu';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import classNames from 'classnames';
import { thunkSetMenuShown, thunkSetSettingsShown } from 'redux/UI/thunks';

const Menu: FC<MenuType> = ({ menuShown, settingsShown, setSettingsShown, setMenuShown }) => {
  return (
    <div className={classNames({ 
      [css.wrap]: true,
      [css.hidden]: !menuShown
    })}>
      <div className={classNames({ [css.innerWrap]: true })}>
        <WrappedMenu />
        <Settings />
      </div>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({ 
  menuShown: UI.menuShown,
  settingsShown: UI.settingsShown
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsShown: (shown: boolean) => dispatch(thunkSetSettingsShown(shown)),
  setMenuShown: (shown: boolean) => dispatch(thunkSetMenuShown(shown))
});

type MenuType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);