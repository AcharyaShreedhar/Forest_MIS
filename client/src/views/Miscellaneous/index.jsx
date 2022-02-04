import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import MiscellaneousRoutes from "../../routes/miscellaneous";
import MiscellaneousActions from "../../actions/miscellaneous";

export class Miscellaneous extends Component {
  componentDidMount() {
    this.props.fetchallGharjagga({
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallSawarisadhan({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallanyasampati({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    this.props.fetchOfficedropdown({
      distId: "%",
      name: "value", //"office_name"
    });
  }

componentDidUpdate() {
    this.props.fetchallRojgarsrijana({
      distId: "%",
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });

    this.props.fetchallUddham({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {MiscellaneousRoutes.map((prop, key) => {
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

Miscellaneous.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Miscellaneous.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  fetchallRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.fetchallrojgarsrijanaRequest(payload)),
  fetchallUddham: (payload) =>
    dispatch(MiscellaneousActions.fetchalluddhamRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Miscellaneous);
