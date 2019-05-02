import React from 'react';
// import DotsMenu from '../DotsMenu';
import styles from './category.module.sass';

export default function Category(props) {
  return (
    <div className="wrap">
      <div className={styles.item}>
        <a className={styles.text} href="#">
          All contacts
        </a>
      </div>
      <div className={styles.hover} />
    </div>
  );
}
