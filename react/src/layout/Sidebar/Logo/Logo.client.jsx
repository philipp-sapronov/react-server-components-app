import React from 'react';
// import styles from './logo.module.sass';
// import { NavLink } from 'react-router-dom';

const styles = {}; // __webpack__
export default function Logo(props) {
  return (
    <a
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/home`}>
      <div className={styles.logoWrap}>
        <div className={styles.logoText}>
          <div className="text-logo__text">Contact Book</div>
        </div>
      </div>
    </a>
  );
}
