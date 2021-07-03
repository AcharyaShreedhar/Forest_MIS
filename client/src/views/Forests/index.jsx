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
    this.props.fetchallSamudayikbanbibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "handover_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallDharmikbanbibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "handover_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallKabuliyatibanbibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "entry_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallNijibanbibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "swikrit_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallSajhedaribanbibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
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
  fetchallSamudayikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallsamudayikbanbibaranRequest(payload)),
  fetchallDharmikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchalldharmikbanbibaranRequest(payload)),
  fetchallKabuliyatibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallkabuliyatibanbibaranRequest(payload)),
  fetchallNijibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallnijibanbibaranRequest(payload)),
  fetchallSajhedaribanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallsajhedaribanbibaranRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forests);
