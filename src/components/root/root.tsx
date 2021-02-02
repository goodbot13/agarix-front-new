import './root.module.scss';

import Menu from 'components/menu';
import GameLoader from '../game-laoder';

const Root = () => {
  return (
    <>
      <GameLoader />
      <Menu />
    </>
  );
}

export default Root;
