import { FC } from 'react';
import css from './index.module.scss';

import Profile from '../items/profile';
import GameActions from '../items/game-actions';
import PlaySpectate from '../items/play-spectate';
import Customization from '../items/customization';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';

import classNames from 'classnames';
import { 
  thunkSetLeftProfileNick, 
  thunkSetLeftProfileSelectedIndex,
   thunkSetLeftProfileSkinUrl, 
   thunkSetRightProfileNick, 
   thunkSetRightProfileSelectedIndex, 
   thunkSetRightProfileSkinUrl, 
   thunkSetTag
  } from 'redux/profiles/thunks';

const WrappedMenu: FC<WrappedMenuType> = ({
  setLeftProfileNick, 
  setLeftProfileSelectedIndex, 
  setLeftProfileSkinUrl,
  setRightProfileNick, 
  setRightProfileSelectedIndex, 
  setRightProfileSkinUrl, 
  setTag,
  settingsShown,
  blured,
  leftProfiles,
  leftSelectedIndex,
  additionalProfilesListShown,
  rightProfiles,
  rightSelectedIndex,
  menuShown
}) => {

  return (
    <div className={classNames({
      [css.menuWrap]: true,
      [css.settingsShown]: settingsShown,
      [css.menuShown]: menuShown,
    })}>
      <div className={css.top}>
        <div className={css.left}>
          <Profile 
            main 
            blured={blured}
            onNickChange={setLeftProfileNick}
            onSkinUrlChange={setLeftProfileSkinUrl}
            onTagChange={setTag}
            profilesList={leftProfiles}
            currentSelectedIndex={leftSelectedIndex}
            additionalProfilesListShown={additionalProfilesListShown}
            onProfileChange={setLeftProfileSelectedIndex}
          />
        </div>
        <div className={css.middle}>
          <div className={css.playSpectate}>
            <PlaySpectate />
          </div>
          <div className={css.customization}>
            <Customization />
          </div>
        </div>
        <div className={css.right}>
          <Profile 
            blured={blured}
            profilesList={rightProfiles}
            onNickChange={setRightProfileNick}
            onSkinUrlChange={setRightProfileSkinUrl}
            currentSelectedIndex={rightSelectedIndex}
            additionalProfilesListShown={additionalProfilesListShown}
            onProfileChange={setRightProfileSelectedIndex}
          />
        </div>
      </div>
      <div className={css.bottom}>
        <GameActions />
      </div>
    </div>
  )
}

const mapStateToProps = ({ UI, profiles }: AppStateType) => ({
  ...profiles,
  blured: UI.blured,
  menuShown: UI.menuShown,
  settingsShown: UI.settingsShown,
  additionalProfilesListShown: UI.additionalProfilesListShown,
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setLeftProfileNick: (nick: string) => dispatch(thunkSetLeftProfileNick(nick)),
  setLeftProfileSkinUrl: (skinUrl: string) => dispatch(thunkSetLeftProfileSkinUrl(skinUrl)),
  setLeftProfileSelectedIndex: (index: number) => dispatch(thunkSetLeftProfileSelectedIndex(index)),
  setRightProfileNick: (nick: string) => dispatch(thunkSetRightProfileNick(nick)),
  setRightProfileSkinUrl: (skinUrl: string) => dispatch(thunkSetRightProfileSkinUrl(skinUrl)),
  setRightProfileSelectedIndex: (index: number) => dispatch(thunkSetRightProfileSelectedIndex(index)),
  setTag: (tag: string) => dispatch(thunkSetTag(tag)),
});

type WrappedMenuType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(WrappedMenu);