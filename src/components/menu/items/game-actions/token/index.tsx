import { FC } from 'react';
import css from './index.module.scss';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { changeGameToken } from 'redux/game/actions';
import { AppStateType } from 'redux/store';

const Token: FC<TokenType> = ({ blured, token, changeToken }) => {
  return (
    <input 
      className={`${css.token} ${blured ? css.blured : ''}`}
      placeholder="Token"
      value={token}
      onChange={(event) => changeToken(event.target.value)}
      maxLength={7}
    ></input>
  )
}

const mapStateToProps = ({ game, UI }: AppStateType) => ({ 
  token: game.token,
  blured: UI.blured
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeToken: (token: string) => dispatch(changeGameToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Token);

type TokenType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;