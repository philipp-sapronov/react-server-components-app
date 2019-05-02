import React from 'react';
import styles from './addContactBtn.module.sass';

export default function AddContactBtn(props) {
  return (
    <button className={styles.btn}>
      <div className={styles.iconWrap}>
        <img className={styles.icon} src="../img/svg/add.svg" />
      </div>
      <p className={styles.text}>New contact</p>
    </button>
  );
}
