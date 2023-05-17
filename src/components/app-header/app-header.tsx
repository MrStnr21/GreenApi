import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import stylesAppHeader from "./app-header.module.css";

import { routesUrl } from "../utils/routes-data";

import { Modal } from "../ui/modal/modal";
import { InputForm } from "../ui/input-form/input-form";
import { Button } from "../ui/button/button";

import { useAppDispatch } from "../../services/hooks/hooks";
import { useForm, initialContactState } from "../../services/hooks/useForm";

import { logoutAction } from "../../services/actions/authorization";
import { addContactAction } from "../../services/actions/contacts";
import { getHistoryChatAction } from "../../services/actions/chatHistory";

import { TFormStateType, TUser } from "../../services/types/data";

const AppHeader: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { values, handleChange, setValues } =
    useForm<TFormStateType>(initialContactState);

  const [openModal, setOpenModal] = useState<boolean>(false);

  //fake server user data
  const user: TUser = {
    id: localStorage.getItem("id")!,
    token: localStorage.getItem("token")!,
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleAddContact = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();

    dispatch(addContactAction(values));

    //fake server add new contact
    localStorage.setItem("newContact", values.number);
    const contactNum = { number: localStorage.getItem("newContact") };

    setOpenModal(false);

    setValues({ number: "" });

    dispatch(getHistoryChatAction(user, contactNum));
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleLogout = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();

    dispatch(logoutAction());

    navigate(routesUrl.loginPage);

    //fake server logout
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("newContact");
  };

  return (
    <>
      <header className={stylesAppHeader.header}>
        <div className={stylesAppHeader.titleContainer}>
          <h2 className={stylesAppHeader.title}>Контакты</h2>
          <Button text={"новый чат"} onClick={handleOpenModal} />
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
                type="number"
                id="number"
                name="number"
                placeholder="номер"
                value={values.number || ""}
                onChange={handleChange}
              />
              <Button text="добавить" onClick={handleAddContact} />
            </>
          }
        />
      ) : null}
    </>
  );
};

export { AppHeader };
