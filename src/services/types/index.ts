import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { store } from "../store";

import { TAuthorizationActions } from "../actions/authorization";
import { TAddContactActions } from "../actions/contacts";
import { TChatHistoryActions } from "../actions/chatHistory";
import { TSendMessageActions } from "../actions/sendMessage";
import { TGetNotificationActions } from "../actions/getNotification";
import { TDelNotificationActions } from "../actions/delNotification";

import { TAuthState } from "../reducers/authorization";
import { TContactsState } from "../reducers/contacts";
import { TSendMessageState } from "../reducers/sendMessage";
import { TChatHistoryState } from "../reducers/chatHistory";
import { TGetNotificationState } from "../reducers/getNotification";
import { TDelNotificationState } from "../reducers/delNotification";

export type TStore = {
  auth: TAuthState;
  contact: TContactsState;
  chat: TChatHistoryState;
  sendMsg: TSendMessageState;
  getNotif: TGetNotificationState;
  delNotif: TDelNotificationState;
};

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthorizationActions
  | TAddContactActions
  | TChatHistoryActions
  | TSendMessageActions
  | TGetNotificationActions
  | TDelNotificationActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
