import React from 'react';

export default function WithHandlers(Wrapped) {
  return class WithHandlers extends React.Component {
    constructor(props) {
      super(props);
      this.container = React.createRef();
      this.overlay = React.createRef();
    }

    closePopUp = event => {
      console.log(this.props.closePopUp, 'closePopUp');
      this.props.closePopUp();
    };

    stopPropagation = e => {
      console.log('stopPropagation');
      e.stopPropagation();
    };

    render() {
      if (!this.props.isVisible) return null;

      return (
        <Wrapped
          {...this.props}
          containerRef={this.container}
          overlayRef={this.overlay}
          closePopUp={this.closePopUp}
          stopPropagation={this.stopPropagation}
        />
      );
    }
  };
}
