import { FC } from "react";

import stylesInputForm from "./input-form.module.css";

interface IInputForm {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: FC<IInputForm> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={stylesInputForm.inputNumber}
      value={value}
      onChange={onChange}
    />
  );
};

export { InputForm };
