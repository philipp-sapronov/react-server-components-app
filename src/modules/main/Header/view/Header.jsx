import React from 'react';
import styles from './header.module.sass';
import categorySchema from '../../../../constants/categorySchema';
import ToggleSidebar from '../../../layout/ToggleSidebar';
import { ReactComponent as Icon } from '../../../layout/ToggleSidebar/views/images/burger.svg';
import DotsMenu from './../../../common/DotsMenu';
import { history } from './../../../root/reduxState/rootReducer';

const { TEXT } = categorySchema;
const { HeaderBtn } = DotsMenu;

export default function Component(props) {
  // if (!props[TEXT]) {
  //   history.push('/categories/1');
  //   return null;
  // }
  console.log(props[TEXT], 'HEADER TEXT');
  return (
    <header className={styles.wrap}>
      <ToggleSidebar icon={Icon} />
      <h2 className={styles.title}>{props[TEXT]}</h2>
      <HeaderBtn module="header" />
    </header>
  );
}
