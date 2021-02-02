import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

const SelectList: FC<SelectListType> = ({ left, itemsList, selectedName, selectedIndex, shown, onChange }) => {
  const [_shown, _setShown] = useState(false);

  useEffect(() => {
    if (shown) {
      setTimeout(() => _setShown(true), 33);
    } else {
      _setShown(false);
    }
  }, [shown]);

  return (
    <div className={`${css.wrap} ${left ? css.left : css.right} ${_shown ? css.shown : css.hidden}`}>
      {itemsList.map((item, i) => {
        return (
          <button 
            className={`${ 
              selectedName 
                ? item === selectedName ? css.selected : ''
                : i === selectedIndex ? css.selected : ''
            }`}
            key={item}
            onClick={() => onChange(item, i)}
          >{item}</button>
        )
      })}
    </div>
  )
}

export default SelectList;

type SelectListType = {
  left?: boolean,
  itemsList: Array<string>,
  selectedName?: string,
  selectedIndex?: number,
  shown: boolean,
  onChange: (value: string | any, index?: number) => void
}