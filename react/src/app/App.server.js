/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// import Layout from '../layout/Layout.client';

import CategoryPage from '../components/CategoryPage/CategoryPage.client';
// import ContactPage from '../components/ContactPage/ContactPage.client';
import ContactFormPage from '../components/ContactFormPage/ContactFormPage.client';
import React from 'react';

import Switch from './ServerRouter/switch.server';
import Route from './ServerRouter/route.server';
import Router from './ServerRouter/router.server';

function App({ url }) {
  return (
    <Router url={url}>
      <Switch>
        <Route path={'/home'} exact={true}>
          <CategoryPage />
        </Route>
        <Route path={'/categories/:id'} exact={true}>
          <CategoryPage />
        </Route>
        <Route path={'/contacts/:id'} exact={true}>
          {/*<ContactPage />*/}
        </Route>
        <Route path={'/search'} exact={true}>
          <CategoryPage />
        </Route>
        <Route path={'/add-contact'} exact={true}>
          <ContactFormPage />
        </Route>
        <Route path={'/edit-contact/:id'} exact={true}>
          <ContactFormPage />
        </Route>
        <Route path={'/account/:id'} exact={true}>
          {/*<ContactPage />*/}
        </Route>
        <Route path={'/account'} exact={true}>
          {/*<ContactPage />*/}
        </Route>

        <Route path={'/'}>
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
// module.exports = App;
