import { FC } from 'react';
import css from './index.module.scss';

const Right: FC = ({ children }) => {
  return (
    <div className={css.wrap}>
      {children}
    </div>
  )
}

export default Right;