import React from 'react';
// import DotsMenu from '../DotsMenu';
import constants from '../../../../core/constants/categorySchema';
import styles from './category.module.sass';
import { NavLink } from 'react-router-dom';

export default function Category(props) {
  console.log(props, 'PROPS CATEGORY');

  if (!props.category) return null;

  return (
    <NavLink
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/categories/${props.category[constants.ID]}`}
    >
      <div className="wrap">
        <div className={styles.item}>
          <p className={styles.text}>{props.category[constants.TEXT]}</p>
        </div>
        <div className={styles.hover} />
      </div>
    </NavLink>
  );
}
