import { AppDispatch, AppThunk } from "../types";
import { TUser } from "../types/data";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const LOGOUT = "LOGOUT";

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  user: TUser;
}

export interface ILoginErrorAction {
  readonly type: typeof LOGIN_ERROR;
}

export interface ILogout {
  readonly type: typeof LOGOUT;
}

export type TAuthorizationActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginErrorAction
  | ILogout;

// экшн логина
const loginAction: AppThunk = (userInfo: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      user: userInfo,
    });

    // dispatch({
    //   type: LOGIN_ERROR,
    // });
  };
};

//экшн разлогина
const logoutAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: LOGOUT });
  };
};

export {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  loginAction,
  logoutAction,
};
