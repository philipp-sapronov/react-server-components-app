import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
// import ContextMenu from "../../modals/ContextMenu";

export const Layout = ({ children }) => {
  return (
    <div className="page__wrapper">
      <Sidebar />
      <Main>{children}</Main>
      {/*<ContextMenu />*/}
    </div>
  );
};
