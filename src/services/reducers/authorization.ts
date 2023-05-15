import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  TAuthorizationActions,
} from "../actions/authorization";

import { TUser } from "../types/data";

export type TAuthState = {
  user: TUser | null;

  loginSuccess: boolean;
  loginRequest: boolean;
  loginError: boolean;
};

const authInitialState: TAuthState = {
  user: null,

  loginSuccess: false,
  loginRequest: false,
  loginError: false,
};

function authorizationReducer(
  state = authInitialState,
  action: TAuthorizationActions
) {
  switch (action.type) {
    //экшены авторизации
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        user: action.user,
        loginSuccess: true,
        loginRequest: false,
        loginError: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginRequest: false,
        loginError: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        loginSuccess: false,
      };
    }
    default:
      return state;
  }
}

export { authorizationReducer };
