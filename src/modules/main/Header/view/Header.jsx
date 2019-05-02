import React from 'react';

import styles from './header.module.sass';

export default function Component(props) {
  return (
    <header className={styles.wrap}>
      <h2 className={styles.title}>All contacts</h2>
      <div className={styles.menu} />
    </header>
  );
}
