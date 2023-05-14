import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import stylesAppHeader from "./app-header.module.css";

import { routesUrl } from "../utils/routes-data";

import { useAppDispatch } from "../../services/hooks/hooks";
import { logoutAction } from "../../services/actions/authorization";

import { Modal } from "../ui/modal/modal";
import { InputForm } from "../ui/input-form/input-form";
import { Button } from "../ui/button/button";

const AppHeader: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAddContact = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleLogout = (evt: any) => {
    evt.preventDefault();

    dispatch(logoutAction());

    navigate(routesUrl.loginPage);
    localStorage.removeItem("token");
  };

  return (
    <>
      <header className={stylesAppHeader.header}>
        <div className={stylesAppHeader.titleContainer}>
          <h2 className={stylesAppHeader.title}>Контакты</h2>
          <Button text={"новый чат"} onClick={handleAddContact} />
        </div>
        <div className={stylesAppHeader.logout}>
          <Button text={"выйти"} negative onClick={handleLogout}></Button>
        </div>
      </header>
      {openModal ? (
        <Modal
          onClose={handleCloseModal}
          heading={"Введите номер телефона в формате '70123456789'"}
          children={
            <>
              <InputForm
                type="text"
                id="number"
                name="number"
                placeholder="номер"
              />
              <Button text="добавить" />
            </>
          }
        />
      ) : null}
    </>
  );
};

export { AppHeader };
