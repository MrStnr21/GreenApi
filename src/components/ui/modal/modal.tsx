import { FC } from "react";

import stylesModal from "./modal.module.css";

import { Button } from "../button/button";

type TModal = {
  heading: string;
  children: JSX.Element;
  onClose: () => void;
};

const Modal: FC<TModal> = ({ heading, children, onClose }) => {
  return (
    <section className={stylesModal.section}>
      <div className={stylesModal.container}>
        <h1 className={stylesModal.title}>{heading}</h1>
        {children}
        <Button text="закрыть" negative onClick={onClose} />
      </div>
    </section>
  );
};

export { Modal };
