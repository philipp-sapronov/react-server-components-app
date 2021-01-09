import Cache from './cache';

const Router = ({ children, url }) => {
  Cache.set('url', url);

  return children;
};

export default Router;
