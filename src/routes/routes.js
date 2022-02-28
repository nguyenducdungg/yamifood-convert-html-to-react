import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home/Home";
import { Menu } from "../components/Menu";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
    </Switch>
);

export default Routes;
