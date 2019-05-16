import React, { Fragment } from 'react';

export default (...wrapped) => props => (
  <Fragment>
    {wrapped.map(Wrapped => (
      <Wrapped {...props} />
    ))}
  </Fragment>
);
