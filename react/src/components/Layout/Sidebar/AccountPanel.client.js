import React from 'react';
// import { Link } from 'react-router-dom';

export default function AccountPanel() {
  return (
    <div className="account-panel__wrapper">
      <div className="account-panel__inner">
        <div className="account-panel__photo-wrap">
          <img
            className="account-panel__photo"
            src={'/assets/user.png'}
            alt="Avatar"
          />
        </div>
        <div className="account-panel__name-wrap">
          <a>
            {/*<Link exact to={'/account'}>*/}
            <p className="account-panel__name">User</p>
            {/*</Link>*/}
          </a>
          {/* TODO: put here dotsMenu */}

          <a className="account-panel__logout" to="/Login">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
}
