import React, { Fragment } from "react";
import styles from "./sidebar.module.sass";
import Logo from "../Logo";
import AccountPanel from "../AccountPanel";
import Categories from "../Categories";
import Search from "../Search";
import Birthdays from "../Birthdays";
import AddContactBtn from "../AddContactBtn";
import ToggleSidebar from "./../../ToggleSidebar";
import { ReactComponent as IconClose } from "../../../layout/ToggleSidebar/views/images/close.svg";
import classNames from "classnames";

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
          <div
            className="scroll-bar"
            ref={scrollThumb.ref}
            onMouseDown={scrollThumb.onMouseDown}
          />
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
