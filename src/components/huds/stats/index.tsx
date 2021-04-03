import { rgbToCssString } from "api/utils";
import { FC } from "react";
import { connect } from "react-redux";
import { AppStateType } from "redux/store";
import Frametime from "./frametime";
import css from './index.module.scss';

const Stats: FC<StatsType> = ({
  shown,
  fps,
  frametime,
  loss,
  backgroundColor,
  backdropBlur,
  position,
  statsValues
}) => {

  const pos = {
    left: '0',
    bottom: '0',
    transform: '',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  }

  if (position === 'BOTTOM LEFT') {
    pos.transform = '';
    pos.borderTopRightRadius = '4px';
  } else if (position === 'BOTTOM CENTER') {
    pos.left = '50%';
    pos.transform = 'translateX(-50%)';
    pos.borderTopLeftRadius = '4px';
    pos.borderTopRightRadius = '4px';
  } else if (position === 'LEADERBOARD') {

  }

  return (
    shown ? <div 
      className={css.wrap}
      style={{
        backgroundColor: rgbToCssString(backgroundColor),
        boxShadow: `0 0 4px ${rgbToCssString(backgroundColor)}`,
        backdropFilter: backdropBlur ? `blur(7px)` : '',
        ...pos
      }}
    >
      {frametime && <Frametime />}
      {fps && (
        <div 
          className={css.fps}
          style={{
            color: statsValues.fps < 30 ? '#FA8072' 
              : statsValues.fps < 50 ? '#faf172' 
              : 'white'
          }}
        >
          FPS: {statsValues.fps}
        </div>
      )}
      {loss && (
        <div 
          className={css.loss}
          style={{
            color: statsValues.loss > 32 ? '#FA8072' 
              : statsValues.loss > 8 ? '#faf172' 
              : 'white'
          }}
        >
          LOSS: {statsValues.loss}%
        </div>
      )}
    </div> : null
  )
}

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  ...settings.UI.stats,
  statsValues: UI.stats
});

export default connect(mapStateToProps)(Stats);

type StatsType = ReturnType<typeof mapStateToProps>;