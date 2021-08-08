import { faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TGameMode } from 'api/types';
import DelayedRenderComponent from 'components/StandartComponents/DelayedRenderCompnent';
import { FC, useState } from 'react';
import { connect } from 'react-redux';
import { thunkChangeGameServer } from 'redux/game/thunks';
import { GameServerLocationTypes, IGameServer, MixedGamesServers } from 'redux/game/types';
import { AppStateType, ThunkRootDispatchType } from 'redux/store';
import SelectList from '../select-list';
import css from './index.module.scss';

const GameServer: FC<GameServerType> = ({ servers, currentServerIndex, changeGameServer, gameMode }) => {
  const [selectGameServer, setSelectGameServer] = useState(false);

  const transformServerName = (name: MixedGamesServers): string => {
    switch (name) {
      case 'North America': return 'NA';
      case 'South America': return 'SA';
      case 'East Asia': return 'EA';
      case 'FeelForeverAlone': return 'Feel F.A';
      
      default: return name;
    }
  }

  const agarServers: Array<GameServerLocationTypes> = [
    'China', 'East Asia', 'Europe', 'North America', 'Oceania', 'Russia', 'South America', 'Turkey'
  ];

  return (
    <>
      <button
        className={`${css.gameServer} ${selectGameServer ? css.active : ''}`}
        onClick={() => setSelectGameServer((prevState) => !prevState)}
      >
        <div className={css.serverName}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {transformServerName(servers[gameMode === ':private' ? currentServerIndex + agarServers.length : currentServerIndex].location)}
        </div>
        <div className={css.playersAmount}>
          {gameMode === ':private' ? null : (
            <>
              <FontAwesomeIcon icon={faUsers} />
              {servers[currentServerIndex].playersAmount}
            </>
          )}
        </div>
      </button>
      <DelayedRenderComponent rendered={selectGameServer} hideDelayMs={150}>
        <SelectList 
          itemsList={servers.filter((server) => {
            // @ts-ignore
            return gameMode === ':private' ? !agarServers.includes(server.location) : agarServers.includes(server.location);
          }).map((server) => {
            if (gameMode === ':private') {
              return `${server.location}`;
            } else {
              return `${server.location} (${server.playersAmount} players)`;
            }
          })}
          selectedIndex={currentServerIndex}
          shown={selectGameServer}
          onChange={(name, index) => changeGameServer(index as number)}
        />
      </DelayedRenderComponent>
    </>
  )
}

const mapStateToProps = ({ game }: AppStateType) => ({
  servers: game.servers,
  currentServerIndex: game.currentServerIndex,
  gameMode: game.mode 
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  changeGameServer: (index: number) => dispatch(thunkChangeGameServer(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameServer);

type GameServerType = {
  servers: Array<IGameServer>,
  currentServerIndex: number,
  changeGameServer: (index: number) => void,
  gameMode: TGameMode
}