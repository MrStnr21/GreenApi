import { FC, useCallback } from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";

import stylesNotFound from "./not-found.module.css";

import { routesUrl } from "../utils/routes-data";

import { Button } from "../ui/button/button";

const NotFound: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = useCallback<() => void>(() => {
    navigate({ pathname: routesUrl.mainPage });
  }, [navigate]);

  return (
    <div className={stylesNotFound.container}>
      <h2 className={stylesNotFound.title}>Страница не найдена</h2>
      <h2 className={stylesNotFound.title}>Ошибка 404</h2>
      <Button
        text="Вернуться на главную страницу"
        onClick={handleClick}
      ></Button>
    </div>
  );
};

export { NotFound };
