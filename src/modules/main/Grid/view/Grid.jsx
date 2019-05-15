import React from 'react';
import styles from './grid.module.sass';
import Contact from './../../Contacts/Contacts/view/Contact';

export default function Grid(props) {
  return (
    <div className={styles.container}>
      {props.entities.map(contact => (
        <Contact key={contact.ID} contact={contact} {...props} />
      ))}
    </div>
  );
}
