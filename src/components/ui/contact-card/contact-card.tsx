import { FC } from "react";

import stylesContactCard from "./contact-card.module.css";

import avatarDefault from "../../../images/fake-avatar/avatar_default.png";

interface ICard {
  avatar?: string;
  name: string;
  active?: boolean;
}

const ContactCard: FC<ICard> = ({
  avatar = avatarDefault,
  name,
  active,
}): JSX.Element => {
  const activeStyle = active ? stylesContactCard.active : null;

  return (
    <div className={`${stylesContactCard.card} ${activeStyle}`}>
      <div className={stylesContactCard.avatarContainer}>
        <img className={stylesContactCard.avatar} src={avatar} alt="avatar" />
      </div>
      <h2 className={stylesContactCard.name}>{name}</h2>
    </div>
  );
};

export { ContactCard };
