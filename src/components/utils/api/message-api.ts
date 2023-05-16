import { BASE_URL } from "../data";

import { request } from "./api";

import {
  TContact,
  TGetNotif,
  TDelNotification,
  TSendMessage,
  TUser,
} from "../../../services/types/data";

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

//запрос на получение уведомелния
function getNotificationApi(userInfo: TUser) {
  return request<TGetNotif>(
    `${BASE_URL}/waInstance${userInfo.id}/ReceiveNotification/${userInfo.token}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
}

//запрос на удаление уведомления из очереди
function deletNotificationApi(userInfo: TUser, receiptId: number) {
  return request<TDelNotification>(
    `${BASE_URL}/waInstance${userInfo.id}/deleteNotification/${userInfo.token}/${receiptId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        receiptId: receiptId,
      }),
    }
  );
}

export { sendMessageApi, getNotificationApi, deletNotificationApi };
