import React from 'react';
// import contextMenuStyles from '../views/contextMenu.module.sass';
// import dotsMenuStyles from '../../../common/DotsMenu/view/dotsMenu.module.sass';

const contextMenuStyles = {};
const dotsMenuStyles = {};

const classes = [contextMenuStyles.container, dotsMenuStyles.wrap];

function closest(target, classes) {
  for (let className of classes) {
    if (target.closest('.' + className)) return true;
  }
}

export default function WithPosition(Wrapped) {
  return class WithPosition extends React.Component {
    constructor(props) {
      super(props);
      console.log(props, 'CONSTRUCTOR');
      this.container = React.createRef();
    }

    onItemClickHandler = (action, triggerId) => (e) => {
      console.log(action, triggerId, 'onItemCLickHandler');
      action({ data: triggerId });
      this.closeMenu();
    };

    stopPropagation = (e) => e.stopPropagation();

    closeMenuOnDocumentHandler = (e) => {
      if (closest(e.target, classes)) {
        console.log('CLOSEST');
        return;
      }

      this.props.closeContextMenu();
      document.body.removeEventListener(
        'click',
        this.closeMenuOnDocumentHandler
      );
    };

    closeMenu = (e) => {
      this.props.closeContextMenu();
      document.body.removeEventListener(
        'click',
        this.closeMenuOnDocumentHandler
      );
    };

    componentDidUpdate() {
      if (!this.props.isVisible || !this.container.current) return null;

      const { windowX, windowY, rect: targetRect } = this.props.triggerPosition;
      const { current: $el } = this.container;
      const menuRect = $el.getBoundingClientRect();

      if (menuRect.height + targetRect.top >= windowY) {
        $el.style.setProperty(
          'top',
          targetRect.top - menuRect.height + (targetRect.height / 2 - 12) + 'px'
        );
      } else {
        $el.style.setProperty(
          'top',
          targetRect.bottom - (targetRect.height / 2 - 12) + 'px'
        );
      }

      if (menuRect.width + targetRect.left >= windowX) {
        $el.style.setProperty('left', targetRect.right - menuRect.width + 'px');
      } else {
        $el.style.setProperty('left', targetRect.left + 'px');
      }

      document.body.addEventListener('click', this.closeMenuOnDocumentHandler);
    }

    componentWillUnmount() {
      document.body.removeEventListener(
        'click',
        this.closeMenuOnDocumentHandler
      );
    }

    render() {
      console.log(this.props, 'WITH_POSITION');
      if (!this.props.isVisible) return null;
      return (
        <Wrapped
          {...this.props}
          containerRef={this.container}
          onItemClickHandler={this.onItemClickHandler}
        />
      );
    }
  };
}
