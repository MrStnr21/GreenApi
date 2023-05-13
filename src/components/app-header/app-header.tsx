import { FC } from "react";

import stylesAppHeader from "./app-header.module.css";

import { Button } from "../ui/button/button";

const AppHeader: FC = (): JSX.Element => {
  return (
    <header className={stylesAppHeader.header}>
      <div className={stylesAppHeader.titleContainer}>
        <h2 className={stylesAppHeader.title}>Контакты</h2>
        <Button text={"новый чат"} />
      </div>
      <div className={stylesAppHeader.logout}>
        <Button text={"выйти"} negative></Button>
      </div>
    </header>
  );
};

export { AppHeader };
