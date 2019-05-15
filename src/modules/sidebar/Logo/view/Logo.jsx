import React from 'react';
import styles from './logo.module.sass';
import { NavLink } from 'react-router-dom';

export default function Logo(props) {
  return (
    <NavLink
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/home`}
    >
      <div className={styles.logoWrap}>
        <div className={styles.logoText}>
          <div className="text-logo__text">Contact Book</div>
        </div>
      </div>
    </NavLink>
  );
}
