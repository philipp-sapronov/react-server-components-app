import React from 'react';
import Birthday from './Birthday.client';

export default function Component(props) {
  return (
    <div className="birthday-list__wrap">
      {/* ASIDE ??*/}
      <div className="birthday-list__aside">
        <div className="birthday-list__header">Coming birthday</div>
        {(props.entities || []).map((item) => (
          <Birthday item={item} key={item.ID} />
        ))}
      </div>
    </div>
  );
}
