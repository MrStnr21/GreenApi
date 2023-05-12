import { BASE_URL } from "./data";

import { request } from "./api";

import { TSendMessage } from "../../services/types/data";

const id = "1101819497";
const apiTokenInstance = "37a28775610240d88714ded7d6a17a4b4a78d6b02c4a4626bf";

//запрос на отправку текстовых сообщений
function sendMessageApi(id: string, message: string) {
  return request<TSendMessage>(
    `${BASE_URL}/waInstance${id}/SendMessage/${apiTokenInstance}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        chatId: id,
        message: message,
      }),
    }
  );
}

export { sendMessageApi };
