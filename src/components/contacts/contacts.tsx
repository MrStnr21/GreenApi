import { FC, useEffect } from "react";

import styleContacts from "./contacts.module.css";

import { ContactCard } from "../ui/contact-card/contact-card";

import { useAppSelector } from "../../services/hooks/hooks";

import { fakeContacts } from "../utils/data";
import { contactSel } from "../utils/selectorData";

const Contacts: FC = (): JSX.Element => {
  const { contact } = useAppSelector(contactSel);
  //fake server contacts data
  const addedContact = localStorage.getItem("newContact");

  useEffect(() => {}, [contact]);

  return (
    <section className={styleContacts.section}>
      <ul className={styleContacts.contactsContainer}>
        {addedContact ? (
          <li key={addedContact} className={styleContacts.contactsItem}>
            <ContactCard name={`+${addedContact}`} active />
          </li>
        ) : null}
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
