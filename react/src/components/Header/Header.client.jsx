import React from 'react';
// import styles from './header.module.sass';
import ToggleSidebar from '../../layout/ToggleSidebar/ToggleSidebar.client';
// FIXME: image import
// import { ReactComponent as Icon } from "../../layout/ToggleSidebar/images/burger.svg";
import DotsMenu from '../../components/Shared/DotsMenu/DotsMenu.client';

const styles = {};

export default function Component({ title = 'Header' }) {
  return (
    <header className={styles.wrap}>
      {/*__ webpack__ <ToggleSidebar icon={Icon} />*/}
      <h2 className={styles.title}>{title}</h2>
      <DotsMenu module="header" />
    </header>
  );
}
