import React, { Suspense } from 'react';

import Header from '../Header/Header.client';
import { ContactList } from './ContactList.server';
import Scrollbar from '../Shared/Scrollbar.client';
import { useContacts } from '../../api/contacts.server';
import { useCategory } from '../../api/categories.server';

const Page = ({ match }) => {
  if (!match) return null;

  const contacts = useContacts(match.params.id);
  const category = useCategory(match.params.id);

  if (!contacts) return null;

  // TODO:
  // server side redirect
  // it can be <Redirect /> component
  // contact-form-page__wrapper

  const title = category ? category.name : 'All Contacts';

  return (
    <div>
      <Header title={title} />
      <Scrollbar
        classes={{
          thumb: 'main-scrollbar__thumb',
          bar: 'main-scrollbar__bar',
          container: 'category-page__container',
        }}>
        <div className="category-page__inner">
          <Suspense fallback={<div>loading ...</div>}>
            <ContactList contacts={contacts} />
          </Suspense>
        </div>
      </Scrollbar>
    </div>
  );
};

export default Page;
