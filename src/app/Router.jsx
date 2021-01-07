import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import CategoryPage from "../components/CategoryPage";
import ContactFormPage from "../components/CategoryPage";

export const Router = () => {
  return (
    <Switch>
      <Route path={"/home"} exact={true} component={CategoryPage} />
      <Route path={"/categories/:id"} exact={true} component={CategoryPage} />
      <Route path={"/contacts/:id"} exact={true} component={ContactPage} />
      <Route path={"/search"} exact={true} component={CategoryPage} />
      <Route
        path={"/contact_add/:id"}
        exact={true}
        component={ContactFormPage}
      />
      <Route
        path={"/contact_edit/:id"}
        exact={true}
        component={ContactFormPage}
      />
      <Route path={"/account/:id"} exact={true} component={ContactPage} />
      <Route path={"/account"} exact={true} component={ContactPage} />
      <Route path={"/"} component={CategoryPage} />
    </Switch>
  );
};
