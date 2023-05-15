import { FC, useEffect } from "react";

import stylesChat from "./chat.module.css";

import { Message } from "../ui/message/message";
import { Button } from "../ui/button/button";

import { useAppSelector } from "../../services/hooks/hooks";
import { chatSel } from "../utils/selectorData";

const Chat: FC = (): JSX.Element => {
  const { chatHistory } = useAppSelector(chatSel);

  const handleClick = (evt: any) => {
    evt.preventDefault();
  };

  return (
    <section className={stylesChat.section}>
      <div className={stylesChat.messagesSection}>
        <ul className={stylesChat.messagesList}>
          {chatHistory
            ? chatHistory.map((message) => {
                if (
                  message.type !== "" &&
                  message.typeMessage === "textMessage"
                ) {
                  return (
                    <Message
                      key={message.idMessage}
                      text={message.textMessage}
                      type={message.type}
                      date={message.timestamp}
                    />
                  );
                }
              })
            : null}
        </ul>
      </div>
      <div className={stylesChat.inputSection}>
        <textarea className={stylesChat.inputMessage} name="messageText" />
        <Button text={"отправить"} onClick={handleClick} />
      </div>
    </section>
  );
};

export { Chat };
