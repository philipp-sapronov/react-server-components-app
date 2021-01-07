import React from "react";
import "./styles.css";
import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import { Router } from "./Router";
import Layout from "../layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";

export default function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
