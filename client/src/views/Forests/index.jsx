import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import forestRoutes from "../../routes/forests";

export class Forests extends Component {
  render() {
    return (
      <Switch>
        {forestRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />;
          }
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        })}
        <Route path="*" exact component={NotFound} />
      </Switch>
    );
  }
}

export default Forests;
