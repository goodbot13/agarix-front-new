import { FC, useState } from 'react';

import css from './index.module.scss';

import { ChromePicker } from 'react-color';

import { RGB } from 'redux/settings/theming/types';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Colorpick: FC<ColorpickType> = ({ text, disabled, hint, color, onChange }) => {
  const [pickColor, setPickColor] = useState(false);
  const [localColor, setLocalColor] = useState(color);

  return (
    <div className={css.wrap}>
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>  
      <div className={classNames({ [css.picker]: true, [css.picking]: pickColor })}>
        <button 
          className={css.colorButton}
          onClick={() => setPickColor(true)}
          style={{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`}}
        ></button>
        <div className={css.chromePickerWrapper}>
          <ChromePicker 
            color={{
              r: localColor.red, 
              g: localColor.green, 
              b: localColor.blue 
            }}
            onChange={({ rgb: { r, g, b } }) => setLocalColor({
              red: r,
              green: g,
              blue: b
            })}
            onChangeComplete={({ rgb: { r, g, b } }) => onChange({
              red: r,
              green: g,
              blue: b
            })}
          />
          <button 
            className={css.pickerSave}
            onClick={() => setPickColor(false)}
          >
            <FontAwesomeIcon icon={faCheck}/> Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Colorpick;

type ColorpickType = {
  text: string,
  disabled?: boolean,
  hint?: string,
  color: RGB,
  onChange: (color: RGB) => void
}