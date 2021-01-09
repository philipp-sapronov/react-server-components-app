import React from 'react';
import Contact from './Contact.client';
import { useContacts } from '../../hooks/contacts';

export const ContactList = () => {
  const items = useContacts();

  items.sort((a, b) => {
    if (a.lastname === b.lastname) return 0;
    if (a.lastname > b.lastname) return 1;
    else return -1;
  });

  const blocks = [[]];

  items.reduce((prev, it) => {
    const prevLetter = prev ? prev.lastname.charAt(0) : null;
    const nextLetter = it.lastname.charAt(0);

    if (prevLetter !== nextLetter) blocks.push([]);

    blocks[blocks.length - 1].push(it);
    return it;
  }, items[0]);

  return blocks.map((block) => {
    const letter = block[0].lastname.charAt(0);

    return (
      <div className="wrap">
        <p className="contact-list__letter">{letter}</p>
        <div className="contact-list__container">
          {block.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    );
  });
};
