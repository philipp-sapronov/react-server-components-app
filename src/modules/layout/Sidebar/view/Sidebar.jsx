import React from 'react';
import styles from './sidebar.module.sass';
import Logo from '../../../sidebar/Logo';
import AccountPanel from '../../../sidebar/AccountPanel';
import Categories from '../../../sidebar/Categories';
import Search from '../../../sidebar/Search';
import Birthdays from '../../../sidebar/Birthdays';
import AddContactBtn from '../../../sidebar/AddContactBtn';
import cssScrollbar from './scrollbar.css';
import cssSidebar from './sidebar.css';

export default function Sidebar(props) {
  const { scrollThumb, scrollBar, scrollContainer, isSidebar } = props;
  console.log(props, 'SIDEBR PROPS');
  return (
    <aside className={styles.wrap}>
      <div className="scroll-wrap" ref={scrollBar.ref}>
        <div className="scroll-bar" ref={scrollThumb.ref} onMouseDown={scrollThumb.onMouseDown} />
      </div>

      <div
        className={`sidebar__container`}
        ref={scrollContainer.ref}
        onScroll={scrollContainer.onScroll}
      >
        <div className={styles.inner}>
          <Logo />
          <AccountPanel />
          <Search />
          <Categories />
          <Birthdays />
          <AddContactBtn />
        </div>
      </div>
    </aside>
  );
}
