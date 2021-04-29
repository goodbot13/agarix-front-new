import { FC } from 'react';
import css from './index.module.scss';

import SaveExportImportReset from './save-export-import-reset';

import { connect } from 'react-redux';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import { SettingsType } from 'redux/UI/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faKeyboard, faPalette, faPaw } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import { thunkSetSettingsType } from 'redux/UI/thunks';

const SettingsHeader: FC<SettingsHeaderType> = ({ settingsType, setSettingsType }) => {
  return (
    <header className={css.categories}>
      <section>
        <button
          className={classNames({ [css.selected]: settingsType === 'GAME' })}
          onClick={() => setSettingsType('GAME')}
        >
          <FontAwesomeIcon icon={faGamepad} /> Game
        </button>
        <button
          className={classNames({ [css.selected]: settingsType === 'THEMING' })}
          onClick={() => setSettingsType('THEMING')}
        >
          <FontAwesomeIcon icon={faPalette} /> Theming
        </button>
        <button
          className={classNames({ [css.selected]: settingsType === 'HOTKEYS' })}
          onClick={() => setSettingsType('HOTKEYS')}
        >
          <FontAwesomeIcon icon={faKeyboard} /> Hotkeys
        </button>
        <button
          className={classNames({ [css.selected]: settingsType === 'UI' })}
          onClick={() => setSettingsType('UI')}
        >
          <FontAwesomeIcon icon={faPaw} /> Interface
        </button>
      </section>
      <SaveExportImportReset />
    </header>
  );
};

const mapStateToProps = ({ UI }: AppStateType) => ({
  settingsType: UI.settingsType,
});

const mapDistpatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsType: (type: SettingsType) => dispatch(thunkSetSettingsType(type)),
});

export default connect(mapStateToProps, mapDistpatchToProps)(SettingsHeader);

type SettingsHeaderType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDistpatchToProps>;
