import ClientRoute from './route.client';
import React, { createElement, isValidElement } from 'react';
import Cache from './cache';
import { matchPath } from './matchPath';

export const Route = (props) => {
  if (!props) return null;
  // TODO: implement server side cache
  const context = {};
  //const location = props.location || context.location;

  const match = props.computedMatch
    ? props.computedMatch
    : props.path
    ? matchPath(Cache.get('url'), props)
    : context.match;

  if (!match) return null;

  console.log('ROUTE ' + props.path + ' RENDERED');

  // Note: Works without client route
  // return children;

  const children = isValidElement(props.children)
    ? React.cloneElement(
        props.children,
        Object.assign({}, props.children.props, { match })
      )
    : null;

  return createElement(ClientRoute, Object.assign({}, props), children);
};

export default Route;
