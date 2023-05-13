import { FC } from "react";

import styleContacts from "./contacts.module.css";

import { Button } from "../ui/button/button";
import { ContactCard } from "../ui/contact-card/contact-card";

import { fakeContacts } from "../utils/data";

const Contacts: FC = (): JSX.Element => {
  return (
    <section className={styleContacts.section}>
      <ul className={styleContacts.contactsContainer}>
        {fakeContacts.map((user) => {
          return (
            <li key={user.id} className={styleContacts.contactsItem}>
              <ContactCard name={user.name} avatar={user.avatar} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { Contacts };
