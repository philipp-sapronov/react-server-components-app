import React from 'react';
import ContactPage from './view/ContactPage';
import WithConnect from './container';
import WithRoute from './HOCs/withRoute';
// import WithHandlers from './HOCs/withHandlers';

// export default Container(WithHandlers(View));
// console.log(withConnect);
export default WithRoute(WithConnect(ContactPage));
