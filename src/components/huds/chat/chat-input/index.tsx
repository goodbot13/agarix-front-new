import { FC, useEffect, useRef, useState } from "react";
import css from './index.module.scss';

import { connect } from "react-redux";
import { AppStateType } from "redux/store";

import classNames from 'classnames';

const ChatInput: FC<TChatInput> = ({ shown }) => {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shown) {
      ref.current?.focus();
    } else {
      if (!ref.current?.value) {
        return;
      }

      window.GameAPI?.sendMessage(ref.current.value);
      ref.current.value = '';
      ref.current.blur();
    }
  }, [shown]);

  return (
    <div 
      className={classNames({
        [css.wrap]: true,
        [css.shown]: shown
      })}
    >
      <input 
        ref={ref} 
        maxLength={80}
      ></input>
    </div>
  )
} 

const mapStateToProps = ({ UI }: AppStateType) => ({
  shown: UI.inputMessageShown,
});

export default connect(mapStateToProps)(ChatInput);

type TChatInput = ReturnType<typeof mapStateToProps>;
