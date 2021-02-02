import { FC, useState } from 'react';
import css from './index.module.scss';

import { faArrowDown, faArrowUp, faCheck, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Dispatch } from 'redux';
import { setSettingsShown } from 'redux/UI/actions';
import { connect } from 'react-redux';

import classNames from 'classnames';

const SaveExportImportReset: FC<SaveExportImportResetType> = ({ setSettingsShown }) => {
  const [resetClicked, setResetClicked] = useState(false);

  return (
    <section className={css.wrap}>
      <button 
        onClick={() => setSettingsShown(false)}
        className={css.save}
      >
        <FontAwesomeIcon icon={faCheck} /> Save
      </button>
      <button>
        <FontAwesomeIcon icon={faArrowUp} /> Import
      </button>
      <button>
        <FontAwesomeIcon icon={faArrowDown} /> Export
      </button>
      <div className={classNames({
        [css.resetOutWrapper]: true,
        [css.resetClicked]: resetClicked
      })}>
        {!resetClicked ? (
          <button 
            onClick={() => setResetClicked(true)}
            className={css.reset}
          >
            <FontAwesomeIcon icon={faRedo} /> Reset
          </button>
        ) : (
          <>
            <span>Reset?</span>
            <button>
              <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button onClick={() => setResetClicked(false)}>
              <FontAwesomeIcon icon={faTimes}/>
            </button>
          </>
        )}
      </div>
    </section>
  )
}

const mapDistpatchToProps = (dispatch: Dispatch) => ({
  setSettingsShown: (shown: boolean) => dispatch(setSettingsShown(shown))
});

export default connect(null, mapDistpatchToProps)(SaveExportImportReset);

type SaveExportImportResetType = ReturnType<typeof mapDistpatchToProps>;