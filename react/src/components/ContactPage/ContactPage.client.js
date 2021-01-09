import React from 'react';
import Avatar from '../Shared/Avatar.client';
import Header from '../Header/Header.client';
import { useContact } from '../../hooks/contacts';
import { useHistory, useParams } from 'react-router-dom';

const avatarStyles = {
  wrapper: 'contact-page__avatarWrap',
  avatar: 'contact-page__avatar',
  letters: 'contact-page__letters',
};

const ContactPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const contact = useContact(id);

  if (!contact) {
    console.log(id, contact);
    history.push('/');
    return null;
  }

  return (
    <div>
      <Header title={contact.firstname + ' ' + contact.lastname} />
      <div className="contact-page__inner">
        <Avatar
          classes={avatarStyles}
          letter={contact.firstname.charAt(0)}
          src={contact.avatar}
        />
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Name:</div>
          <div className="contact-page__value">{contact.firstname}</div>
        </div>
        <div className="contact-page__fieldWrap">
          <div className="contact-page__label">Surname:</div>
          <div className="contact-page__value">{contact.lastname}</div>
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
            {contact.birthday.toDateString()}
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
          <div className="contact-page__value">{contact.category}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
