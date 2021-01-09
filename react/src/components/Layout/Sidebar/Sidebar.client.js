import React, { Fragment } from 'react';
import Logo from './Logo.client';
import AccountPanel from './AccountPanel.client';
import Categories from './Categories.client';
import Search from './Search.client';
import Birthdays from './Birthdays.client';
import AddContactBtn from './AddContactBtn.client';
import Scrollbar from '../../Shared/Scrollbar.client';

import classNames from 'classnames';

function Sidebar({ toggleSidebar }) {
  // const { scrollThumb, scrollBar, scrollContainer, isSidebarOpen } = props;

  const wrapClassName = classNames({
    sidebar__wrap: true,
    'is-open': true,
  });

  const overlayClassName = classNames({
    sidebar__overlay: false,
    'is-open': false,
  });

  return (
    <Fragment>
      {/*<div className={overlayClassName} onClick={toggleSidebar} />*/}
      <aside className={wrapClassName}>
        <Scrollbar
          classes={{
            thumb: 'sidebar-scrollbar__thumb',
            bar: 'sidebar-scrollbar__bar',
            container: 'sidebar__container',
          }}>
          <div className="sidebar__inner">
            <Logo />
            <AccountPanel />
            <Search />
            <Categories />
            <Birthdays />
            <AddContactBtn />
          </div>
        </Scrollbar>
      </aside>
    </Fragment>
  );
}

export default Sidebar;
