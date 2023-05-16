import { sendMessageApi } from "../../components/utils/api/message-api";
import { AppDispatch, AppThunk } from "../types";
import { TSendMessage, TUser, TContact } from "../types/data";

const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR";

export interface ISendMessageRequestAction {
  readonly type: typeof SEND_MESSAGE_REQUEST;
}

export interface ISendMessageSuccessAction {
  readonly type: typeof SEND_MESSAGE_SUCCESS;
  payload: TSendMessage;
}

export interface ISendMessageErrorAction {
  readonly type: typeof SEND_MESSAGE_ERROR;
}

export type TSendMessageActions =
  | ISendMessageRequestAction
  | ISendMessageSuccessAction
  | ISendMessageErrorAction;

const sendMessageAction: AppThunk = (
  userInfo: TUser,
  contact: TContact,
  message: string
) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: SEND_MESSAGE_REQUEST });

    sendMessageApi(userInfo, contact, message)
      .then((res) => {
        if (!res.statusCode) {
          dispatch({ type: SEND_MESSAGE_SUCCESS, payload: res });
        } else {
          console.log(res.statusCode);
          dispatch({
            type: SEND_MESSAGE_ERROR,
          });
        }
      })
      .catch((err: { message: string }) => {
        dispatch({
          type: SEND_MESSAGE_ERROR,
        });
      });
  };
};

export {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  sendMessageAction,
};
