import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Slot from './slot.client';
import { BrowserRouter } from 'react-router-dom';
import { Error } from './Error';
import './styles.css';
// __webpack import './assets/css/reset.css';

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
