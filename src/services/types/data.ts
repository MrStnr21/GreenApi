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
};

//типизация путей
export type TRoutesUrl = {
  readonly [name: string]: string;
};
