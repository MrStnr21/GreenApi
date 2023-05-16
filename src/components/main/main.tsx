import { FC } from "react";

import stylesMain from "./main.module.css";

import { AppHeader } from "../app-header/app-header";
import { Contacts } from "../contacts/contacts";
import { Chat } from "../chat/chat";

const Main: FC = (): JSX.Element => {
  return (
    <section className={stylesMain.section}>
      <AppHeader />
      <div className={stylesMain.inteface}>
        <Contacts />
        <Chat />
      </div>
    </section>
  );
};

export { Main };
