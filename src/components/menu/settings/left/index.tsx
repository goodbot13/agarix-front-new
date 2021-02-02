import { FC } from 'react';
import css from './index.module.scss';

const Left: FC = ({ children }) => {
  return (
    <div className={css.wrap}>
      {children}
    </div>
  )
}

export default Left;