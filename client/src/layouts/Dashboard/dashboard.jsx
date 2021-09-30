import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound, SideNavbar } from "../../components";
import dashboardRoutes from "../../routes/dashboard";
import "./Dashboard.scss";

export const Content = (props) => {
  return (
    <div
      id="ds-content"
      className={`content${props.loggedIn ? " logged" : ""}`}
    >
      {props.loggedIn && (
        <SideNavbar
          history={props.history}
          onlogout={props.onLogout}
          onToggle={props.onToggle}
          open={props.open}
          menuRequest={props.menuRequest}
          menuStatus={props.menuStatus}
        />
      )}
      <div className="main">
        <Switch>
          {dashboardRoutes.map((route, key) => {
            if (route.redirect)
              return (
                <Redirect exact from={route.path} to={route.to} key={key} />
              );
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
