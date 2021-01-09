import React from 'react';
// import styles from './header.module.sass';
import ToggleSidebar from '../Layout/Sidebar/ToggleSidebar.client';
// FIXME: image import
// import { ReactComponent as Icon } from "../../layout/ToggleSidebar/images/burger.svg";
import DotsMenu from '../Shared/DotsMenu.client';

export default function Component({ title = 'Header' }) {
  return (
    <header className="header__wrap">
      {/*__ webpack__ <ToggleSidebar icon={Icon} />*/}
      <h2 className="header__title">{title}</h2>
      <DotsMenu module="header" />
    </header>
  );
}
