import { FC } from 'react';
import css from './index.module.scss';

import classNames from 'classnames';

import { IProfile } from 'redux/profiles/types';

import Profile from './profile';

const ProfilesList: FC<ProfileListType> = ({ left, items, currentSelectedIndex, onProfileSelect }) => {
  return (
    <div className={classNames({
      [css.wrap]: true,
      [css.left]: left,
      [css.right]: !left
    })}>
      {items.map(({ skinUrl }, i) => {
        return (
          <Profile 
            key={i}
            index={i}
            currentSelectedIndex={currentSelectedIndex}
            skinUrl={skinUrl}
            onSelect={() => onProfileSelect(i)}
          />
        )
      })}
    </div>
  )
}

export default ProfilesList;

type ProfileListType = {
  left?: boolean,
  items: Array<IProfile>,
  currentSelectedIndex: number,
  onProfileSelect: (index: number) => void
}