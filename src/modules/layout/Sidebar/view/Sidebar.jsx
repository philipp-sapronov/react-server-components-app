import React, { Fragment } from 'react';
import styles from './sidebar.module.sass';
import Logo from '../../../sidebar/Logo';
import AccountPanel from '../../../sidebar/AccountPanel';
import Categories from '../../../sidebar/Categories';
import Search from '../../../sidebar/Search';
import Birthdays from '../../../sidebar/Birthdays';
import AddContactBtn from '../../../sidebar/AddContactBtn';
import cssScrollbar from './scrollbar.css';
import cssSidebar from './sidebar.css';
import ToggleSidebar from './../../ToggleSidebar';
import { ReactComponent as IconClose } from '../../../layout/ToggleSidebar/views/images/close.svg';
import classNames from 'classnames';

export default function Sidebar(props) {
  const { scrollThumb, scrollBar, scrollContainer, isSidebarOpen } = props;
  const wrapClassName = classNames({
    [styles.wrap]: true,
    [styles.isOpen]: isSidebarOpen,
  });
  const overlayClassName = classNames({
    [styles.overlay]: true,
    [styles.isOpen]: isSidebarOpen,
  });
  return (
    <Fragment>
      <div className={overlayClassName} onClick={props.toggleSidebar} />
      <aside className={wrapClassName}>
        <div className="scroll-wrap" ref={scrollBar.ref}>
          <div className="scroll-bar" ref={scrollThumb.ref} onMouseDown={scrollThumb.onMouseDown} />
        </div>

        <div
          className={`sidebar__container`}
          ref={scrollContainer.ref}
          onScroll={scrollContainer.onScroll}
        >
          <div className={styles.inner}>
            <div className={styles.toggleWrap}>
              <ToggleSidebar icon={IconClose} />
            </div>
            <Logo />
            <AccountPanel />
            <Search />
            <Categories />
            <Birthdays />
            <AddContactBtn />
          </div>
        </div>
      </aside>
    </Fragment>
  );
}
