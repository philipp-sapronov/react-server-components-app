import React from 'react';
import styles from './contacts.module.sass';
import Grid from './../../../Grid/';

export default function Contact(props) {
  console.log(props, 'PROPS CONTACT');
  if (!props.entities) return null;

  return props.entities.map(sortItems => (
    <div className="wrap">
      <p className={styles.letter}>{sortItems.sortLetter}</p>
      <Grid entities={sortItems.entities} />
    </div>
  ));
}
