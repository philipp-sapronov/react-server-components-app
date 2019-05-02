import React, { Component } from 'react';

const __bindAll = (obj, ...args) => {
  args.forEach(item => {
    obj[item.name] = obj[item.name].bind(obj);
  });
};

const $body = document.body;

export const WithScrollbar = Wrapped => {
  return class extends Component {
    constructor(props) {
      super(props);
      this._scrollBar = React.createRef();
      this._scrollContainer = React.createRef();
      this._scrollThumb = React.createRef();
      this._count = 0;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('SHOULD_COMPONENT_UPDATE');
      return true;
    }
    componentDidUpdate() {
      setTimeout(this._windowInit, 100);
      console.log('DID_UPDATE');
    }
    componentDidMount() {
      setTimeout(this._windowInit, 100);
      window.addEventListener('resize', this._windowInit);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._windowInit);
    }

    _windowInit = () => {
      //check isMounted
      if (
        !this._scrollBar.current ||
        !this._scrollContainer.current ||
        !this._scrollThumb.current
      ) {
        return;
      }

      this._scrollBarHeight = this._scrollBar.current.clientHeight;
      this._scrollContainerHeight = this._scrollContainer.current.scrollHeight;
      this._relation = this._scrollContainerHeight / this._scrollBarHeight;

      if (this._scrollContainerHeight <= this._scrollBarHeight) {
        this._scrollBar.current.style.opacity = 0;
        console.log(this._scrollBar.current.style.opacity, 'CURRENT');
        return;
      } else {
        this._scrollBar.current.style.opacity = 1;
        console.log(this._scrollBar.current.style.opacity, 'CURRENT');
        this._setScrollThumbHeight();
        this._getScrollThumbPosition();
        this._moveScrollThumb();
      }
    };

    _setScrollThumbHeight = () => {
      this._scrollThumbHeight = this._scrollBarHeight / this._relation;
      this._scrollThumb.current.style.height = `${this._scrollThumbHeight}px`;
    };

    _getScrollThumbPosition = () => {
      this._h1 = this._scrollContainerHeight - this._scrollBarHeight;
      this._h2 = this._scrollBarHeight - this._scrollThumbHeight;
    };

    _moveScrollThumb = () => {
      requestAnimationFrame(() => {
        let koef = this._h1 / this._scrollContainer.current.scrollTop;
        this._scrollThumb.current.style.transform = `translateY(${this._h2 / koef}px)`;
      });
    };

    _onResize = () => {
      this._windowInit();
    };

    _onScroll = () => {
      this._moveScrollThumb();
    };

    _onMouseDown = e => {
      e.preventDefault();
      this._startMousePosition = e.clientY;
      this._startScrollThumbPosition = this._scrollContainer.current.scrollTop;

      $body.addEventListener('mousemove', this._onMouseMove);
      $body.addEventListener('mouseup', this._offMouseMove);
      $body.addEventListener('mouseleave', this._offMouseMove);
    };

    _onMouseMove = e => {
      const movedPosition = (e.clientY - this._startMousePosition) * this._relation;
      this._scrollContainer.current.scrollTop = this._startScrollThumbPosition + movedPosition;
    };

    _offMouseMove = () => {
      $body.removeEventListener('mousemove', this._onMouseMove);
      $body.removeEventListener('mouseup', this._offMouseMove);
      $body.removeEventListener('mouseleave', this._offMouseMove);
    };

    render() {
      return (
        <Wrapped
          {...this.props}
          scrollBar={{ ref: this._scrollBar }}
          scrollThumb={{ ref: this._scrollThumb, onMouseDown: this._onMouseDown }}
          scrollContainer={{ ref: this._scrollContainer, onScroll: this._onScroll }}
        />
      );
    }
  };
};
