import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Slot from './Slot.client';
import Error from './Error';
import { BrowserRouter } from 'react-router-dom';

export default function Root({ initialCache }) {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={null}>
          <Slot />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
