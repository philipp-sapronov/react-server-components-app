import React from 'react';
import Link from '../../ServerRouter/link.client';
import { format } from 'date-fns';
import { getFullName } from '../../../helpers';

const Component = ({ contact }) => {
  if (!contact) return null;
  if (!contact.birthday) return null;

  const date = new Date(contact.birthday);

  return (
    <Link className="birthday__item" to={`/contact/${contact.id}`}>
      <div className="birthday__wrap">
        <div className="birthday__contact">
          <div className="birthday__hover" />
          <p className="birthday__name">
            {getFullName(contact.firstName, contact.lastName)}
          </p>
          <p className="birthday__age">{format(date, 'dd MMMM yyyy')}</p>
        </div>
      </div>
    </Link>
  );
};

export default Component;
