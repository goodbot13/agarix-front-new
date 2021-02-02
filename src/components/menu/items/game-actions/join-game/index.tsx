import css from './index.module.scss';

const JoinGame = () => {
  return (
    <div className={css.wrap}>
      <button 
        className={css.joinGame}
      >Join</button>
    </div>
  )
}

export default JoinGame;