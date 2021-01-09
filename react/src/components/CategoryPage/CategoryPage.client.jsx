import React from 'react';
// import styles from "./category-page.module.sass";

import Header from '../Header/Header.client';
import { ContactList } from './ContactList/Contacts.client';

// import scrollStyles from "./scrollbar.module.sass";
import Scrollbar from '../../HOCs/WithScrollbar/WithScrollbar.client';

const Page = (props) => {
  // const { scrollThumb, scrollBar, scrollContainer } = props;
  console.log(props, 'PROPS 12');

  return (
    <div>
      <Header />
      <Scrollbar>
        <ContactList />
      </Scrollbar>
    </div>
  );
};

export default Page;
