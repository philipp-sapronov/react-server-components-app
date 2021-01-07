import { Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <Switch>
      <Route path={"/home"} exact={true} />
      <Route path={"/categories/:id"} exact={true} />
      <Route path={"/contacts/:id"} exact={true} />
      <Route path={"/search"} exact={true} />
      <Route path={"/contact_add/:id"} exact={true} />
      <Route path={"/contact_edit/:id"} exact={true} />
      <Route path={"/account/:id"} exact={true} />
      <Route path={"/account"} exact={true} />
      <Route path={"/"} />
    </Switch>
  );
};
