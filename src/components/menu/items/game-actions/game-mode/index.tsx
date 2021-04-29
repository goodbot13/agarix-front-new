import { FC, useState } from 'react';
import css from './index.module.scss';

import { GameModeTypes } from 'redux/game/types';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { connect } from 'react-redux';
import { thunkChangeGameMode } from 'redux/game/thunks';

import DelayedRenderComponent from 'components/StandartComponents/DelayedRenderCompnent';
import SelectList from '../select-list';

const GameMode: FC<GameModeType> = ({ mode, changeMode }) => {
  const [selectMode, setSelectMode] = useState(false);

  const transfromMode = (mode: GameModeTypes): TGameModeReadable => {
    switch (mode) {
      case ':party':
        return 'Party';
      case ':teams':
        return 'Teams';
      case ':ffa':
        return 'FFA';
      case ':experimental':
        return 'Experimental';
      case ':battleroyale':
        return 'Battle Royale';
    }
  };

  const untransformMode = (mode: TGameModeReadable): GameModeTypes => {
    switch (mode) {
      case 'Party':
        return ':party';
      case 'Teams':
        return ':teams';
      case 'FFA':
        return ':ffa';
      case 'Experimental':
        return ':experimental';
      case 'Battle Royale':
        return ':battleroyale';
    }
  };

  return (
    <>
      <button
        className={`${css.gameMode} ${selectMode ? css.active : ''}`}
        onClick={() => setSelectMode((prevState) => !prevState)}
      >
        {transfromMode(mode)}
      </button>
      <DelayedRenderComponent rendered={selectMode} hideDelayMs={150}>
        <SelectList
          itemsList={([
            ':party',
            ':ffa',
            ':battleroyale',
            ':teams',
            ':experimental',
          ] as Array<GameModeTypes>).map((mode) => transfromMode(mode))}
          selectedName={transfromMode(mode)}
          onChange={(mode: TGameModeReadable) => changeMode(untransformMode(mode))}
          left
          shown={selectMode}
        />
      </DelayedRenderComponent>
    </>
  );
};

const mapStateToProps = ({ game }: AppStateType) => ({
  mode: game.mode,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  changeMode: (mode: GameModeTypes) => dispatch(thunkChangeGameMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameMode);

type GameModeType = {
  mode: GameModeTypes;
  changeMode: (mode: GameModeTypes) => void;
};

type TGameModeReadable = 'Party' | 'Teams' | 'FFA' | 'Experimental' | 'Battle Royale';
