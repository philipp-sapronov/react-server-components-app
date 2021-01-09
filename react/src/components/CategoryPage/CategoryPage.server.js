import React, { Suspense } from 'react';

import Header from '../Header/Header.client';
import { ContactList } from './ContactList.server';
import Scrollbar from '../Shared/Scrollbar.client';

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
          <Suspense fallback={<div>loading ...</div>}>
            <ContactList />
          </Suspense>
        </div>
      </Scrollbar>
    </div>
  );
};

export default Page;
