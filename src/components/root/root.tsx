import React, { FC, useEffect } from 'react';

import Menu from 'components/menu';
import GameLoader from '../game-laoder';

import { AppStateType } from 'redux/store';
import { connect } from 'react-redux';
import Huds from 'components/huds';

const Root: FC<RootType> = ({ gameLoaded }) => {
  return (
    <>
      <GameLoader />
      {gameLoaded && 
        <>
          <Menu />
          <Huds /> 
        </>
      }
    </>
  );
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  gameLoaded: UI.gameLoaded
});

export default connect(mapStateToProps)(Root);

export type RootType = ReturnType<typeof mapStateToProps>;
