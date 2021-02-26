import { FC } from "react";
import css from './index.module.scss';

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { TLoginType } from "redux/profiles/types";
import { AppStateType, ThunkRootDispatchType } from "redux/store";
import { thunkSetLeftProfileLoginType, thunkSetRightProfileLoginType } from "redux/profiles/thunks";

const Login: FC<TLogin> = ({ 
  leftType, 
  rightType, 
  fbLoggedIn,
  googleLoggedIn,
  setLeftProfileLoginType, 
  setRightProfileLoginType 
}) => {
  return (
    <div className={css.wrap}>
      <div className={css.login}>
        <button onClick={() => {
          if (fbLoggedIn) {
            window.GameAPI?.logOutWithFb();
          } else {
            window.GameAPI?.logInWithFb();
          }
        }}>
          <FontAwesomeIcon icon={faFacebook}/> {fbLoggedIn ? 'Log out' : 'Log in'}
        </button>
        <button onClick={() => {
          if (googleLoggedIn) {
            window.GameAPI?.logOutWithGoogle();
          } else {
            window.GameAPI?.logInWithGoogle();
          }
        }}>
          <FontAwesomeIcon icon={faGoogle}/>  {googleLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
      <div className={css.tabsLoginType}>
        <button onClick={() => {
          setLeftProfileLoginType('FACEBOOK');
          setRightProfileLoginType('GOOGLE');
        }}>
          <FontAwesomeIcon icon={faFacebook}/> {leftType === 'FACEBOOK' ? 'Main tab' : 'Second tab'}
        </button>
        <button onClick={() => {
          setLeftProfileLoginType('GOOGLE');
          setRightProfileLoginType('FACEBOOK');
        }}>
          <FontAwesomeIcon icon={faGoogle}/> {rightType === 'FACEBOOK' ? 'Main tab' : 'Second tab'}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ profiles }: AppStateType) => ({
  leftType: profiles.leftProfileLoginType,
  rightType: profiles.rightProfileLoginType,
  fbLoggedIn: profiles.facebookLoggedIn,
  googleLoggedIn: profiles.googleLoggedIn
});

const mapDispatchToProps = (dispatch: ThunkRootDispatchType) => ({
  setLeftProfileLoginType: (type: TLoginType) => dispatch(thunkSetLeftProfileLoginType(type)),
  setRightProfileLoginType: (type: TLoginType) => dispatch(thunkSetRightProfileLoginType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

type TLogin = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;