import { FC } from 'react';

import css from './index.module.scss';

import classNames from 'classnames';

const CategoryWrapper: FC<CategoryWrapperType> = ({ shown, children }) => {
  return <div className={classNames({ [css.wrap]: true, [css.hidden]: !shown })}>{children}</div>;
};

export default CategoryWrapper;

type CategoryWrapperType = {
  shown: boolean;
};
