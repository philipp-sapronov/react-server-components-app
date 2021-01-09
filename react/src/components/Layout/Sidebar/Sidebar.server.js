import React, { Suspense } from 'react';
import Logo from './Logo.client';
import AccountPanel from './AccountPanel.client';
import Search from './Search.client';
import AddContactBtn from './AddContactBtn.client';
import Scrollbar from '../../Shared/Scrollbar.client';

import Birthdays from './Birthdays.server';
import Categories from './Categories.server';
import classNames from 'classnames';

function Sidebar() {
  const wrapClassName = classNames({
    sidebar__wrap: true,
    'is-open': true,
  });

  return (
    <aside className={wrapClassName}>
      <Scrollbar
        classes={{
          container: 'sidebar__container',
        }}>
        <div className="sidebar__inner">
          <Logo />
          <AccountPanel />
          <Search />
          <Suspense fallback={null}>
            <Categories />
          </Suspense>
          <Suspense fallback={null}>
            <Birthdays />
          </Suspense>
          <AddContactBtn />
        </div>
      </Scrollbar>
    </aside>
  );
}

export default Sidebar;
