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
    const { districtId, officeRole} = this.props;
    this.props.fetchallRojgarsrijana({
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });

    this.props.fetchallUddham({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
  }

componentDidUpdate() {
  const { districtId, officeRole} = this.props;
    this.props.fetchallRojgarsrijana({
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });

    this.props.fetchallUddham({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: `${officeRole < 3 ? "%" : districtId}`,
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
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallRojgarsrijana: (payload) =>
    dispatch(MiscellaneousActions.fetchallrojgarsrijanaRequest(payload)),
  fetchallUddham: (payload) =>
    dispatch(MiscellaneousActions.fetchalluddhamRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Miscellaneous);
