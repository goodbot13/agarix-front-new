import KeyboardGameplay from "api/Keyboard/Gameplay/KeyboardGameplay";
import { FC, useState } from "react";
import KeyboardBinder from "../keyboard-binder";
import classNames from 'classnames';
import css from './index.module.scss';

const Command: FC<TCommand> = ({ name, id, keybind, message, onChange }) => {
  const [showError, setShowError] = useState(false);
  const [keyUsed, setKeyUsed] = useState('');

  return (
    <div className={css.wrap}>
      <div className={css.top}>
        <div className={css.topWrapper}>
          <div>{name} #{id + 1}</div>
          <KeyboardBinder 
            text={''} 
            value={keybind} 
            onChage={(newKeybind) => {
              if (KeyboardGameplay.isUsedByKeyboard(newKeybind)) {
                setKeyUsed(newKeybind);
                setShowError(true);
                setTimeout(() => setShowError(false), 4000);
              } else {
                setKeyUsed('');
                setShowError(false);
                onChange(id, message, newKeybind);
              }
            }} 
          />
        </div>
        <div className={css.text}>
          <input
            placeholder="Command text"
            value={message}
            onChange={(e) => onChange(id, e.target.value, keybind)}
          ></input>
        </div>
      </div>
      <div className={classNames({ [css.error]: true, [css.shown]: showError })}>
        Key -{">"} {keyUsed} {"<"}- is already used on "keyboard" page. Uset it to be able to use it as a command key
      </div>
    </div>
  )
}

type TCommand = {
  name: string,
  id: number,
  keybind: string,
  message: string,
  onChange: (id: number, message: string, key: string) => void
}

export default Command;
