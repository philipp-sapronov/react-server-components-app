import React from 'react';
import Categories from './view/Categories';
import WithConnect from './container';
// import WithHandlers from './HOCs/withHandlers';

// export default Container(WithHandlers(View));

export default WithConnect(Categories);
