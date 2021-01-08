import React from 'react';
import './styles.css';
import './assets/css/reset.css';
import { Router } from './Router';
import Layout from '../layout';
import { BrowserRouter } from 'react-router-dom';

export default function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}
