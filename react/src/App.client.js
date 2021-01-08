import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Slot from './slot.client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Error } from './Error';

export {default} from './__app/app/App'

//
// export default function Root({ initialCache }) {
//   return (
//     <BrowserRouter>
//       <ErrorBoundary FallbackComponent={Error}>
//         <Suspense fallback={null}>
//           <Slot />
//         </Suspense>
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// }
