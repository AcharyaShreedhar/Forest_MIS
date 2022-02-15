import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import banbibaranRoutes from "../../routes/banbibaran";
import AppActions from "../../actions/app";
import BanbibaranActions from "../../actions/banbibaran";

class Banbibaran extends Component {
  componentDidMount() {
    const { districtId, officeRole } = this.props;
    this.props.fetchallBanxetraatikraman({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallSeedgardenplots({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanxetraanyaprayojan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallMuddaanusandhandayari({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "jaheri_partibedan_miti",
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
    this.props.fetchallBanxetraatikraman({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallSeedgardenplots({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanxetraanyaprayojan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallMuddaanusandhandayari({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "jaheri_partibedan_miti",
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
        {banbibaranRoutes.map((prop, key) => {
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

Banbibaran.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Banbibaran.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanxetraatikraman: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraatikramanRequest(payload)),

  fetchallMuddaanusandhandayari: (payload) =>
    dispatch(BanbibaranActions.fetchallmuddaanusandhandayariRequest(payload)),

  fetchallSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.fetchallplotbibaranRequest(payload)),
  fetchallBanxetraanyaprayojan: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraanyaprayojanRequest(payload)),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banbibaran);
