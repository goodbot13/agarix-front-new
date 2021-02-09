import { FC, useEffect } from 'react';

import './root.module.scss';

import Menu from 'components/menu';
import GameLoader from '../game-laoder';

import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';

import Keyboard from 'api/Keyboard/Keyboard';

const Root: FC<RootType> = () => {
  useEffect(() => {
    
  }, []);

  return (
    <>
      <GameLoader />
      <Menu />
    </>
  );
}

const mapStateToProps = (state: AppStateType) => ({

});

export default connect(mapStateToProps)(Root);

export type RootType = ReturnType<typeof mapStateToProps>;
