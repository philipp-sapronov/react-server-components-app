import React, { Component } from 'react';
import { contactSchema } from '../../../../domains/contacts/state';
import { history } from './../../../root/reducers/rootReducer';

const caontactFormValidatioon = state => {
  let result = true;
  contactSchema.required.forEach(prop => {
    if (!state[prop] || !state[prop].trim()) result = false;
  });
  return result;
};

function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    state = this.props.contact || { ...contactSchema.fields };
    placeholders = this.props.placeholders || {};

    submitHandler = ID => e => {
      e.preventDefault();

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
      this.setState({ [target.name]: target.value });
    };

    selectHandler = ({ target }) => {
      this.setState({ [target.name]: target[target.selectedIndex].attributes.dataid.value });
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
          selectHandler={this.selectHandler}
          submitHandler={this.submitHandler(this.props.Id)}
        />
      );
    }
  };
}

export default WithHandlers;
