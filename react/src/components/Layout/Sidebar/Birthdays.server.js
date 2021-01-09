import React from 'react';
import Birthday from './Birthday.server';
import { useComingBirthdays } from '../../../api/contacts.server';

export default function Component() {
  const contacts = useComingBirthdays();

  return (
    <div className="birthday-list__wrap">
      {/* ASIDE ??*/}
      <div className="birthday-list__aside">
        <div className="birthday-list__header">Coming birthday</div>
        {contacts.map((contact) => (
          <Birthday contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}
