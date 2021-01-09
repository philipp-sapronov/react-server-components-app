import React from 'react';

import Switch from '../ServerRouter/switch.server';
import Route from '../ServerRouter/route.server';
import Router from '../ServerRouter/router.server';
import CategoryPage from '../CategoryPage/PageSuspense.server';
import ContactPage from '../ContactPage/PageSuspense.server';
import EditContactPage from '../ContactFormPage/PageSuspense.server';
import AddContactPage from '../ContactFormPage/AddContactPage.client';

import Layout from '../Layout/Layout.server';

function App({ url }) {
  return (
    <Layout>
      <Router url={url}>
        <Switch>
          <Route path={'/contacts/:id'} exact={true}>
            <CategoryPage />
          </Route>
          <Route path={'/contact/:id'} exact={true}>
            <ContactPage />
          </Route>
          <Route path={'/search'} exact={true}>
            <CategoryPage />
          </Route>
          <Route path={'/add-contact'} exact={true}>
            <AddContactPage />
          </Route>
          <Route path={'/edit-contact/:id'} exact={true}>
            <EditContactPage />
          </Route>
          <Route path={'/'}>
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
// module.exports = App;
