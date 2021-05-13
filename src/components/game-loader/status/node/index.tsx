import { FC } from "react";
import css from './index.module.scss';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Node: FC<TNode> = ({ name, text }) => {
  return (
    <div className={css.wrap}>
      <div className={css.name}>{name}</div>
      {text !== null ? (
        <div className={css.text}>{text}</div>
      ) : (
        <div><FontAwesomeIcon icon={faSpinner} spin/></div>
      )}
    </div>
  )
}

export default Node;

type TNode = {
  name: string,
  text: string | number | null
}