import css from './index.module.scss';

const PlaySpectate = () => {
  return (
    <div className={css.wrap}>
      <button 
        className={`${css.play}`}
      ></button>
      <button 
        className={css.spectate}
      ></button>
    </div>
  )
}

export default PlaySpectate;