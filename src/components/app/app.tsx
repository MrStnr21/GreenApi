import { FC } from "react";

import stylesApp from "./app.module.css";

import { Routes, Route } from "react-router-dom";

import { MainPage } from "../../pages";

import { routesUrl } from "../utils/routes-data";

const App: FC = (): JSX.Element => {
  return (
    <section className={stylesApp.section}>
      <Routes>
        <Route path={routesUrl.mainPage} element={<MainPage />} />
      </Routes>
    </section>
  );
};

export { App };
