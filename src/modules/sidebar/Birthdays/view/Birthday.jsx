import React from 'react';
import styles from './birthday.module.sass';

export default function Component(props) {
  return (
    <div className={styles.wrap}>
      <a className={styles.item}>
        <div className={styles.hover} />
        <p className={styles.name}>
          My Cat
          <span className={styles.date}>02.11.2018</span>
        </p>
        <p className={styles.age}>исполняется 20 лет</p>
      </a>
    </div>
  );
}
