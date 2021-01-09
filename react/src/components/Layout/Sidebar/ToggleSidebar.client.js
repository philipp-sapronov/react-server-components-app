import React from 'react';

function ToggleSidebar({ icon, toggleSidebar }) {
  return (
    <div className="toggle-sidebar__wrap">
      <button className="toggle-sidebar__btn" onClick={toggleSidebar}>
        {!!icon && <img src={icon} />}
      </button>
    </div>
  );
}

export default ToggleSidebar;
