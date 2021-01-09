import ClientRoute from './route.client';
import React, { createElement as $ } from 'react';
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

  console.log('<<< ROUTE ' + props.path + ' RENDERED >>>');

  // Note: Works without client route
  // if (props.serverOnly)

  return props.children || null;

  //with client route
  return $(ClientRoute, props);
};

export default Route;
