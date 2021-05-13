import { FC, useEffect, useState } from 'react';
import css from './index.module.scss';
import classNames from 'classnames';
import Node from './node';

const Status: FC = () => {
  const [currentStatus, setCurrentStatus] = useState<TCurrentStatus>('MASTER');

  const [texture, setTextureName] = useState(null);
  const [clientVersion, setClientVersion] = useState(null);
  const [protocolVersion, setProtocolVersion] = useState(null);
  const [supportProtoVersion, setSupportProtoVersion] = useState(null);
  const [serverStatus, setServerStatus] = useState(null);
  const [serverVersion, setServerVersion] = useState(null);

  useEffect(() => {
    (window.FrontAPI as any).setTextureName = setTextureName;
    (window.FrontAPI as any).setClientVersion = setClientVersion;
    (window.FrontAPI as any).setProtocolVersion = setProtocolVersion;
    (window.FrontAPI as any).setSupportProtoVersion = setSupportProtoVersion;
    (window.FrontAPI as any).setServerStatus = setServerStatus;
    (window.FrontAPI as any).setServerVersion = setServerVersion;
  }, []);

  useEffect(() => {
    if (clientVersion && protocolVersion && supportProtoVersion && currentStatus === 'MASTER') {
      setCurrentStatus('TEXTURES');
    }

    if (texture === 'Done') {
      setCurrentStatus('SERVER');
    }
  }, [clientVersion, protocolVersion, supportProtoVersion, currentStatus, texture]);

  return (
    <div className={css.wrapper}>
      <div className={classNames({
        [css.node]: true,
        [css.active]: currentStatus === 'MASTER'
      })}>
        <div className={css.header}>MASTER</div>
        <div className={css.details}>
          <Node name='Client:' text={clientVersion} /> 
          <Node name='Protocol:' text={protocolVersion} /> 
          <Node name='Support:' text={supportProtoVersion} /> 
        </div>
      </div>
      <div className={css.between}></div>
      <div className={classNames({
        [css.node]: true,
        [css.active]: currentStatus === 'TEXTURES'
      })}>
        <div className={css.header}>Textures</div>
        <div className={css.details}>
          <Node name='Generating' text={texture} /> 
        </div>
      </div>
      <div className={css.between}></div>
      <div className={classNames({
        [css.node]: true,
        [css.active]: currentStatus === 'SERVER'
      })}>
        <div className={css.header}>SERVER</div>
        <div className={css.details}>
          <Node name='Status' text={serverStatus} /> 
          <Node name='Version' text={serverVersion} /> 
        </div>
      </div>
    </div>
  )
}

export default Status;

type TCurrentStatus = 'MASTER' | 'SERVER' | 'TEXTURES';