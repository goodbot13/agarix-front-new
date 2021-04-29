import { FC } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

const Switch: FC<SwitchType> = ({ text, enabled, onChange, hint, disabled, main }) => {
  return (
    <div
      className={classNames({
        [css.wrap]: true,
        [css.disabled]: disabled,
        [css.main]: main,
      })}
    >
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>
      <label className={css.label}>
        <div className={css.toggle}>
          <input
            className={css.toggleState}
            type="checkbox"
            name="check"
            value="check"
            checked={enabled}
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className={css.indicator}></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;

type SwitchType = {
  text: string;
  hint?: string;
  enabled: boolean;
  disabled?: boolean;
  main?: boolean;
  onChange: (enabled: boolean) => void;
};
