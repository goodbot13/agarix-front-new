import { FC } from 'react';
import css from './index.module.scss';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';

const Select: FC<SelectType> = ({ items, selectedItem, onChange, text, hint, disabled }) => {
  const index = items.indexOf(selectedItem);

  const onLeftClick = () => {
    // max left position reached
    if (index === 0) {
      return;
    }

    onChange(items[index - 1]);
  }

  const onRightClick = () => {
    // max right position reached
    if (index === items.length - 1) {
      return;
    }

    onChange(items[index + 1]);
  }

  return (
    <div className={classNames({ [css.wrap]: true, [css.disabled]: disabled })}>
      <div className={css.text}>
        {text}
        {hint && <span className={css.hint}>{hint}</span>}
      </div>  
      <div className={css.right}>
        <button onClick={onLeftClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className={css.valuesWrap}>
          <div 
            className={css.values}
            style={{ marginLeft: -125 * index }}
          >
            {items.map((item, i) => (
              <div 
                key={item}
                style={{ left: 125 * i }}
                className={css.value}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <button onClick={onRightClick} >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default Select;

type SelectType = {
  items: Array<any>,
  selectedItem: any,
  onChange: (value: any) => void,
  text: string,
  hint?: string,
  disabled?: boolean
}