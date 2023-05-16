//типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export type TOptions = {
  headers: { authorization?: string; "Content-Type": string };
  method?: string;
  body?: string;
};

export type TSendMessage = {
  chatId: string;
  message: string;
  idMessage: string;
  statusCode: number;
};

export type TGetChatHistory = {
  chatId: string;
  statusCode: number;
};

export type TGetNotification = {
  receiptId: number;
  statusCode: number;
};

export type TDelNotification = {
  result: boolean;
};

//типизация путей
export type TRoutesUrl = {
  readonly [name: string]: string;
};

//типизация хука useForm
export type TFormStateType = {
  [name: string]: string;
};

//типизация данных пользователя
export type TUser = {
  id: string;
  token: string;
};

//типизация добавляемого номера получателя
export type TContact = {
  number: string;
};

//типизация истории чата
export type TChatHistory = {
  chatId: string;
  extendedTextMessage: { [name: string]: string };
  idMessage: string;
  sendByApi: true;
  statusMessage: string;
  textMessage: string;
  timestamp: number;
  type: string;
  typeMessage: string;
};

//типизация уведомления
export type TGetNotif = {
  receiptId: number;
  body: {
    typeWebhook: string;
    chatId: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    status: string;
    sendByApi: boolean;
  };
};

//типизация контактов
export type TContacts = { id: number; name: string; avatar?: string };
