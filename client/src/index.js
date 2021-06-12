import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { store, persistor, history } from "./reducers";
import indexRoutes from "./routes";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            if (prop.name === "Login") {
              return (
                <Route to={prop.path} component={prop.component} key={key} />
              );
            } else
              return (
                <Route
                  exact
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              );
          })}
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
