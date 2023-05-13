import { FC, MouseEventHandler } from "react";

import stylesButton from "./button.module.css";

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  negative?: boolean;
}

const Button: FC<IButton> = ({
  type,
  text,
  onClick,
  negative,
}): JSX.Element => {
  const color = negative ? stylesButton.redButton : null;

  return (
    <button
      type={type}
      className={`${stylesButton.button} ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
