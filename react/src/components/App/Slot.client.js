import { useServerResponse } from '../../../server/useServerResponse.client';
import { useLocation } from 'react-router-dom';
import React from 'react';

const Slot = () => {
  const { pathname, search } = useLocation();
  const response = useServerResponse(pathname + search);
  return response ? response.readRoot() : null;
};

export default Slot;
