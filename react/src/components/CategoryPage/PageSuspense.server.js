import React, { Suspense } from 'react';
import CategoryPage from './CategoryPage.server';

const PageSuspense = (props) => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {React.createElement(CategoryPage, props)}
    </Suspense>
  );
};

export default PageSuspense;
