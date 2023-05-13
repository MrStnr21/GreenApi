import { FC } from "react";

import stylesMessage from "./message.module.css";

interface IMessage {
  text?: string;
  type: string;
}

const Message: FC<IMessage> = ({
  type,
  text = "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
}) => {
  const colorMes =
    type === "send"
      ? stylesMessage.sendMessageColor
      : type === "get"
      ? stylesMessage.getMessageColor
      : null;

  const posMes =
    type === "send"
      ? stylesMessage.sendMessagePos
      : type === "get"
      ? stylesMessage.getMessagePos
      : null;

  return (
    <li className={`${stylesMessage.messagesItem} ${posMes}`}>
      <div className={`${stylesMessage.message} ${colorMes}`}>
        <p className={stylesMessage.textMessage}>{text}</p>
        <span className={stylesMessage.time}>4:20</span>
      </div>
    </li>
  );
};

export { Message };
