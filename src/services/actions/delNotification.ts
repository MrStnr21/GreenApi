import { deletNotificationApi } from "../../components/utils/api/message-api";

import { AppDispatch, AppThunk } from "../types";
import { TDelNotification, TUser } from "../types/data";

const DEL_NOTIFICATION_REQUEST = "DEL_NOTIFICATION_REQUEST";
const DEL_NOTIFICATION_SUCCESS = "DEL_NOTIFICATION_SUCCESS";
const DEL_NOTIFICATION_ERROR = "DEL_NOTIFICATION_ERROR";

export interface IDelNotificationRequestAction {
  readonly type: typeof DEL_NOTIFICATION_REQUEST;
}

export interface IDelNotificationSuccessAction {
  readonly type: typeof DEL_NOTIFICATION_SUCCESS;
  payload: TDelNotification;
}

export interface IDelNotificationErrorAction {
  readonly type: typeof DEL_NOTIFICATION_ERROR;
}

export type TDelNotificationActions =
  | IDelNotificationRequestAction
  | IDelNotificationSuccessAction
  | IDelNotificationErrorAction;

//экшн удаления уведомления
const delNotificationAction: AppThunk = (
  userinfo: TUser,
  receiptId: number
) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: DEL_NOTIFICATION_REQUEST });

    deletNotificationApi(userinfo, receiptId)
      .then((res) => {
        if (res) {
          dispatch({ type: DEL_NOTIFICATION_SUCCESS, payload: res });
        } else {
          dispatch({
            type: DEL_NOTIFICATION_ERROR,
          });
        }
      })
      .catch((err: { message: string }) => {
        dispatch({
          type: DEL_NOTIFICATION_ERROR,
        });
      });
  };
};

export {
  DEL_NOTIFICATION_REQUEST,
  DEL_NOTIFICATION_SUCCESS,
  DEL_NOTIFICATION_ERROR,
  delNotificationAction,
};
