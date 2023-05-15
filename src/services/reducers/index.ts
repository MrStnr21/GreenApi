import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization";
import { addContactReducer } from "./contacts";
import { getChatHistoryReducer } from "./chatHistory";

const rootReducer = combineReducers({
  auth: authorizationReducer,
  contact: addContactReducer,
  chat: getChatHistoryReducer,
});

export { rootReducer };
