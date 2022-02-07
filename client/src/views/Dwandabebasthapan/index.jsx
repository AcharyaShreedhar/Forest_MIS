import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import DwandabebasthapanActions from "../../actions/dwandabebasthapan";
import dwandabebasthapanRoutes from "../../routes/dwandabebasthapan";

export class Dwandabebasthapan extends Component {
  componentDidMount() {
    this.props.fetchallBanyajantuuddar({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanyajantuxetirahat({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "xeti_miti",
      page: 0,
      perPage: 10,
    });
  }

componentDidUpdate() {
    this.props.fetchallBanyajantuuddar({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "miti",
      page: 0,
      perPage: 10,
    });
    this.props.fetchallBanyajantuxetirahat({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "xeti_miti",
      page: 0,
      perPage: 10,
    });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {dwandabebasthapanRoutes.map((prop, key) => {
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

Dwandabebasthapan.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Dwandabebasthapan.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanyajantuuddar: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuuddarRequest(payload)),
  fetchallBanyajantuxetirahat: (payload) =>
    dispatch(DwandabebasthapanActions.fetchallbanyajantuxetiRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dwandabebasthapan);
