import React from 'react';
import Sidebar from './Sidebar/Sidebar/Sidebar.client';
// import ContextMenu from "../../modals/ContextMenu";

const Layout = ({ children }) => {
  return (
    <div className="page__wrapper">
      <Sidebar />
      <main className="layout__wrapper">{children}</main>
      {/*<ContextMenu />*/}
    </div>
  );
};

export default Layout;
