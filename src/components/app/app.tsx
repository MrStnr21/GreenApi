import { FC } from "react";

import stylesApp from "./app.module.css";

import { Routes, Route } from "react-router-dom";

import { MainPage, LoginPage, NotFoundPage } from "../../pages";
import { ProtectedRoute } from "../../pages/protected-route";

import { routesUrl } from "../utils/routes-data";

const App: FC = (): JSX.Element => {
  return (
    <section className={stylesApp.section}>
      <Routes>
        <Route
          path={routesUrl.loginPage}
          element={
            <ProtectedRoute notAuth={true}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.mainPage}
          element={
            <ProtectedRoute notAuth={false}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path={routesUrl.notFoundPage} element={<NotFoundPage />} />
      </Routes>
    </section>
  );
};

export { App };
