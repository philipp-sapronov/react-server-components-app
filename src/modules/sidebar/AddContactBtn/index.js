import React from 'react';
import AddContactBtn from './view/AddContactBtn';
import Container from './container';
import WithHandlers from './HOCs/withHandlers';

export default Container(WithHandlers(AddContactBtn));
