import { FC, useState, useEffect } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

import stylesLogin from "./login.module.css";

import { Button } from "../ui/button/button";

import { useForm, initialFormState } from "../../services/hooks/useForm";
import { TFormStateType } from "../../services/types/data";
import { loginAction } from "../../services/actions/authorization";
import { useAppSelector, useAppDispatch } from "../../services/hooks/hooks";

import { authSel } from "../utils/selectorData";
import { routesUrl } from "../utils/routes-data";

const Login: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);
  const { loginSuccess } = useAppSelector(authSel);

  const { values, handleChange } = useForm<TFormStateType>(initialFormState);

  const handleSubmitLogin = (evt: any) => {
    evt.preventDefault();

    if (values.idInstance!.length < 1 && values.apiTokenInstance!.length < 1) {
      setError(true);
    } else {
      setError(false);

      dispatch(loginAction(values));
      //fake server authorization
      localStorage.setItem("id", values.idInstance);
      localStorage.setItem("token", values.apiTokenInstance!);
    }
  };

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
        {error ? (
          <h3 className={stylesLogin.authError}>
            Проверьте правильность введенных данных
          </h3>
        ) : null}
        <h2 className={stylesLogin.inputName}>idInstance</h2>
        <input
          id="idInstance"
          name="idInstance"
          type="text"
          placeholder="Введите свой idInstance"
          className={stylesLogin.input}
          value={values.idInstance || ""}
          onChange={handleChange}
        />
        <h2 className={stylesLogin.inputName}>apiTokenInstance</h2>
        <input
          id="apiTokenInstance"
          name="apiTokenInstance"
          type="text"
          placeholder="Введите свой apiTokenInstance"
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
