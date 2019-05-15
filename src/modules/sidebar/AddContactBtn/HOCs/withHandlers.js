import React, { Component } from 'react';
import { hashFn } from '../../../../core/helpers/hashFunctions';
import { history } from '../../../root/reducers/rootReducer';
import routes from './../../../../routes/routes';

const { addContact } = routes;

function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    constructor(props) {
      super(props);
    }
    clickHandler = () => {
      const generatedId = hashFn();
      this.props.setAddingContactId({ id: generatedId });
      history.push(`/contact_add/${generatedId}`);
    };
    //
    render() {
      return <Wrapped {...this.props} clickHandler={this.clickHandler} />;
    }
  };
}

export default WithHandlers;
