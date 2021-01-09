import React from 'react';
import Form from './Form.client';
import Header from '../Header/Header.client';
import { useContact } from '../../api/contacts.server';
import { getFullName } from '../../helpers';
import { useCategories } from '../../api/categories.server';
import Redirect from '../ServerRouter/redirect.client';

export default ({ match }) => {
  if (!match) return null;

  const contact = useContact(match.params.id);
  const categories = useCategories();

  if (!contact) return <Redirect to={'/'} />;

  return (
    <>
      <Header title={getFullName(contact.firstName, contact.lastName)} />
      <div className="contact-form-page__container">
        <div className="contact-form-page__inner">
          <Form data={contact} categories={categories} />
        </div>
      </div>
    </>
  );
};
