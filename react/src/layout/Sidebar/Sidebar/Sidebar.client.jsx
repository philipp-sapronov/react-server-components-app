import React, { Fragment } from 'react';
// import styles from './sidebar.module.sass';
import Logo from '../Logo/Logo.client';
import AccountPanel from '../AccountPanel/AccountPanel.client';
import Categories from '../Categories/Categories.client';
import Search from '../Search/Search.client';
import Birthdays from '../Birthdays/Birthdays.client';
import AddContactBtn from '../AddContactBtn/AddContactBtn.client';
import ToggleSidebar from './../../ToggleSidebar/ToggleSidebar.client';
import { WithScrollbar } from '../../../HOCs/WithScrollbar/WithScrollbar.client';

// import { ReactComponent as IconClose } from "../../../layout/ToggleSidebar/images/close.svg";

const styles = {}; // __webpack__
import classNames from 'classnames';

function Sidebar(props) {
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
          <div
            className="scroll-bar"
            ref={scrollThumb.ref}
            onMouseDown={scrollThumb.onMouseDown}
          />
        </div>

        <div
          className={`sidebar__container`}
          ref={scrollContainer.ref}
          onScroll={scrollContainer.onScroll}>
          <div className={styles.inner}>
            <div className={styles.toggleWrap}>
              <ToggleSidebar icon={'/assets/close.svg'} />
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

export default WithScrollbar(Sidebar);
