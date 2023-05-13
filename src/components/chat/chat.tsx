import { FC } from "react";

import stylesChat from "./chat.module.css";

import { Message } from "../ui/message/maessage";
import { Button } from "../ui/button/button";

const Chat: FC = (): JSX.Element => {
  return (
    <section className={stylesChat.section}>
      <div className={stylesChat.messagesSection}>
        <ul className={stylesChat.messagesList}>
          <Message type="send" />
          <Message type="get" />
          <Message type="send" />
          <Message type="send" />
          <Message type="get" />
        </ul>
      </div>
      <div className={stylesChat.inputSection}>
        <textarea className={stylesChat.inputMessage} name="messageText" />
        <Button text={"отправить"} />
      </div>
    </section>
  );
};

export { Chat };
