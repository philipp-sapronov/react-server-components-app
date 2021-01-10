import { useLocation } from 'react-router-dom';
import { createFromFetch } from 'react-server-dom-webpack';
import React, { useEffect, useState } from 'react';

function useServerResponse(route) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(createFromFetch(fetch(route, { method: 'POST' })));
  }, [route]);

  return response;
}

const Slot = () => {
  const { pathname, search } = useLocation();
  const response = useServerResponse(pathname + search);
  return response ? response.readRoot() : null;
};

export default Slot;
