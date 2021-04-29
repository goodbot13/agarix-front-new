import { FC } from 'react';
import css from './index.module.scss';

import { faArrowDown, faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';

import { thunkSetSettingsShown } from 'redux/UI/thunks';
import { ThunkRootDispatchType } from 'redux/store';

import Reset from './reset';

const SaveExportImportReset: FC<SaveExportImportResetType> = ({ setSettingsShown }) => {
  return (
    <section className={css.wrap}>
      <button onClick={() => setSettingsShown(false)} className={css.save}>
        <FontAwesomeIcon icon={faCheck} /> Save
      </button>
      <button style={{ opacity: 0.33, pointerEvents: 'none' }}>
        <FontAwesomeIcon icon={faArrowUp} /> Import
      </button>
      <button style={{ opacity: 0.33, pointerEvents: 'none' }}>
        <FontAwesomeIcon icon={faArrowDown} /> Export
      </button>
      <Reset />
    </section>
  );
};

const mapDistpatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setSettingsShown: (shown: boolean) => dispatch(thunkSetSettingsShown(shown)),
});

export default connect(null, mapDistpatchToProps)(SaveExportImportReset);

type SaveExportImportResetType = ReturnType<typeof mapDistpatchToProps>;
