import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import activitiesRoutes from "../../routes/activities";
import BiruwautpadanActions from "../../actions/biruwautpadan";

export class Activities extends Component {
  componentDidUpdate() {
    this.props.fetchallBrixyaropan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "brixyaropan_miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBiruwautpadan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallYearlyactivities({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "fiscal_year",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallJadibuti({
      distId: "%",
      officeId: "%",
      name: "jadibuti_thegana",
      page: 0,
      perPage: 10,
    });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {activitiesRoutes.map((prop, key) => {
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

Activities.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Activities.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  role: state.app.app_role_id,
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBiruwautpadan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbiruwautpadanRequest(payload)),

  fetchallYearlyactivities: (payload) =>
    dispatch(BiruwautpadanActions.fetchallactivitiesinfoRequest(payload)),

  fetchallJadibuti: (payload) =>
    dispatch(BiruwautpadanActions.fetchalljadibutiRequest(payload)),

  fetchallBrixyaropan: (payload) =>
    dispatch(BiruwautpadanActions.fetchallbrixyaropanRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
