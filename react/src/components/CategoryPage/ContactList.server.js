import React from 'react';
import Link from '../ServerRouter/link.client';
import Avatar from '../Shared/Avatar.client';
import { getFirstLetter, getFullName, sortByLastName } from '../../helpers';

export const ContactList = ({ contacts }) => {
  if (!Array.isArray(contacts)) return null;

  const blocks = [[]];

  contacts.sort(sortByLastName);
  contacts.reduce((prev, it) => {
    if (!prev || !it) return null;
    const prevLetter = prev ? getFirstLetter(prev.lastName) : null;
    const nextLetter = getFirstLetter(it.lastName);

    if (prevLetter !== nextLetter) blocks.push([]);
    blocks[blocks.length - 1].push(it);
    return it;
  }, contacts[0]);

  return blocks.map((block) => {
    const letter = getFirstLetter(block[0].lastName);

    return (
      <div className="contact-list__wrapper">
        <p className="contact-list__letter">{letter}</p>
        <div className="contact-list__container">
          {block.map((contact) => (
            <div key={contact.id} className="contact__grid-item contact__item">
              <div className="contact__inner">
                <Link exact to={`/contact/${contact.id}`}>
                  <Avatar
                    classes={{
                      wrapper: 'contact__avatar-wrap',
                      letters: 'contact__letters',
                    }}
                    src={contact.avatar}
                    letter={contact.firstName.charAt(0)}
                  />
                  <div className="contact__name-wrap">
                    <p className="contact__name">
                      {getFullName(contact.firstName, contact.lastName)}
                    </p>
                    <p className="contact__description">{contact.phone}</p>
                  </div>
                </Link>

                {/*<ContactBtn triggerId={contact[constants.id]} module="contact" />*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });
};
