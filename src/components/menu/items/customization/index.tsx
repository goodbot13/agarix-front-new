import { FC } from 'react';
import css from './index.module.scss';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';

import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { setUIBlured } from 'redux/UI/actions';
import { thunkSetSettingsShown } from 'redux/UI/thunks';
import { SettingsType } from 'redux/UI/types';

const Customization: FC<CustomizationType> = ({ blured, setUIBlured, setSettingsShown }) => {
  return (
    <div className={css.wrap}>
      <button 
        className={css.settings}
        onClick={() => setSettingsShown(true, 'GAME')}
      ></button>
      <button 
        className={css.hotkeys}
        onClick={() => setSettingsShown(true, 'HOTKEYS')}
      ></button>
      <button 
        className={css.theming}
        onClick={() => setSettingsShown(true, 'THEMING')}
      ></button>
      <button 
        className={`${css.blur} ${blured ? css.active : ''}`}
        onClick={() => setUIBlured(!blured)}
      >
        <FontAwesomeIcon icon={faEyeSlash}/>
      </button>
    </div>
  )
}

const mapStateToProps = ({ UI }: AppStateType) => ({
  blured: UI.blured
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setUIBlured: (blured: boolean) => dispatch(setUIBlured(blured)),
  setSettingsShown: (shown: boolean, type: SettingsType) => dispatch(thunkSetSettingsShown(shown, type))
});

type CustomizationType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Customization);