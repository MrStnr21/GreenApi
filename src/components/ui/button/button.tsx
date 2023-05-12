import { FC } from "react";

import stylesButton from "./button.module.css";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }): JSX.Element => {
  return <button className={stylesButton.button}>{text}</button>;
};

export { Button };
