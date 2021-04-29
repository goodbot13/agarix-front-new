import { FC, useEffect, useState } from 'react';

import css from './index.module.scss';

import { ChromePicker, ColorResult } from 'react-color';

import { RGB } from 'redux/settings/theming/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import { rgbToCssString } from 'api/utils';

const Colorpick: FC<ColorpickType> = ({ text, disabled, hint, color, onChange, useAlpha }) => {
  const [pickColor, setPickColor] = useState(false);
  const [localColor, setLocalColor] = useState(color);

  const getColor = ({ rgb }: ColorResult): RGB => {
    if (useAlpha) {
      return {
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b,
        alpha: rgb.a,
      };
    } else {
      return {
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b,
      };
    }
  };

  useEffect(() => {
    if (disabled) {
      setPickColor(false);
    }
  }, [disabled]);

  return (
    <div className={classNames({ [css.wrap]: true, [css.disabled]: disabled })}>
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>
      <div className={classNames({ [css.picker]: true, [css.picking]: pickColor })}>
        <button
          className={css.colorButton}
          onClick={() => setPickColor(true)}
          style={{ backgroundColor: rgbToCssString(color) }}
        ></button>
        <div className={css.chromePickerWrapper}>
          <ChromePicker
            color={
              useAlpha
                ? {
                    r: localColor.red,
                    g: localColor.green,
                    b: localColor.blue,
                    a: localColor.alpha,
                  }
                : {
                    r: localColor.red,
                    g: localColor.green,
                    b: localColor.blue,
                  }
            }
            onChange={(rgb) => setLocalColor(getColor(rgb))}
            onChangeComplete={(rgb) => onChange(getColor(rgb))}
          />
          <button className={css.pickerSave} onClick={() => setPickColor(false)}>
            <FontAwesomeIcon icon={faCheck} /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Colorpick;

type ColorpickType = {
  text: string;
  disabled?: boolean;
  hint?: string;
  color: RGB;
  useAlpha?: boolean;
  onChange: (color: RGB) => void;
};
