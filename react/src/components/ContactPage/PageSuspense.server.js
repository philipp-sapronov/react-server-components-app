import React, { Suspense } from 'react';
import ContactPage from './ContactPage.server';

const PageSuspense = (props) => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {React.createElement(ContactPage, props)}
    </Suspense>
  );
};

export default PageSuspense;
