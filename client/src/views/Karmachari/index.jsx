import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import karmachariRoutes from "../../routes/karmachari";
import AppActions from "../../actions/app";
import KarmacharidarbandiActions from "../../actions/karmacharidarbandi";
import KarmacharibibaranActions from "../../actions/karmacharibibaran";

export class Karmachari extends Component {
  componentDidMount() {
    this.props.fetchallKarmacharidarbandi({
      distId: "%",
      officeId: "%",
      name: "post",
      page: 0,
      perPage: 10,
    });

    this.props.fetchallKarmacharibibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "emp_appoint_date",
      page: 0,
      perPage: 10,
    });

    this.props.fetchOfficedropdown({
      distId: "%",
      name: "value", //"office_name"
    });
  }

  componentDidUpdate() {
    this.props.fetchallKarmacharidarbandi({
      distId: "%",
      officeId: "%",
      name: "post",
      page: 0,
      perPage: 10,
    });

    this.props.fetchallKarmacharibibaran({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "emp_appoint_date",
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
        {karmachariRoutes.map((prop, key) => {
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

Karmachari.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Karmachari.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  fetchallKarmacharidarbandi: (payload) =>
    dispatch(
      KarmacharidarbandiActions.fetchallkarmacharidarbandiRequest(payload)
    ),

  fetchallKarmacharibibaran: (payload) =>
    dispatch(KarmacharibibaranActions.fetchallemployeesRequest(payload)),

  //O-DDL
  fetchOfficedropdown: (payload) =>
    dispatch(AppActions.fetchofficesdropdownRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karmachari);
