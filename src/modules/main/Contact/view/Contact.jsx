import React from 'react';
import styles from './contact.module.sass';
import gridStyles from '../../Grid/view/grid.module.sass';

import classNames from 'classnames';

export default function Contact(props) {
  const itemClass = classNames({
    [gridStyles.item]: true,
    [styles.item]: true,
  });

  return (
    <div className={itemClass}>
      <div className={styles.inner}>
        <div className={styles.fotoWrap}>
          <img className={styles.foto} src="../img/User.jpg" alt="Your account photo" />
        </div>
        <div className={styles.nameWrap}>
          <p className={styles.name}>Genrich Stein-Mayer</p>
          <div className={styles.menuWrap}>
            <div className={styles.menu}> </div>
          </div>
          <p className={styles.descript} href="#">
            Log out
          </p>
        </div>
      </div>
    </div>
  );
}
