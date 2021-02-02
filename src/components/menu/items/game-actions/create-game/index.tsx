import { useState } from 'react';
import css from './index.module.scss';

const CreateGame = () => {
  const [creating, setCreating] = useState(false);

  return (
    <div className={css.wrap}>
      <button 
        className={css.create}
      >Create</button>
    </div>
  )
}

export default CreateGame;