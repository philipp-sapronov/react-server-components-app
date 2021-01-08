import {createFromFetch} from 'react-server-dom-webpack';
import {useEffect, useState} from 'react';

export function useServerResponse(route) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(createFromFetch(fetch(route, {method: 'POST'})));
  }, [route]);

  return response;
}
