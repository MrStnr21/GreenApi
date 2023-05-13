import { FC, useEffect } from "react";

import stylesLogin from "./login.module.css";
import { Button } from "../ui/button/button";

import { useForm, initialFormState } from "../../services/hooks/useForm";
import { TFormStateType } from "../../services/types/data";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { routesUrl } from "../utils/routes-data";

const Login: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const { values, handleChange } = useForm<TFormStateType>(initialFormState);

  const handleSubmitLogin = (evt: any) => {
    evt.preventDefault();

    localStorage.setItem("idInstance", values.idInstance!);
    localStorage.setItem("apiTokenInstance", values.apiTokenInstance!);

    console.log(
      localStorage.getItem("idInstance"),
      localStorage.getItem("apiTokenInstance"),
      loginSuccess
    );
  };

  const loginSuccess =
    localStorage.getItem("idInstance") &&
    localStorage.getItem("apiTokenInstance")
      ? true
      : false;

  useEffect(() => {
    if (loginSuccess) {
      navigate(routesUrl.mainPage);
    }
  }, [loginSuccess, navigate]);

  return (
    <section className={stylesLogin.section}>
      <div className={stylesLogin.container}>
        <h1 className={stylesLogin.title}>Greean API</h1>
        <h3 className={stylesLogin.auth}>Авторизация</h3>
        <h2 className={stylesLogin.inputName}>idInstance</h2>
        <input
          id="idInstance"
          name="idInstance"
          type="text"
          className={stylesLogin.input}
          value={values.idInstance || ""}
          onChange={handleChange}
        />
        <h2 className={stylesLogin.inputName}>apiTokenInstance</h2>
        <input
          id="apiTokenInstance"
          name="apiTokenInstance"
          type="text"
          className={stylesLogin.input}
          value={values.apiTokenInstance || ""}
          onChange={handleChange}
        />
        <Button text="войти" type="submit" onClick={handleSubmitLogin} />
      </div>
    </section>
  );
};

export { Login };
