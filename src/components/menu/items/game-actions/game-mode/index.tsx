import { FC, useState } from 'react';
import css from './index.module.scss';

import { GameModeTypes } from 'redux/game/types';
import { AppStateType } from 'redux/store';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import DelayedRenderComponent from 'components/StandartComponents/DelayedRenderCompnent';
import SelectList from '../select-list';
import { changeGameMode } from 'redux/game/actions';

const GameMode: FC<GameModeType> = ({ mode, changeMode }) => {
  const [selectMode, setSelectMode] = useState(false);

  return (
    <>
      <button 
        className={`${css.gameMode} ${selectMode ? css.active : ''}`}
        onClick={() => setSelectMode((prevState) => !prevState)}
      >{mode}</button>
      <DelayedRenderComponent rendered={selectMode} hideDelayMs={150}>
        <SelectList 
          itemsList={['Party', 'FFA', 'Battle Royale', 'Teams', 'Experimental'] as Array<GameModeTypes>}
          selectedName={mode}
          onChange={(mode: GameModeTypes) => changeMode(mode)}
          left
          shown={selectMode}
        />
      </DelayedRenderComponent>
    </>
  )
}

const mapStateToProps = ({ game }: AppStateType) => ({ mode: game.mode });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMode: (mode: GameModeTypes) => dispatch(changeGameMode(mode))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameMode);

type GameModeType = {
  mode: GameModeTypes,
  changeMode: (mode: GameModeTypes) => void
}