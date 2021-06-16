import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import forestRoutes from "../../routes/forests";
import BankaprakarActions from "../../actions/bankaprakar";

export class Forests extends Component {
  componentDidMount() {
    this.props.fetchallSamudayikbanbibaran();
    this.props.fetchallDharmikbanbibaran();
    this.props.fetchallKabuliyatibanbibaran();
    this.props.fetchallNijibanbibaran();
  }

  render() {
    const { authenticated } = this.props;

    return (
      <Switch>
        {forestRoutes.map((prop, key) => {
          if (prop.redirect && authenticated) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />;
          }
          if (prop.redirect && !authenticated) {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          }
          if (!prop.redirect && prop.auth && !authenticated) {
            return <Redirect exact from={prop.path} to="/" key={key} />;
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

Forests.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Forests.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  role: state.app.app_role_id,
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  fetchallSamudayikbanbibaran: () =>
    dispatch(BankaprakarActions.fetchallsamudayikbanbibaranRequest()),
  fetchallDharmikbanbibaran: () =>
    dispatch(BankaprakarActions.fetchalldharmikbanbibaranRequest()),
  fetchallKabuliyatibanbibaran: () =>
    dispatch(BankaprakarActions.fetchallkabuliyatibanbibaranRequest()),
  fetchallNijibanbibaran: () =>
    dispatch(BankaprakarActions.fetchallnijibanbibaranRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forests);
