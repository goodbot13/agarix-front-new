import { FC, useEffect } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

import { IProfile } from 'redux/profiles/types';

import Profile from './profile';

const ProfilesList: FC<ProfileListType> = ({ left, isMain, items, currentSelectedIndex, onProfileSelect }) => {
  let offset = 0;

  useEffect(() => {
    if (isMain) {
      if (!left) {
        offset = 5;
      }
    } else {
      if (left) {
        offset = 5;
      }
    } 
  });

  return (
    <div className={classNames({
      [css.wrap]: true,
      [css.left]: left,
      [css.right]: !left
    })}>
      {items.map(({ skinUrl }, i) => {
        return (
          <Profile 
            key={i + offset}
            index={i + offset}
            currentSelectedIndex={currentSelectedIndex}
            skinUrl={skinUrl}
            onSelect={() => onProfileSelect(i + offset)}
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