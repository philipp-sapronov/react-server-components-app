import React, { Component } from 'react';

function WithHandlers(Wrapped) {
  return class WithHandlers extends Component {
    constructor(props) {
      super(props);
    }
    //
    render() {
      return <Wrapped {...this.props} />;
    }
  };
}

export default WithHandlers;
