import React from 'react';

import Header from '../Header/Header.client';
import { ContactList } from './ContactList.client';
import Scrollbar from '../../HOCs/WithScrollbar/WithScrollbar.client';

const Page = () => {
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
