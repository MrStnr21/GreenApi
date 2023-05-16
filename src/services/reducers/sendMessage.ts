import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from "../actions/sendMessage";

import { TSendMessageActions } from "../actions/sendMessage";

export type TSendMessageState = {
  idMessage: string | null;

  sendMessageRequest: boolean;
  sendMessageSuccess: boolean;
  sendMessageError: boolean;
};

const sendMessageState: TSendMessageState = {
  idMessage: null,

  sendMessageRequest: false,
  sendMessageSuccess: false,
  sendMessageError: false,
};

function sendMessageReducer(
  state = sendMessageState,
  action: TSendMessageActions
) {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST: {
      return {
        ...state,
        sendMessageRequest: true,
        sendMessageSuccess: false,
        sendMessageError: false,
      };
    }

    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        idMessage: action.payload,
        sendMessageRequest: false,
        sendMessageSuccess: true,
        sendMessageError: false,
      };
    }

    case SEND_MESSAGE_ERROR: {
      return {
        ...state,
        sendMessageRequest: false,
        sendMessageSuccess: false,
        sendMessageError: true,
      };
    }

    default:
      return state;
  }
}

export { sendMessageReducer };
