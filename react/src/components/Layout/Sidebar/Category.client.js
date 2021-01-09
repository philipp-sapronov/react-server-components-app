import React from 'react';
// import DotsMenu from '../DotsMenu';
import constants from '../../../constants/categorySchema';
// import { NavLink } from "react-router-dom";

export default function Category(props) {
  if (!props.category) return null;

  return (
    <a
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/categories/${props.category[constants.ID]}`}>
      <div className="wrap">
        <div className="sidebar-category__item">
          <p className="sidebar-category__text">
            {props.category[constants.TEXT]}
          </p>
        </div>
        <div className="sidebar-category__hover" />
      </div>
    </a>
  );
}
