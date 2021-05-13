import { FC, useEffect, useRef } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

import { IProfile } from 'redux/profiles/types';

import Profile from './profile';

const ProfilesList: FC<ProfileListType> = ({ left, isMain, items, currentSelectedIndex, onProfileSelect }) => {
  const offset = useRef(0);

  useEffect(() => {
    if (isMain) {
      if (!left) {
        offset.current = 5;
      }
    } else {
      if (left) {
        offset.current = 5;
      }
    } 
  }, [isMain, left]);

  return (
    <div className={classNames({
      [css.wrap]: true,
      [css.left]: left,
      [css.right]: !left
    })}>
      {items.map(({ skinUrl }, i) => {
        return (
          <Profile 
            key={i + offset.current}
            index={i + offset.current}
            currentSelectedIndex={currentSelectedIndex}
            skinUrl={skinUrl}
            onSelect={() => onProfileSelect(i + offset.current)}
          />
        )
      })}
    </div>
  )
}

export default ProfilesList;

type ProfileListType = {
  left?: boolean,
  isMain: boolean,
  items: Array<IProfile>,
  currentSelectedIndex: number,
  onProfileSelect: (index: number) => void
}