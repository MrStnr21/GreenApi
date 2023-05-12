import { FC } from "react";

import stylesMain from "./main.module.css";

import { Contacts } from "../contacts/contacts";

const Main: FC = (): JSX.Element => {
  return (
    <section className={stylesMain.section}>
      <Contacts />
    </section>
  );
};

export { Main };
