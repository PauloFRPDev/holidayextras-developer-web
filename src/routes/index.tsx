import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ListUsers } from "../pages/ListUsers";
import { UpdateUser } from "../pages/UpdateUser";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list_users" component={ListUsers} />
        <Route path="/update_user/:user_id" component={UpdateUser} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };
