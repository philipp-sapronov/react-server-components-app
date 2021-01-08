import React from 'react';
import {unstable_createRoot} from 'react-dom';
import App from './App.client';

const initialCache = new Map();
const root = unstable_createRoot(document.getElementById('root'));

root.render(<App initialCache={initialCache} />);
