import { FC, useState } from "react";
import css from './index.module.scss';

import classNames from 'classnames';
import Storage from "api/storage/Storage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRedo, faTimes } from "@fortawesome/free-solid-svg-icons";

const Reset: FC = () => {
  const [resetClicked, setResetClicked] = useState(false);

  return (
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
          <button onClick={() => {
            Storage.reset();
            window.location.reload();
          }}>
            <FontAwesomeIcon icon={faCheck}/>
          </button>
          <button onClick={() => setResetClicked(false)}>
            <FontAwesomeIcon icon={faTimes}/>
          </button>
        </>
      )}
    </div>
  )
}

export default Reset;