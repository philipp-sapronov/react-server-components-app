import React from 'react';
import styles from './accountPanel.module.sass';

export default function AccountPanel(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.fotoWrap}>
          {/* <img className="foto" src="../img/User.jpg" alt="Your account photo"> */}
        </div>
        <div className={styles.nameWrap}>
          <p className={styles.name}>Genrich Schroder-Stein</p>
          <div className={styles.menuWrap}>
            <div className={styles.menu}> </div>
          </div>
          <a className={styles.logout} href="#">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
}
