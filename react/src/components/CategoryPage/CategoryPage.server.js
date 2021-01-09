import React, { Suspense } from 'react';

import Header from '../Header/Header.client';
import { ContactList } from './ContactList.server';
import Scrollbar from '../Shared/Scrollbar.client';
import { useContacts } from '../../api/contacts.server';
import { useCategory } from '../../api/categories.server';
import Redirect from '../ServerRouter/redirect.client';

const Page = ({ match }) => {
  if (!match) return null;

  const contacts = useContacts(match.params.id);
  const category = useCategory(match.params.id);

  if (!contacts.length) return <Redirect to={'/'} />;

  const title = category ? category.name : 'All Contacts';

  return (
    <div>
      <Header title={title} />
      <Scrollbar
        classes={{
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
