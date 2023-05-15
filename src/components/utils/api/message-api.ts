import { BASE_URL } from "../data";

import { request } from "./api";

import { TContact, TSendMessage, TUser } from "../../../services/types/data";

//запрос на отправку текстовых сообщений
function sendMessageApi(userInfo: TUser, contact: TContact, message: string) {
  return request<TSendMessage>(
    `${BASE_URL}/waInstance${userInfo.id}/SendMessage/${userInfo.token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        chatId: `${contact.number}@c.us`,
        message: message,
      }),
    }
  );
}

export { sendMessageApi };
