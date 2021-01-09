import React from 'react';
import Link from '../../ServerRouter/link.client';
import { format } from 'date-fns';
import { getFullName } from '../../../helpers';

const Component = ({ contact }) => {
  if (!contact) return null;
  if (!contact.birthday) return null;

  const date = new Date(contact.birthday);
  // FIXME:
  const comingAge = new Date().getFullYear() - date.getFullYear();

  return (
    <Link className="birthday__item" to={`/contacts/${contact.id}`}>
      <div className="birthday__wrap">
        <div className="birthday__contact">
          <div className="birthday__hover" />
          <p className="birthday__name">
            {getFullName(contact.firstName, contact.lastName)}
            <span className="birthday__date">
              {format(date, 'dd MMMM yyyy')}
            </span>
          </p>
          <p className="birthday__age">{`will be  ${comingAge} years old`}</p>
        </div>
      </div>
    </Link>
  );
};

export default Component;
