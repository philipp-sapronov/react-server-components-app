import React from 'react';
import styles from './grid.module.sass';
import Contact from '../../../main/Contact';

export default function Grid(props) {
  return (
    <div className={styles.container}>
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}
