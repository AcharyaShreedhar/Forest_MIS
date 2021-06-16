import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import banpaidawarRoutes from "../../routes/banpaidawar";

export class Banpaidawar extends Component {
  componentDidMount() {
    //function to fetch
  }

  render() {
    return (
      <Switch>
        {banpaidawarRoutes.map((prop, key) => {
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

const mapDispatchToProps = (dispatch) => ({
  //function
});

export default connect(null, mapDispatchToProps)(Banpaidawar);
