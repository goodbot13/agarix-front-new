import { FC } from 'react';
import css from './index.module.scss';

import { faCircle, faDiceTwo, faMapMarked, faPlay, faRocket, faServer, faTint, faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { setSettingsSubmenu } from 'redux/UI/actions';
import { SettingsSubmenuType } from 'redux/UI/types';

import Left from '../../left';
import Right from '../../right';
import Performance from './performance';

import classNames from 'classnames';
import CategoryWrapper from '../wrapper';
import Cells from './cells';
import Gameplay from './gameplay';
import Multibox from './multibox';
import Minimap from './minimap';
import Effects from './effects';

const Game: FC<GameType> = ({ settingsSubmenu, setSettingsSubmenu, settingsShown }) => {
  return (
    <>
      <Left>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_PERFORMANCE' })}
          onClick={() => setSettingsSubmenu('GAME_PERFORMANCE')}
        >
          <FontAwesomeIcon icon={faRocket}/> Performance
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_CELLS' })}
          onClick={() => setSettingsSubmenu('GAME_CELLS')}
        >
          <FontAwesomeIcon icon={faCircle}/> Cells
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_GAMEPLAY' })}
          onClick={() => setSettingsSubmenu('GAME_GAMEPLAY')}
        >
          <FontAwesomeIcon icon={faPlay}/> Gameplay
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_MULTIBOX' })}
          onClick={() => setSettingsSubmenu('GAME_MULTIBOX')}
        >
          <FontAwesomeIcon icon={faDiceTwo}/> Multibox
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_MINIMAP' })}
          onClick={() => setSettingsSubmenu('GAME_MINIMAP')}
        >
          <FontAwesomeIcon icon={faMapMarked}/> Minimap
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'GAME_EFFECTS' })}
          onClick={() => setSettingsSubmenu('GAME_EFFECTS')}
        >
          <FontAwesomeIcon icon={faTint}/> Effects
        </button>
      </Left>
      <Right>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_PERFORMANCE' && settingsShown }>
          <Performance />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_CELLS' && settingsShown }>
          <Cells />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_GAMEPLAY' && settingsShown }>
          <Gameplay />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_MULTIBOX' && settingsShown }>
          <Multibox />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_MINIMAP' && settingsShown }>
          <Minimap />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'GAME_EFFECTS' && settingsShown }>
          <Effects />
        </CategoryWrapper>
      </Right>
    </>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  settingsSubmenu: UI.settingsSubmenu,
  settingsShown: UI.settingsShown
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsSubmenu: (submenu: SettingsSubmenuType) => dispatch(setSettingsSubmenu(submenu)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

type GameType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;