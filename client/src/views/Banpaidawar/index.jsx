import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import { isEmpty } from "ramda";
import banpaidawarRoutes from "../../routes/banpaidawar";
import AppActions from "../../actions/app";
import BanpaidawarActions from "../../actions/banpaidawar";

export class Banpaidawar extends Component {
  componentDidMount() {
    const { districtId, officeRole, officeId } = this.props;
    this.props.fetchallBanpaidawarlilam({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "lilam_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanpaidawarosarpasar({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanpaidawarbikribitaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "bikri_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchOfficedropdown({
      distId: "%",
      name: "value", //"office_name"
    });
  }

  componentDidUpdate() {
    const { districtId, officeRole, officeId } = this.props;
    this.props.fetchallBanpaidawarlilam({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "lilam_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanpaidawarosarpasar({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanpaidawarbikribitaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: `${officeRole < 3 ? "%" : officeId}`,
      name: "bikri_miti",
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
        {banpaidawarRoutes.map((prop, key) => {
          if (prop.redirect && authenticated) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />;
          }
          if (prop.redirect && authenticated) {
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

Banpaidawar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Banpaidawar.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  role: state.app.app_role_id,
  authenticated: !isEmpty(state.app.token),
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
  officeId: state.app.user.office_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarlilam: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarlilamRequest(payload)),

  fetchallBanpaidawarosarpasar: (payload) =>
    dispatch(BanpaidawarActions.fetchallbanpaidawarRequest(payload)),

  fetchallBanpaidawarbikribitaran: (payload) =>
    dispatch(
      BanpaidawarActions.fetchallbanpaidawarbikribitaranRequest(payload)
    ),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banpaidawar);
