import React from "react";
import clsx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./contact.module.sass";
import constants from "../../../constants/contactSchema";
import DotsMenu from "../../../components/Shared/DotsMenu";
import Avatar from "../../../components/Shared/Avatar";

const { ContactBtn } = DotsMenu;
const avatarStyles = { avatarWrap: styles.avatarWrap, letters: styles.letters };

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

const Contact = (props) => {
  const { contact } = props;

  if (!contact) return null;

  const itemClassNames = clsx({
    [styles.gridItem]: true,
    [styles.item]: true,
  });

  return (
    <div key={contact.id} className={itemClassNames}>
      <div className={styles.inner}>
        <NavLink exact to={`/contacts/${contact.id}`}>
          <Avatar
            src={contact.avatar}
            letter={contact.firstname.charAt(0)}
            styles={avatarStyles}
          />
          <div className={styles.nameWrap}>
            <p className={styles.name}>
              {getFullName(contact.firstname, contact.lastname)}
            </p>
            <p className={styles.description}>{contact.phone}</p>
          </div>
        </NavLink>
        {/*<ContactBtn triggerId={contact[constants.id]} module="contact" />*/}
      </div>
    </div>
  );
};

export default Contact;
