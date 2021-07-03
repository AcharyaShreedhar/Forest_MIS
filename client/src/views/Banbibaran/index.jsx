import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import banbibaranRoutes from "../../routes/banbibaran";
import BandadelobibaranActions from "../../actions/bandadelobibaran";
import BanxetraatikramanActions from "../../actions/banxetraatikraman";
import BanbibaranActions from "../../actions/banbibaran";
import MuddaanusandhandayariActions from "../../actions/muddaanusandhandayari";

class Banbibaran extends Component {
  componentDidMount() {
    this.props.fetchallBandadelo({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanxetraatikraman({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallSeedgardenplots({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanxetraanyaprayojan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallMuddaanusandhandayari({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "jaheri_partibedan_miti",
      page: 0,
      perPage: 10,
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBandadelo: (payload) =>
    dispatch(BandadelobibaranActions.fetchallbandadelobibaranRequest(payload)),

  fetchallBanxetraatikraman: (payload) =>
    dispatch(
      BanxetraatikramanActions.fetchallbanxetraatikramanRequest(payload)
    ),

  fetchallMuddaanusandhandayari: (payload) =>
    dispatch(
      MuddaanusandhandayariActions.fetchallmuddaanusandhandayariRequest(payload)
    ),

  fetchallSeedgardenplots: (payload) =>
    dispatch(BanbibaranActions.fetchallplotbibaranRequest(payload)),
  fetchallBanxetraanyaprayojan: (payload) =>
    dispatch(BanbibaranActions.fetchallbanxetraanyaprayojanRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banbibaran);
