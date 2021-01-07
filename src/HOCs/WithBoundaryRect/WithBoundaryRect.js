import React from "react";
import getElementPosition from "./../../helpers/getElementPosition";

export default function WithBoundaryRect(Wrapped) {
  return class WithBoundaryRect extends React.Component {
    constructor(props) {
      super(props);
    }

    clickHandler = (triggerId, triggerModule) => (e) => {
      const triggerPosition = getElementPosition(e);
      this.props.clickHandler({ triggerId, triggerModule, triggerPosition });
    };

    render() {
      return (
        <Wrapped {...this.props} clickHandler={this.clickHandler.bind(this)} />
      );
    }
  };
}

const useBoundaryRect = (onClick) => {
  const handleClick = (triggerId, triggerModule) => (e) => {
    const triggerPosition = getElementPosition(e);
    onClick({ triggerId, triggerModule, triggerPosition });
  };

  return handleClick;
};
