import { FC } from "react";
import css from './index.module.scss';

import { AppStateType } from "redux/store";
import { connect } from "react-redux";
import { rgbToCssString } from "api/utils";

const Leaderboard: FC<LeaderboardType> = ({ 
  shown, 
  displayAmount, 
  displayPosition,
  showMass, 
  backdropBlur, 
  backgroundColor, 
  players,
  meColor
}) => {

  let me = false;
  const playerMe = players.filter((player) => player.isMe)[0];

  // @ts-ignore
  players = players.map((player, i) => {

    if (i < displayAmount) {
      if (player.isMe) {
        me = true;
      }

      return player;
    }

    if (!me) {
      return playerMe;
    }

    return null;

  }).filter((player) => player).slice(0, displayAmount + 1);

  return (
    shown ? <div 
      className={css.wrap}
      style={{ 
        backgroundColor: rgbToCssString(backgroundColor),
        boxShadow: `0 0 4px ${rgbToCssString(backgroundColor)}`,
        backdropFilter: backdropBlur ? `blur(7px)` : ''
      }}
    >
      <div className={css.players}>
        {players.map((player) => (
          <div 
            className={css.player}
            style={{ color: player.isMe ? `rgb(${meColor.red}, ${meColor.green}, ${meColor.blue})` : 'white'}}
            key={player.accountId}
          >
            {displayPosition && <div className={css.position}>{player.position}</div>}
            <div className={css.nick}>{player.nick}</div>
          </div>
        ))}
      </div>
    </div> : null
  )
}

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  ...settings.UI.leaderboard,
  players: UI.leaderboardPlayers
});

export default connect(mapStateToProps)(Leaderboard);

type LeaderboardType = ReturnType<typeof mapStateToProps>;

