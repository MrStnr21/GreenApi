import { FC } from "react";

import stylesMessage from "./message.module.css";

interface IMessage {
  key?: string;
  text?: string;
  type: string;
  date: any;
}

const Message: FC<IMessage> = ({ key, type, text, date }) => {
  const colorMes =
    type === "outgoing"
      ? stylesMessage.sendMessageColor
      : type === "incoming"
      ? stylesMessage.getMessageColor
      : null;

  const posMes =
    type === "outgoing"
      ? stylesMessage.sendMessagePos
      : type === "incoming"
      ? stylesMessage.getMessagePos
      : null;

  let time: string | null = null;

  const timeConverter = (timestamps: any) => {
    const currentDate = new Date(timestamps * 1000);
    time = currentDate.toLocaleTimeString("it-IT");
    return time;
  };

  timeConverter(date);

  console.log(date);

  return (
    <li key={key} className={`${stylesMessage.messagesItem} ${posMes}`}>
      <div className={`${stylesMessage.message} ${colorMes}`}>
        <p className={stylesMessage.textMessage}>{text}</p>
        <span className={stylesMessage.time}>{time!.slice(0, -3)}</span>
      </div>
    </li>
  );
};

export { Message };
