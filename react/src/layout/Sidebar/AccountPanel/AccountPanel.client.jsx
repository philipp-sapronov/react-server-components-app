import React from 'react';
// import styles from './accountPanel.module.sass';
// import { Link } from 'react-router-dom';

const styles = {};

export default function AccountPanel(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.fotoWrap}>
          <img className={styles.foto} src={'/assets/user.png'} alt="Avatar" />
        </div>
        <div className={styles.nameWrap}>
          <a>
            {/*<Link exact to={'/account'}>*/}
            <p className={styles.name}>User</p>
            {/*</Link>*/}
          </a>
          {/* TODO: put here dotsMenu */}

          <Link className={styles.logout} to="/Login">
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}