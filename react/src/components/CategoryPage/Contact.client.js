import React from 'react';
import { Link } from 'react-router-dom';
// import DotsMenu from '../../../components/Shared/DotsMenu/DotsMenu.client';
import Avatar from '../Shared/Avatar.client';

// const { ContactBtn } = DotsMenu;

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

const Contact = (props) => {
  const { contact } = props;

  if (!contact) return null;

  return (
    <div key={contact.id} className="contact__grid-item contact__item">
      <div className="contact__inner">
        <Link exact to={`/contacts/${contact.id}`}>
          <Avatar
            classes={{
              wrapper: 'contact__avatar-wrap',
              letters: 'contact__letters',
            }}
            src={contact.avatar}
            letter={contact.firstname.charAt(0)}
          />
          <div className="contact__name-wrap">
            <p className="contact__name">
              {getFullName(contact.firstname, contact.lastname)}
            </p>
            <p className="contact__description">{contact.phone}</p>
          </div>
        </Link>

        {/*<ContactBtn triggerId={contact[constants.id]} module="contact" />*/}
      </div>
    </div>
  );
};

export default Contact;
