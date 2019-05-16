import React, { Component } from 'react';
import { contactSchema } from '../../../../domains/contacts/state';
import { history } from './../../../root/reduxState/rootReducer';

const caontactFormValidatioon = state => {
  let result = true;
  contactSchema.required.forEach(prop => {
    if (!state[prop] || !state[prop].trim()) result = false;
  });
  return result;
};

function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    constructor(props) {
      super(props);
    }

    state = this.props.contact || { ...contactSchema.fields };
    placeholders = this.props.placeholders || {};

    getImageFile = file => {
      const url = window.URL || window.webkitURL;
      const img = url.createObjectURL(file);
      this.setState({ avatar: img });
    };

    submitHandler = ID => e => {
      e.preventDefault();
      console.log(this.state, 'STATE');
      if (!caontactFormValidatioon(this.state)) {
        return;
      }
      const newItem = {
        data: this.state,
        ID,
      };
      console.log(newItem, 'newItem');
      this.props.submit(newItem);

      history.push(`/contacts/${ID}`);
    };

    changeHandler = ({ target }) => {
      if (target.name === 'avatar') {
        this.getImageFile(target.files[0]);
        return;
      }

      if (target.name === 'category') {
        this.setState({ [target.name]: target[target.selectedIndex].attributes.dataid.value });
        return;
      }

      this.setState({ [target.name]: target.value });
    };

    cancelHandler = () => {
      history.goBack();
    };

    render() {
      console.log(this.props, 'FORM PROPS');
      return (
        <Wrapped
          {...this.props}
          values={this.state}
          cancelHandler={this.cancelHandler}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler(this.props.Id)}
        />
      );
    }
  };
}

export default WithHandlers;
