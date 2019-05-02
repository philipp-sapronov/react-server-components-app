import React from 'react';
// import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Main from '../../Main';

export default function Layout(props) {
  console.log(props, 'PROPS LAYOUT');

  return (
    <div class="page__wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}
