import { FC } from "react";

import stylesInputForm from "./input-form.module.css";

interface IInputForm {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
}

const InputForm: FC<IInputForm> = ({ type, id, name, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={stylesInputForm.inputNumber}
    />
  );
};

export { InputForm };
