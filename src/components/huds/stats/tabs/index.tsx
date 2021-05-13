import { FC } from "react";
import css from './index.module.scss';
import { TStatsTabStatus } from "redux/settings/UI/stats/types";
import Status from "./status";

const Tabs: FC<TTabs> = ({ first, second, spectator, multiboxEnabled }) => {
  return (
    <div className={css.wrapper}>
      <Status 
        tabName='Main' 
        status={first} 
        onReconnect={() => window.GameAPI.reconnectFirstTab()}
      />
      {multiboxEnabled && (
        <Status 
          tabName='Multi' 
          status={second} 
          onReconnect={() => window.GameAPI.reconnectSecondTab()}
        />
      )}
      <Status 
        tabName='Spectator' 
        status={spectator} 
        onReconnect={() => window.GameAPI.reconnectSpectator()}
      />
    </div>
  )
}

export default Tabs;

type TTabs = {
  first: TStatsTabStatus,
  second: TStatsTabStatus,
  spectator: TStatsTabStatus,
  multiboxEnabled: boolean,
}