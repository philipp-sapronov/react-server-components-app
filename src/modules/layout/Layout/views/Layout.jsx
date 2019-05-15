import React from 'react';
import Sidebar from '../../Sidebar';
import Main from '../../Main';
import ContextMenu from '../../../modals/ContextMenu';

export default function Layout(props) {
  console.log(props, 'PROPS LAYOUT');

  return (
    <div className="page__wrapper">
      <Sidebar />
      <Main />

      <ContextMenu />
    </div>
  );
}
