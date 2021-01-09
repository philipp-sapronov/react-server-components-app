import React, { Fragment } from 'react';
// import styles from './sidebar.module.sass';
import Logo from '../Logo/Logo.client';
import AccountPanel from '../AccountPanel/AccountPanel.client';
import Categories from '../Categories/Categories.client';
import Search from '../Search/Search.client';
import Birthdays from '../Birthdays/Birthdays.client';
import AddContactBtn from '../AddContactBtn/AddContactBtn.client';
import ToggleSidebar from './../../ToggleSidebar/ToggleSidebar.client';
import Scrollbar from '../../../HOCs/WithScrollbar/WithScrollbar.client';

import classNames from 'classnames';

function Sidebar(props) {
  // const { scrollThumb, scrollBar, scrollContainer, isSidebarOpen } = props;

  const wrapClassName = classNames({
    sidebar__wrap: true,
    'is-open': true,
  });

  const overlayClassName = classNames({
    sidebar__overlay: true,
    'is-open': true,
  });

  return (
    <Fragment>
      <div className={overlayClassName} onClick={props.toggleSidebar} />
      <aside className={wrapClassName}>
        <Scrollbar
          classes={{
            thumb: 'sidebar-scrollbar__thumb',
            bar: 'sidebar-scrollbar__bar',
            container: 'sidebar__container',
          }}>
          <div className="sidebar__inner">
            <div className="sidebar__toggle-wrap">
              <ToggleSidebar icon={'/assets/close.svg'} />
            </div>
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
