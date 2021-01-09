import React from 'react';
// import { Link } from 'react-router-dom';

export default function Component(props) {
  return (
    <a to={`/contacts/${props.item.ID}`}>
      <div className="birthday__wrap">
        <a className="birthday__item">
          <div className="birthday__hover" />
          <p className="birthday__name">
            {props.item.fullName}
            <span className="birthday__date">{props.item.birthday}</span>
          </p>
          <p className="birthday__age">{`will be  ${props.item.comingAge} years old`}</p>
        </a>
      </div>
    </a>
  );
}
