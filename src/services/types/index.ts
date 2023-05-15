import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TAddContactActions } from "../actions/contacts";

import { TAuthState } from "../reducers/authorization";
import { TContactsState } from "../reducers/contacts";
import { TChatHistoryActions } from "../actions/chatHistory";
import { TChatHistoryState } from "../reducers/chatHistory";

export type TStore = {
  auth: TAuthState;
  contact: TContactsState;
  chat: TChatHistoryState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthorizationActions
  | TAddContactActions
  | TChatHistoryActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
