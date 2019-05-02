import React from 'react';
import { Route } from 'react-router-dom';

export default function AllTodosPage(Wrapped) {
  return <Route path="/" component={Wrapped} />;
}
