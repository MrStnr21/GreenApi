import {
  DEL_NOTIFICATION_REQUEST,
  DEL_NOTIFICATION_SUCCESS,
  DEL_NOTIFICATION_ERROR,
  TDelNotificationActions,
} from "../actions/delNotification";

export type TDelNotificationState = {
  result: boolean;

  delNotificationRequest: boolean;
  delNotificationSuccess: boolean;
  delNotificationError: boolean;
};

const delNotificationState: TDelNotificationState = {
  result: false,

  delNotificationRequest: false,
  delNotificationSuccess: false,
  delNotificationError: false,
};

function delNotificationReducer(
  state = delNotificationState,
  action: TDelNotificationActions
) {
  switch (action.type) {
    case DEL_NOTIFICATION_REQUEST: {
      return {
        ...state,
        delNotificationRequest: true,
        delNotificationSuccess: false,
        delNotificationError: false,
      };
    }

    case DEL_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        delNotificationRequest: false,
        delNotificationSuccess: true,
        delNotificationError: false,
      };
    }

    case DEL_NOTIFICATION_ERROR: {
      return {
        ...state,
        delNotificationRequest: false,
        delNotificationSuccess: false,
        delNotificationError: true,
      };
    }

    default:
      return state;
  }
}

export { delNotificationReducer };
