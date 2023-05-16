import { TContact, TGetChatHistory, TUser } from "../../../services/types/data";

import { BASE_URL } from "../data";

import { request } from "./api";

//запрос на историю чата
function getChatHistory(userInfo: TUser, contact: TContact) {
  return request<TGetChatHistory>(
    `${BASE_URL}/waInstance${userInfo.id}/GetChatHistory/${userInfo.token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        chatId: `${contact.number!}@c.us`,
        count: 10,
      }),
    }
  );
}

export { getChatHistory };
