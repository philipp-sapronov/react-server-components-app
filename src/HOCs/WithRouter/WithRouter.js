import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const WithRoute = route => Wrapped => props => {
  const _props = props;
  return <Route path={route.path} exact={route.exact} component={Wrapped} />;
};

export const withPropsRoute = route => Wrapped => props => {
  const _props = props;
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <Wrapped {...props} {..._props} />}
    />
  );
};

export const WithSwitch = wrapped => props => (
  <Switch>
    {wrapped.map(Wrapped => (
      <Wrapped {...props} />
    ))}
  </Switch>
);
