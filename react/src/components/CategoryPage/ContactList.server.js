import React from 'react';
import Link from '../ServerRouter/link.client';
import Avatar from '../Shared/Avatar.client';
import { useContacts } from '../../api/contacts.server';
import { getFirstLetter, getFullName } from '../../helpers';

export const ContactList = () => {
  const items = useContacts() || [];

  items.sort((a, b) => {
    if (a.lastName === b.lastName) return 0;
    if (a.lastName > b.lastName) return 1;
    else return -1;
  });

  const blocks = [[]];

  items.reduce((prev, it) => {
    const prevLetter = prev ? getFirstLetter(prev.lastName) : null;
    const nextLetter = getFirstLetter(it.lastName);

    if (prevLetter !== nextLetter) blocks.push([]);

    blocks[blocks.length - 1].push(it);
    return it;
  }, items[0]);

  return blocks.map((block) => {
    const letter = getFirstLetter(block[0].lastName);

    return (
      <div className="wrap">
        <p className="contact-list__letter">{letter}</p>
        <div className="contact-list__container">
          {block.map((contact) => (
            <div key={contact.id} className="contact__grid-item contact__item">
              <div className="contact__inner">
                <Link exact to={`/contacts/${contact.id}`}>
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
