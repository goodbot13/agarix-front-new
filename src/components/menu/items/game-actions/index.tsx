import CreateGame from './create-game';
import GameMode from './game-mode';
import GameServer from './game-server';
import css from './index.module.scss';
import JoinGame from './join-game';
import Token from './token';

const GameActions = () => {
  return (
    <div className={css.wrap}>
      <div className={css.top}>
        <GameMode />
        <GameServer />
      </div>
      <div className={css.middle}>
        <Token />
      </div>
      <div className={css.bottom}>
        <CreateGame />
        <JoinGame />
      </div>
    </div>
  )
}

export default GameActions; 