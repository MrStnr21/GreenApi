import { FC } from "react";

import stylesContactCard from "./contact-card.module.css";

import avatarDefault from "../../../images/avatar_default.png";

interface ICard {
  avatar?: string;
  name: string;
}

const ContactCard: FC<ICard> = ({
  avatar = avatarDefault,
  name,
}): JSX.Element => {
  return (
    <div className={stylesContactCard.card}>
      <div className={stylesContactCard.avatarContainer}>
        <img className={stylesContactCard.avatar} src={avatar} alt="avatar" />
      </div>
      <h2 className={stylesContactCard.name}>{name}</h2>
    </div>
  );
};

export { ContactCard };
