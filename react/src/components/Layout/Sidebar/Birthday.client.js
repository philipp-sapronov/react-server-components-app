import React from 'react';
import { Link } from 'react-router-dom';

export default function Component(props) {
  return (
    <Link to={`/contacts/${props.item.id}`}>
      <div className="birthday__wrap">
        <div className="birthday__item">
          <div className="birthday__hover" />
          <p className="birthday__name">
            {props.item.fullName}
            <span className="birthday__date">{props.item.birthday}</span>
          </p>
          <p className="birthday__age">{`will be  ${props.item.comingAge} years old`}</p>
        </div>
      </div>
    </Link>
  );
}