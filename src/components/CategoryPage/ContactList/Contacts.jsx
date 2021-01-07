import React from "react";
import styles from "./contacts.module.sass";
import Contact from "../Contact/Contact";

export const ContactList = (props) => {
  console.log(props, "PROPS CONTACT");
  if (!props.entities) return null;

  return props.entities.map((blocks) => (
    <div className="wrap">
      <p className={styles.letter}>{blocks.sortLetter}</p>
      <div className={styles.container}>
        {blocks.entities.map((contact) => (
          <Contact key={contact.ID} contact={contact} {...props} />
        ))}
      </div>
    </div>
  ));
};
