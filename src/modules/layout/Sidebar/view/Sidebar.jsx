import React from 'react';
import styles from './sidebar.module.sass';
import Logo from '../../../sidebar/Logo';
import AccountPanel from '../../../sidebar/AccountPanel';
import Categories from '../../../sidebar/Categories';
import Search from '../../../sidebar/Search';
import Birthdays from '../../../sidebar/Birthdays';
import AddContactBtn from '../../../sidebar/AddContactBtn';

export default function Sidebar(props) {
  return (
    <aside className={styles.wrap}>
      <div className={styles.inner}>
        <Logo />
        <AccountPanel />
        <Search />
        <Categories />
        <Birthdays />
        <AddContactBtn />
      </div>
    </aside>
  );
}
