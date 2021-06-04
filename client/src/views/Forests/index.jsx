import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import forestRoutes from "../../routes/forests";
import BanbibaranActions from "../../actions/banbibaran";

export class Forests extends Component {
  componentDidMount() {
    this.props.fetchallSamudayikbanbibaran();
  }

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

const mapDispatchToProps = (dispatch) => ({
  fetchallSamudayikbanbibaran: () =>
    dispatch(BanbibaranActions.fetchallsamudayikbanbibaranRequest()),

  fetchallDharmikbanbibaran: () =>
    dispatch(BanbibaranActions.fetchalldharmikbanbibaranRequest()),
});

export default connect(null, mapDispatchToProps)(Forests);
