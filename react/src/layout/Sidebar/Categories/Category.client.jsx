import React from 'react';
// import DotsMenu from '../DotsMenu';
import constants from '../../../constants/categorySchema';
// import styles from "./category.module.sass";
// import { NavLink } from "react-router-dom";
const styles = {};

export default function Category(props) {
  if (!props.category) return null;

  return (
    <a
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/categories/${props.category[constants.ID]}`}>
      <div className="wrap">
        <div className={styles.item}>
          <p className={styles.text}>{props.category[constants.TEXT]}</p>
        </div>
        <div className={styles.hover} />
      </div>
    </a>
  );
}