import { FC } from "react";
import css from './index.module.scss';

import { TStatsTabStatus } from "redux/settings/UI/stats/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faSpinner, faSyncAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const Status: FC<TStatus> = ({ tabName, status, onReconnect }) => {
  return (
    <div className={css.wrap}>
      <div className={css.name}>{tabName}:</div>
      <div className={css.status}>
        {status === 'CONNECTED' && <FontAwesomeIcon icon={faCheckDouble} style={{ color: '#72fa77' }}/>}
        {status === 'DISCONNECTED' && <FontAwesomeIcon icon={faTimes} style={{ color: '#fa8072'  }}/>}
        {status === 'CONNECTING' && <FontAwesomeIcon icon={faSpinner} spin style={{ color: '#72d3fa' }}/>}
      </div>
      <div 
        className={css.reconnect} 
        style={{
          pointerEvents: status !== 'CONNECTING' ? 'initial' : 'none'
        }}
        onClick={onReconnect}
      >
        <FontAwesomeIcon icon={faSyncAlt} style={{
          fontSize: 13,
          color: '#72d3fa',
        }}/>
      </div>
    </div>
  )
}

export default Status;

type TStatus = {
  tabName: string,
  status: TStatsTabStatus,
  onReconnect: () => void
}