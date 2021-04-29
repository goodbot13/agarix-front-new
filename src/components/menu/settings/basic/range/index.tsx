import { FC } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

const Range: FC<TRange> = ({ text, value, hint, disabled, onChange, from, to }) => {
  const isEven = from % 1 === 0 && to % 1 === 0;

  return (
    <div className={classNames({ [css.wrap]: true, [css.disabled]: disabled })}>
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>
      <div className={css.right}>
        <div className={css.value}>{value}</div>
        <div className={css.rangeWrap}>
          <input
            className={css.input}
            type="range"
            min={from}
            max={to}
            value={value}
            onChange={(e) => onChange(+e.target.value)}
            step={isEven ? 1 : 0.01}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Range;

type TRange = {
  text: string;
  value: number;
  disabled?: boolean;
  hint?: string;
  from: number;
  to: number;
  onChange: (newValue: number) => void;
};
