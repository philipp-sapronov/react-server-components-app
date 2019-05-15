import React, { Component } from 'react';
import contactSchema from '../../../../core/constants/contactSchema';

const { NAME, SURNAME } = contactSchema;
function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    constructor(props) {
      super(props);
    }
    getFirtLetter = word => word.charAt(0).toUpperCase();
    getFirstLettersOfName = contact => {
      return `${this.getFirtLetter(contact[NAME])}${this.getFirtLetter(contact[SURNAME])}`;
    };
    //
    render() {
      return <Wrapped getFirstLettersOfName={this.getFirstLettersOfName} {...this.props} />;
    }
  };
}

export default WithHandlers;
