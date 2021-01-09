import React, { Suspense } from 'react';
import EditContactPage from './EditContactPage.server';

const PageSuspense = (props) => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {React.createElement(EditContactPage, props)}
    </Suspense>
  );
};

export default PageSuspense;
