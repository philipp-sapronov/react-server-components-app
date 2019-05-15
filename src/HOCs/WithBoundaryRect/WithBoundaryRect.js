import React from 'react';
import getElementPosition from './../../helpers/getElementPosition';

export default function WithBoundaryRect(Wrapped) {
  return class WithBoundaryRect extends React.Component {
    constructor(props) {
      super(props);
    }

    clickHandler = (targetId, targetDomain) => e => {
      const targetPosition = getElementPosition(e);
      this.props.clickHandler({ targetId, targetDomain, targetPosition });
    };

    render() {
      return <Wrapped {...this.props} clickHandler={this.clickHandler.bind(this)} />;
    }
  };
}
