import { FC, useEffect } from "react";

import stylesChat from "./chat.module.css";

import { Message } from "../ui/message/message";
import { Button } from "../ui/button/button";

import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { initialSendMessageState, useForm } from "../../services/hooks/useForm";

import { chatSel, getNotifSel } from "../utils/selectorData";

import { TFormStateType, TUser } from "../../services/types/data";

import { sendMessageAction } from "../../services/actions/sendMessage";
import { getHistoryChatAction } from "../../services/actions/chatHistory";
import { getNotificationAction } from "../../services/actions/getNotification";
import { delNotificationAction } from "../../services/actions/delNotification";

const Chat: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { chatHistory } = useAppSelector(chatSel);
  const { values, handleChange, setValues } = useForm<TFormStateType>(
    initialSendMessageState
  );
  const { data } = useAppSelector(getNotifSel);

  //fake server user data
  const user: TUser = {
    id: localStorage.getItem("id")!,
    token: localStorage.getItem("token")!,
  };

  //fake server contact
  const contactNum = { number: localStorage.getItem("newContact") };

  const handleSendMessage = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();

    if (values.message.length > 1) {
      dispatch(sendMessageAction(user, contactNum, values.message));

      setValues({ message: "" });

      dispatch(getHistoryChatAction(user, contactNum));
    }

    return;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getNotificationAction(user));
      dispatch(getHistoryChatAction(user, contactNum));

      if (data?.receiptId) {
        dispatch(delNotificationAction(user, data?.receiptId!));
      }
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [contactNum, user, chatHistory]);

  return (
    <section className={stylesChat.section}>
      <div className={stylesChat.messagesSection}>
        <ul className={stylesChat.messagesList}>
          {chatHistory
            ? chatHistory.map((message) => {
                if (message.idMessage) {
                  return (
                    <li
                      key={message.idMessage}
                      className={stylesChat.messagesItem}
                    >
                      <Message
                        text={message.textMessage}
                        type={message.type}
                        date={message.timestamp}
                      />
                    </li>
                  );
                }
                return null;
              })
            : null}
        </ul>
      </div>
      <div className={stylesChat.inputSection}>
        <textarea
          className={stylesChat.inputMessage}
          name="message"
          id="message"
          maxLength={10000}
          value={values.message || ""}
          onChange={handleChange}
        />
        <Button text={"отправить"} onClick={handleSendMessage} />
      </div>
    </section>
  );
};

export { Chat };
