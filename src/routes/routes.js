import { Route, Switch } from "react-router-dom";
import * as React from "react";
import Home from "../components/Home/Home";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
);

export default Routes;
