import React from 'react';
import styles from './header.module.sass';
import categorySchema from '../../../../constants/categorySchema';

const { TEXT } = categorySchema;

export default function Component(props) {
  console.log(props[TEXT], 'HEADER TEXT');
  return (
    <header className={styles.wrap}>
      <h2 className={styles.title}>{props[TEXT]}</h2>
      <div className={styles.menu} />
    </header>
  );
}
