import React from 'react';
import Avatar from '../Shared/Avatar.client';
import Header from '../Header/Header.client';
import { useContact } from '../../api/contacts.server';
import { getFirstLetter, getFullName } from '../../helpers';
import { format } from 'date-fns';
import { useCategories } from '../../api/categories.server';
import Redirect from '../ServerRouter/redirect.client';

const avatarStyles = {
  wrapper: 'contact-page__avatarWrap',
  avatar: 'contact-page__avatar',
  letters: 'contact-page__letters',
};

const ContactPage = ({ match }) => {
  if (!match) return null;

  const contact = useContact(match.params.id);
  if (!contact) return <Redirect to={'/'} />;

  const categories = useCategories();

  // TODO:
  // server side redirect
  // it can be <Redirect /> component

  const category = Array.isArray(categories)
    ? categories.find((it) => it.contacts.includes(contact.id))
    : null;

  return (
    <div>
      <Header title={getFullName(contact.firstName, contact.lastName)} />
      <div className="contact-page__inner">
        <Avatar
          classes={avatarStyles}
          letter={getFirstLetter(contact.firstName)}
          src={contact.avatar}
        />
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Name:</div>
          <div className="contact-page__value">{contact.firstName}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Surname:</div>
          <div className="contact-page__value">{contact.lastName}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Description:</div>
          <div className="contact-page__value">{contact.description}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Phone:</div>
          <div className="contact-page__value">{contact.phone}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Email:</div>
          <div className="contact-page__value">{contact.email}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Birthday:</div>
          <div className="contact-page__value">
            {contact.birthday
              ? format(new Date(contact.birthday), 'dd MMMM yyyy')
              : ''}
          </div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Facebook:</div>
          <div className="contact-page__value">{contact.facebook}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Instagram:</div>
          <div className="contact-page__value">{contact.instagram}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Category:</div>
          <div className="contact-page__value">
            {category ? category.name : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
