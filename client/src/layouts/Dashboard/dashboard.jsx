import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import dashboardRoutes from "../../routes/dashboard";
import "./Dashboard.scss";

export const Content = (props) => {
  console.log("props", props);
  return (
    <div id="ds-content" className="content">
      <div className="main">
        <Switch>
          {dashboardRoutes.map((route, key) => {
            console.log("route", route);
            if (route.redirect && props.authenticated)
              return (
                <Redirect exact from={route.path} to={route.to} key={key} />
              );
            if (route.redirect && !props.authenticated) {
              return (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              );
            }
            if (!route.redirect && route.auth && !props.authenticated) {
              return <Redirect exact from={route.path} to="/" key={key} />;
            }
            return (
              <Route path={route.path} component={route.component} key={key} />
            );
          })}
          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};
