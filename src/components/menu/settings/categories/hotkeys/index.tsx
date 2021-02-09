import { FC } from "react";
import css from './index.module.scss';

import { connect } from "react-redux";

import { setHotkeysSettingsSubmenu } from "redux/UI/actions";
import { SettingsHotkeysType } from "redux/settings/hotkeys/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";

import Left from "../../left";
import Right from "../../right";

import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faKeyboard, faMouse } from "@fortawesome/free-solid-svg-icons";

import CategoryWrapper from "../wrapper";
import Keyboard from "./keyboard";

const Hotkeys: FC<HotkeysType> = ({ settingsSubmenu, settingsShown, setSettingsSubmenu }) => {
  return (
    <>
      <Left>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'HOTKEYS_KEYBOARD' })}
          onClick={() => setSettingsSubmenu('HOTKEYS_KEYBOARD')}
        >
          <FontAwesomeIcon icon={faKeyboard}/> Keyboard
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'HOTKEY_MOUSE' })}
          onClick={() => setSettingsSubmenu('HOTKEY_MOUSE')}
        >
          <FontAwesomeIcon icon={faMouse}/> Mouse
        </button>
        <button 
          className={classNames({ [css.selected]: settingsSubmenu === 'HOTKEYS_COMMANDS' })}
          onClick={() => setSettingsSubmenu('HOTKEYS_COMMANDS')}
        >
          <FontAwesomeIcon icon={faCommentAlt}/> Commands
        </button>
      </Left>
      <Right>
        <CategoryWrapper shown={settingsSubmenu === 'HOTKEYS_KEYBOARD' && settingsShown}>
          <Keyboard />
        </CategoryWrapper>
      </Right>
    </>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  settingsSubmenu: UI.hotkeysSettingsSubmenu,
  settingsShown: UI.settingsShown
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsSubmenu: (submenu: SettingsHotkeysType) => dispatch(setHotkeysSettingsSubmenu(submenu)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotkeys);

type HotkeysType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;