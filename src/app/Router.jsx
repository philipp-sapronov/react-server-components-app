import { Route, Switch } from "react-router-dom";
import ContactPage from "../components/ContactPage";
import { ContactsPage } from "../components/CategoryPage";

export const Router = () => {
  return (
    <Switch>
      <Route path={"/home"} exact={true} component={ContactsPage} />
      <Route path={"/categories/:id"} exact={true} component={ContactsPage} />
      <Route path={"/contacts/:id"} exact={true} component={ContactPage} />
      <Route path={"/search"} exact={true} component={ContactsPage} />
      <Route path={"/contact_add/:id"} exact={true} />
      <Route path={"/contact_edit/:id"} exact={true} />
      <Route path={"/account/:id"} exact={true} component={ContactPage} />
      <Route path={"/account"} exact={true} component={ContactPage} />
      <Route path={"/"} component={ContactsPage}/>
    </Switch>
  );
};
