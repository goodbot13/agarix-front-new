import { FC } from "react";
import css from './index.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye, faFire, faListOl, faListUl } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SettingsUIType } from "redux/settings/UI/types";
import { AppStateType } from "redux/store";
import { setUiSettingsSubmenu } from "redux/UI/actions";

import Left from "../../left";
import Right from "../../right";

import CategoryWrapper from "../wrapper";
import Leaderboard from "./leaderboard";
import Stats from "./stats";

import classNames from 'classnames';
import TopTeam from "./top-team";
import Spectate from "./spectate";
import Chat from "./chat";

const ThemingUI: FC<ThemingUIType> = ({ settingsSubmenu, settingsShown, setSettingsSubmenu }) => {
  return (
    <>
      <Left>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'UI_LEADERBOARD' })}
          onClick={() => setSettingsSubmenu('UI_LEADERBOARD')}
        >
          <FontAwesomeIcon icon={faListOl}/> Leaderboard
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'UI_TOP_TEAM' })}
          onClick={() => setSettingsSubmenu('UI_TOP_TEAM')}
        >
          <FontAwesomeIcon icon={faListUl}/> Top team
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'UI_STATS' })}
          onClick={() => setSettingsSubmenu('UI_STATS')}
        >
          <FontAwesomeIcon icon={faFire}/> Stats
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'UI_SPECTATE' })}
          onClick={() => setSettingsSubmenu('UI_SPECTATE')}
        >
          <FontAwesomeIcon icon={faEye}/> Spectate
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'UI_CHAT' })}
          onClick={() => setSettingsSubmenu('UI_CHAT')}
        >
          <FontAwesomeIcon icon={faComments}/> Chat
        </button>
      </Left>
      <Right>
        <CategoryWrapper shown={settingsSubmenu === 'UI_LEADERBOARD' && settingsShown}>
          <Leaderboard />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'UI_TOP_TEAM' && settingsShown}>
          <TopTeam />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'UI_STATS' && settingsShown}>
          <Stats />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'UI_SPECTATE' && settingsShown}>
          <Spectate />
        </CategoryWrapper>
        <CategoryWrapper shown={settingsSubmenu === 'UI_CHAT' && settingsShown}>
          <Chat />
        </CategoryWrapper>
      </Right>
    </>
  )
} 

const mapStateToProps = ({ UI }: AppStateType) => ({
  settingsSubmenu: UI.uiSettingsSubmenu,
  settingsShown: UI.settingsShown
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSettingsSubmenu: (submenu: SettingsUIType) => dispatch(setUiSettingsSubmenu(submenu)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemingUI);

type ThemingUIType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;