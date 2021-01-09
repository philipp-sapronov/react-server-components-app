import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  return (
    <Link exact className="main-menu__list-item menu-item" to={`/`}>
      <div className="logo-wrap">
        <div className="logo-text">
          <div className="text-logo__text">Contact Book</div>
        </div>
      </div>
    </Link>
  );
}
