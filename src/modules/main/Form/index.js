import React from 'react';
import Form from './view/Form';
import ContainerForms from './container';
import WithHandlers from './HOCs/withHandlers';
import withRouteForms from './HOCs/withRoute';
import WithFragment from '../../../HOCs/WithFragment/WithFragment';

const { addContactRoute, editContactRoute } = withRouteForms;
const { addContactContainer, editContactContainer } = ContainerForms;

const WithRoutes = [
  addContactRoute(addContactContainer(WithHandlers(Form))),
  editContactRoute(editContactContainer(WithHandlers(Form))),
];

export default WithFragment(WithRoutes);
