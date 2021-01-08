/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Switch, Route, Router } from './server-router/index.server';

import About from './About/about.server';
import Home from './Home/home.server';
import React from 'react';

export default function App({ url }) {
  return (
    <Router url={url}>
      <Switch>
        <Route path={'/about'} serverOnly>
          <About />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
