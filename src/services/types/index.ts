import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";

import { TAuthState } from "../reducers/authorization";

export type TStore = {
  auth: TAuthState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAuthorizationActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
