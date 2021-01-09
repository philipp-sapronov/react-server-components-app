import React from 'react';

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
          <p className="account-panel__name">User</p>
          <a className="account-panel__logout" to="/">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
}
