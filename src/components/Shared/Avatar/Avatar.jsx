import React from "react";
import styles from "./avatar.module.sass";
import contactSchema from "../../../constants/contactSchema";

const { NAME, SURNAME } = contactSchema;

const getFirtLetter = (word) => word.charAt(0).toUpperCase();

const getFirstLettersOfName = (contact) => {
  return `${getFirtLetter(contact[NAME])}${getFirtLetter(contact[SURNAME])}`;
};

export default function Avatar(props) {
  const { contact } = props;

  const style = {
    backgroundImage: `url('data:image/jpg;base64,${contact.avatar}')`,
  };

  return (
    <div className={props.styles.avatarWrap}>
      {contact.avatar ? (
        <div style={style} className={styles.avatar} />
      ) : (
        <p className={props.styles.letters}>{getFirstLettersOfName(contact)}</p>
      )}
    </div>
  );
}
