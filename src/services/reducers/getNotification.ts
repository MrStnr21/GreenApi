import {
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  TGetNotificationActions,
} from "../actions/getNotification";
import { TGetNotif } from "../types/data";

export type TGetNotificationState = {
  data: TGetNotif | null;

  getNotificationRequest: boolean;
  getNotificationSuccess: boolean;
  getNotificationError: boolean;
};

const getNotificationState: TGetNotificationState = {
  data: null,

  getNotificationRequest: false,
  getNotificationSuccess: false,
  getNotificationError: false,
};

function getNotificationReducer(
  state = getNotificationState,
  action: TGetNotificationActions
) {
  switch (action.type) {
    case GET_NOTIFICATION_REQUEST: {
      return {
        ...state,
        getNotificationRequest: true,
        getNotificationSuccess: false,
        getNotificationError: false,
      };
    }

    case GET_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        getNotificationRequest: false,
        getNotificationSuccess: true,
        getNotificationError: false,
      };
    }

    case GET_NOTIFICATION_ERROR: {
      return {
        ...state,
        getNotificationRequest: false,
        getNotificationSuccess: false,
        getNotificationError: true,
      };
    }

    default:
      return state;
  }
}

export { getNotificationReducer };
