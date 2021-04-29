import { FC } from 'react';
import css from './index.module.scss';

const Hint: FC<HintType> = ({ text }) => {
  return <div className={css.wrap}>{text}</div>;
};

export default Hint;

type HintType = {
  text: string;
};
