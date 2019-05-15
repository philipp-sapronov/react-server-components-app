import React, { Component } from 'react';

function WithMenuItems(Wrapped) {
  return class WithMenuItems extends Component {
    constructor(props) {
      super(props);
    }
    //
    render() {
      return <Wrapped {...this.props} />;
    }
  };
}

export default WithMenuItems;
