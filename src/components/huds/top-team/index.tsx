import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';

import { faCookieBite, faEye, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { numberToK, rgbToCssString } from 'api/utils';

import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import { ITopTeamPlayer } from 'redux/UI/types';

const TopTeam: FC<TopTeamType> = ({ 
  shown, 
  displayAmount, 
  totalMass, 
  shortMass,
  displayPlayerMass, 
  totalPlayers, 
  backgroundColor, 
  backdropBlur, 
  players 
}) => {

  const [totalMassValue, setTotalMassValue] = useState(0 as number);
  const [_players, _setPlayers] = useState([] as ITopTeamPlayer[]);

  useEffect(() => {
    const mass = players.map((player) => player.mass).reduce((prev, current) => {
      return prev + current;
    }, 0);

    const tmp = players.filter((player) => player.isAlive)
                        .slice(0, displayAmount)
                        .sort((a, b) => b.mass - a.mass);

    _setPlayers(tmp);
    setTotalMassValue(mass);
  }, [players]);

  return (
    shown ? (
      <div 
        className={css.wrap}
        style={{
          backgroundColor: rgbToCssString(backgroundColor),
          boxShadow: `0 0 4px ${rgbToCssString(backgroundColor)}`,
          backdropFilter: backdropBlur ? `blur(7px)` : ''
        }}
      >
        {(totalMass || totalPlayers) && (
          <div className={css.stats}>
            {totalMass && <div className={css.totalMass}>
              <FontAwesomeIcon 
                icon={faCookieBite}
                style={{ marginRight: 4 }} 
              /> 
              Mass: {shortMass ? numberToK(totalMassValue) : totalMassValue}
            </div>}
            {totalPlayers && <div className={css.totalPlayers}>
              <FontAwesomeIcon 
                icon={faUsers}
                style={{ marginRight: 1 }}
              /> Players: {players.length}
              <FontAwesomeIcon 
                style={{ marginLeft: 8 }}
                icon={faEye} 
              /> {[displayAmount]}
            </div>}
          </div>
        )}
        <div className={css.players}>
          {_players.length ? _players.map((player) => (
              <div
                className={css.player}
                key={player.id}
              >
                {displayPlayerMass && <div className={css.mass}>
                <FontAwesomeIcon 
                  icon={faCookieBite}
                  style={{ marginRight: 2 }} 
                /> [{shortMass ? numberToK(player.mass) : player.mass}]</div>} 
                <div className={css.nick}>{player.nick}</div>
              </div>
            )
          ) : (
            <div className={css.noPlayers}>No players</div>
          )}
        </div>
      </div>
    ) : null
  )
}

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  ...settings.UI.topTeam,
  players: UI.topTeamPlayers
});

export default connect(mapStateToProps)(TopTeam);

type TopTeamType = ReturnType<typeof mapStateToProps>;