import {
  CHAT_HISTORY_REQUEST,
  CHAT_HISTORY_SUCCESS,
  CHAT_HISTORY_ERROR,
  TChatHistoryActions,
} from "../actions/chatHistory";

import { TChatHistory } from "../types/data";

export type TChatHistoryState = {
  chatHistory: Array<TChatHistory> | null;

  chatHistoryRequest: boolean;
  chatHistorySuccess: boolean;
  chatHistoryError: boolean;
};

const chatHistoryInitialState: TChatHistoryState = {
  chatHistory: null,

  chatHistoryRequest: false,
  chatHistorySuccess: false,
  chatHistoryError: false,
};

function getChatHistoryReducer(
  state = chatHistoryInitialState,
  action: TChatHistoryActions
) {
  switch (action.type) {
    case CHAT_HISTORY_REQUEST: {
      return {
        ...state,
        chatHistoryRequest: true,
        chatHistorySuccess: false,
        chatHistoryError: false,
      };
    }

    case CHAT_HISTORY_SUCCESS: {
      return {
        ...state,
        chatHistory: action.payload,
        chatHistoryRequest: false,
        chatHistorySuccess: true,
        chatHistoryError: false,
      };
    }

    case CHAT_HISTORY_ERROR: {
      return {
        ...state,
        chatHistoryRequest: false,
        chatHistorySuccess: false,
        chatHistoryError: true,
      };
    }

    default:
      return state;
  }
}

export { getChatHistoryReducer };
