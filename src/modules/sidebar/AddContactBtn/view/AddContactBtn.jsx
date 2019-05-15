import React from 'react';
import styles from './addContactBtn.module.sass';
import { ReactComponent as Icon } from './images/add-btn.svg';
export default function AddContactBtn(props) {
  return (
    <div className={styles.wrap}>
      <button onClick={props.clickHandler} className={styles.btn}>
        <div className={styles.iconWrap}>
          <Icon className={styles.icon} />
        </div>
        <p className={styles.text}>New contact</p>
      </button>
    </div>
  );
}
