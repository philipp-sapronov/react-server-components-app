import SwitchClient from './switch.client';
import React, { createElement as $ } from 'react';
import { matchPath } from './matchPath';
import Cache from './cache';

const Switch = (props) => {
  let element, match;

  // TODO: Implement server side cache
  const context = {};
  // const location = this.props.location || context.location;

  React.Children.forEach(props.children, (child) => {
    if (match != null || !React.isValidElement(child)) return;

    element = child;
    const path = child.props.path || child.props.from;
    const childProps = Object.assign({}, child.props, { path });

    match = path && matchPath(Cache.get('url'), childProps);
  });

  element = match
    ? React.cloneElement(
        element,
        Object.assign({}, element.props, {
          computedMatch: match /* location, */,
        })
      )
    : null;

  return $(SwitchClient, props, element);
};

export default Switch;
