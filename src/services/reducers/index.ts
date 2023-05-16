import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization";
import { addContactReducer } from "./contacts";
import { getChatHistoryReducer } from "./chatHistory";
import { sendMessageReducer } from "./sendMessage";
import { getNotificationReducer } from "./getNotification";
import { delNotificationReducer } from "./delNotification";

const rootReducer = combineReducers({
  auth: authorizationReducer,
  contact: addContactReducer,
  chat: getChatHistoryReducer,
  sendMsg: sendMessageReducer,
  getNotif: getNotificationReducer,
  delNotif: delNotificationReducer,
});

export { rootReducer };
