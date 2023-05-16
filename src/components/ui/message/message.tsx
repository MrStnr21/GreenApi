import { FC } from "react";

import stylesMessage from "./message.module.css";

interface IMessage {
  text: string;
  type: string;
  date: number;
}

const Message: FC<IMessage> = ({ type, text, date }) => {
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

  const timeConverter = (timestamps: number) => {
    const currentDate = new Date(timestamps * 1000);
    time = currentDate.toLocaleTimeString("it-IT");
    return time;
  };

  timeConverter(date);

  return (
    <div className={`${stylesMessage.messagesItem} ${posMes}`}>
      <div className={`${stylesMessage.message} ${colorMes}`}>
        <p className={stylesMessage.textMessage}>{text}</p>
        <span className={stylesMessage.time}>{time!.slice(0, -3)}</span>
      </div>
    </div>
  );
};

export { Message };
