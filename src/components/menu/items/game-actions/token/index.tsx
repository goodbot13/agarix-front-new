import React, { FC } from 'react';
import css from './index.module.scss';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { changeGameServerToken, changeGameToken, changeSelectedGameTokenType } from 'redux/game/actions';
import { AppStateType } from 'redux/store';

import classNames from 'classnames';
import { GameSelectedGameTokenTypes } from 'redux/game/types';

const Token: FC<TokenType> = ({ blured, token, serverToken, selectedTokenType, changeToken, changeServerToken, changeSelectedGameTokenType }) => {
  return (
    <>
      <input 
        className={classNames({ 
          [css.token]: true, 
          [css.blured]: blured,
          [css.selected]: selectedTokenType === 'PARTY'
        })}
        placeholder="Token"
        value={token}
        onChange={(event) => changeToken(event.target.value)}
        onClick={() => changeSelectedGameTokenType('PARTY')}
        maxLength={6}
      ></input>
      <input
        className={classNames({ 
          [css.serverToken]: true,
          [css.blured]: blured,
          [css.selected]: selectedTokenType === 'SERVER' 
        })}
        placeholder="ws token"
        value={serverToken}
        onChange={(event) => changeServerToken(event.target.value)}
        onClick={() => changeSelectedGameTokenType('SERVER')}
        maxLength={7}
      ></input>
    </>
  )
}

const mapStateToProps = ({ game, UI }: AppStateType) => ({ 
  token: game.token,
  serverToken: game.gameServerToken,
  selectedTokenType: game.selectedGameTokenType,
  blured: UI.blured
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeToken: (token: string) => dispatch(changeGameToken(token)),
  changeServerToken: (token: string) => dispatch(changeGameServerToken(token)),
  changeSelectedGameTokenType: (type: GameSelectedGameTokenTypes) => dispatch(changeSelectedGameTokenType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);

type TokenType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;