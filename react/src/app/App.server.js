import React from 'react';
import CategoryPage from '../components/CategoryPage/CategoryPage.client';
import ContactFormPage from '../components/ContactFormPage/ContactFormPage.client';

import Switch from './ServerRouter/switch.server';
import Route from './ServerRouter/route.server';
import Router from './ServerRouter/router.server';

import ContactPage from '../components/ContactPage/ContactPage.client';
import Layout from '../layout/Layout.client';

function App({ url }) {
  return (
    <Layout>
      <Router url={url}>
        <Switch>
          <Route path={'/home'} exact={true}>
            <CategoryPage />
          </Route>
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
          <Route path={'/account/:id'} exact={true}>
            <ContactPage />
          </Route>
          <Route path={'/account'} exact={true}>
            <ContactPage />
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
