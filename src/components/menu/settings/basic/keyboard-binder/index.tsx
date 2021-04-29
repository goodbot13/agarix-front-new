import { transformCode } from 'api/Keyboard/Listener';
import { FC, KeyboardEvent } from 'react';
import css from './index.module.scss';

const KeyboardBinder: FC<KeyboardBinderType> = ({ text, hint, value, onChage }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { code, ctrlKey, altKey, shiftKey } = e;
    const value = transformCode(code, ctrlKey, altKey, shiftKey);

    // ignore
    if (code === 'Escape' || code === 'Enter') {
      return;
    }

    // unbind
    if (code === 'Delete') {
      onChage('[NOT SET]');
      return;
    }

    onChage(value);
  };

  return (
    <div className={css.wrap}>
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>
      <input
        value={value ? value : '[NOT SET]'}
        onKeyDown={handleKeyDown}
        onChange={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default KeyboardBinder;

type KeyboardBinderType = {
  text: string;
  hint?: string;
  value: string;
  onChage: (value: string) => void;
};
