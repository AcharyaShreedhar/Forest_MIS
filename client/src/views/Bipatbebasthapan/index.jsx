import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import bipatbebasthapanRoutes from "../../routes/bipatbebasthapan";
import AppActions from "../../actions/app";
import BipatbibaranActions from "../../actions/bipatbibaran";

export class Bipatbebasthapan extends Component {
  componentDidMount() {
    const { districtId, officeRole } = this.props;
    this.props.fetchallPahirobebasthapan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "pahiro_gayeko_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBandadelo({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchOfficedropdown({
      distId: "%",
      name: "value", //"office_name"
    });
  }

  componentDidUpdate() {
    const { districtId, officeRole } = this.props;
    this.props.fetchallPahirobebasthapan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "pahiro_gayeko_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBandadelo({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchOfficedropdown({
      distId: "%",
      name: "value", //"office_name"
    });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {bipatbebasthapanRoutes.map((prop, key) => {
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

Bipatbebasthapan.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Bipatbebasthapan.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallPahirobebasthapan: (payload) =>
    dispatch(BipatbibaranActions.fetchallpahirobibaranRequest(payload)),

  fetchallBandadelo: (payload) =>
    dispatch(BipatbibaranActions.fetchallbandadelobibaranRequest(payload)),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bipatbebasthapan);
