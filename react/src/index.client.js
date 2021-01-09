import React, { createElement as $ } from 'react';
import { unstable_createRoot } from 'react-dom';
import App from './components/App/App.client';
import './sass/main.scss';

const initialCache = new Map();
const root = unstable_createRoot(document.getElementById('root'));

root.render($(App, { initialCache }));
