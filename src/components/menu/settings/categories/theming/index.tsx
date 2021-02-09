import { FC } from 'react';
import css from './index.module.scss';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppStateType } from 'redux/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCircle, faDiceTwo, faMapMarked, faVirus } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle, faSquare } from '@fortawesome/free-regular-svg-icons';

import { SettingsThemingType } from 'redux/settings/theming/types';
import { setThemingSettingsSubmenu } from 'redux/UI/actions';

import classNames from 'classnames';

import Left from '../../left';
import Right from '../../right';
import CategoryWrapper from '../wrapper';
import Cells from './cells';
import Food from './food';
import Map from './map';
import Minimap from './minimap';
import Multibox from './multibox';
import Viruses from './viruses';

const Theming: FC<ThemingType> = ({ settingsShown, settingsSubmenu, setSettingsSubmenu }) => {
  return (
    <>
      <Left>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_CELLS' })}
          onClick={() => setSettingsSubmenu('THEMING_CELLS')}
        >
          <FontAwesomeIcon icon={faCircle}/> Cells
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_VIRUSES' })}
          onClick={() => setSettingsSubmenu('THEMING_VIRUSES')}
        >
          <FontAwesomeIcon icon={faVirus}/> Viruses
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_FOOD' })}
          onClick={() => setSettingsSubmenu('THEMING_FOOD')}
        >
          <FontAwesomeIcon icon={faDotCircle}/> Food
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_MAP' })}
          onClick={() => setSettingsSubmenu('THEMING_MAP')}
        >
          <FontAwesomeIcon icon={faSquare}/> Map
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_MINIMAP' })}
          onClick={() => setSettingsSubmenu('THEMING_MINIMAP')}
        >
          <FontAwesomeIcon icon={faMapMarked}/> Minimap
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_MULTIBOX' })}
          onClick={() => setSettingsSubmenu('THEMING_MULTIBOX')}
        >
          <FontAwesomeIcon icon={faDiceTwo}/> Multibox
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'THEMING_VIEWPORTS' })}
          onClick={() => setSettingsSubmenu('THEMING_VIEWPORTS')}
        >
          <FontAwesomeIcon icon={faArrowsAlt}/> Viewports
        </button>
      </Left>
      <Right>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_CELLS' && settingsShown}>
          <Cells />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_VIRUSES' && settingsShown}>
          <Viruses />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_FOOD' && settingsShown}>
          <Food />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_MAP' && settingsShown}>
          <Map />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_MULTIBOX' && settingsShown}>
          <Multibox />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'THEMING_MINIMAP' && settingsShown}>
          <Minimap />
        </CategoryWrapper>
      </Right>
    </>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  settingsSubmenu: UI.themingSettingsSubmenu,
  settingsShown: UI.settingsShown
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSettingsSubmenu: (submenu: SettingsThemingType) => dispatch(setThemingSettingsSubmenu(submenu)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Theming);

type ThemingType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;