import { FC, useEffect, useRef, useState } from "react";
import css from './index.module.scss';

import { connect } from "react-redux";
import { AppStateType } from "redux/store";

import classNames from 'classnames';

const ChatInput: FC<TChatInput> = ({ shown }) => {

  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    if (shown) {
      ref.current?.focus();
    } else {
      if (!text) {
        return;
      }

      window.GameAPI?.sendMessage(text);
      setText('');
      ref.current?.blur();
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
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </div>
  )
} 

const mapStateToProps = ({ UI }: AppStateType) => ({
  shown: UI.inputMessageShown,
});

export default connect(mapStateToProps)(ChatInput);

type TChatInput = ReturnType<typeof mapStateToProps>;
