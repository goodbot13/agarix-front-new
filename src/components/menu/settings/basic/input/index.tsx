import { FC } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

const Input: FC<InputType> = ({ text, value, disabled, onChange }) => {
  return (
    <div className={classNames({ [css.wrap]: true, [css.disabled]: disabled })}>
      <div className={css.text}>{text}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPaste={(e) => {
          e.preventDefault();
          onChange(e.clipboardData.getData('Text'));
        }}
      ></input>
    </div>
  );
};

export default Input;

type InputType = {
  text: string;
  value: string;
  disabled?: boolean;
  onChange: (newValue: string) => void;
};
