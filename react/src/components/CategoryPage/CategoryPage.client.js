import React from 'react';

import Header from '../Header/Header.client';
import { ContactList } from './ContactList.client';
import Scrollbar from '../../HOCs/WithScrollbar/WithScrollbar.client';

const Page = () => {
  return (
    <div>
      <Header />
      <Scrollbar
        classes={{
          thumb: 'main-scrollbar__thumb',
          bar: 'main-scrollbar__bar',
          container: 'category-page__container',
        }}>
        <div className="category-page__inner">
          <ContactList />
        </div>
      </Scrollbar>
    </div>
  );
};

export default Page;
