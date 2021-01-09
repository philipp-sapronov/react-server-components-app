import React from 'react';
// import { NavLink } from 'react-router-dom';

export default function Logo(props) {
  return (
    <a
      exact
      // activeClassName="active"
      // className="main-menu__list-item menu-item"
      to={`/home`}>
      <div className="logo-wrap">
        <div className="logo-text">
          <div className="text-logo__text">Contact Book</div>
        </div>
      </div>
    </a>
  );
}
