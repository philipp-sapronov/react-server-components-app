import React from "react";
import Sidebar from "./Sidebar";
import styles from "./main.module.sass";
// import ContextMenu from "../../modals/ContextMenu";

const Layout = ({ children }) => {
  return (
    <div className="page__wrapper">
      <Sidebar />
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
      {/*<ContextMenu />*/}
    </div>
  );
};

export default Layout;