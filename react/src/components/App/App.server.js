import React from 'react';

import Switch from '../ServerRouter/switch.server';
import Route from '../ServerRouter/route.server';
import Router from '../ServerRouter/router.server';
import CategoryPage from '../CategoryPage/CategoryPage.server';
import ContactFormPage from '../ContactFormPage/ContactFormPage.client';
import ContactPage from '../ContactPage/PageSuspense.server';
import Layout from '../Layout/Layout.server';

function App({ url }) {
  return (
    <Layout>
      <Router url={url}>
        <Switch>
          <Route path={'/categories/:id'} exact={true}>
            <CategoryPage />
          </Route>
          <Route path={'/contacts/:id'} exact={true}>
            <ContactPage />
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
