import { FC, useEffect } from 'react';
import css from './index.module.scss';

import Settings from './settings';
import WrappedMenu from './wrapped-menu';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { setMenuShown, setSettingsShown } from 'redux/UI/actions';

import classNames from 'classnames';

const Menu: FC<MenuType> = ({ menuShown, setSettingsShown, setMenuShown }) => {
  useEffect(() => {
    (window as any).setSettingsShown = setSettingsShown;
    (window as any).setMenuShown = setMenuShown;
  }, []);

  return (
    <div className={css.wrap}>
      <div className={classNames({
        [css.innerWrap]: true,
        /* [css.shown]: menuShown */
      })}>
        <Settings />
        <WrappedMenu />
      </div>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({ 
  menuShown: UI.menuShown,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsShown: (shown: boolean) => dispatch(setSettingsShown(shown)),
  setMenuShown: (shown: boolean) => dispatch(setMenuShown(shown))
});

type MenuType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);