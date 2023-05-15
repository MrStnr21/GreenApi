import { getChatHistory } from "../../components/utils/api/chatHistory-api";
import { AppDispatch, AppThunk } from "../types";
import { TUser, TContact, TGetChatHistory } from "../types/data";

const CHAT_HISTORY_REQUEST = "CHAT_HISTORY_REQUEST";
const CHAT_HISTORY_SUCCESS = "CHAT_HISTORY_SUCCESS";
const CHAT_HISTORY_ERROR = "CHAT_HISTORY_ERROR";

export interface IChatHistoryRequestAction {
  readonly type: typeof CHAT_HISTORY_REQUEST;
}

export interface IChatHistorySuccessAction {
  readonly type: typeof CHAT_HISTORY_SUCCESS;
  payload: TGetChatHistory;
}

export interface IChatHistoryErrorAction {
  readonly type: typeof CHAT_HISTORY_ERROR;
}

export type TChatHistoryActions =
  | IChatHistoryRequestAction
  | IChatHistorySuccessAction
  | IChatHistoryErrorAction;

//экшн истории чата
const getHistoryChatAction: AppThunk = (userInfo: TUser, contact: TContact) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHAT_HISTORY_REQUEST,
    });

    getChatHistory(userInfo, contact)
      .then((res) => {
        if (!res.statusCode) {
          dispatch({
            type: CHAT_HISTORY_SUCCESS,
            payload: res,
          });
        } else {
          console.log(res.statusCode);
          dispatch({
            type: CHAT_HISTORY_ERROR,
          });
        }
      })
      .catch((err: { message: string }) => {
        dispatch({
          type: CHAT_HISTORY_ERROR,
        });
      });
  };
};

export {
  CHAT_HISTORY_REQUEST,
  CHAT_HISTORY_SUCCESS,
  CHAT_HISTORY_ERROR,
  getHistoryChatAction,
};
