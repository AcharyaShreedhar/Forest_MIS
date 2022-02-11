import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import karyabibaranRoutes from "../../routes/karyabibaran";
import KaryabibaranActions from "../../actions/karyabibaran";

export class Karyabibaran extends Component {
  componentDidMount() {
    const { districtId, officeRole} = this.props;
    this.props.fetchallSamajikkaryabibaran({
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "banbikas_karyabibaran",
      page: 0,
      perPage: 10,
    });
  }

componentDidUpdate() {
  const { districtId, officeRole} = this.props;
    // this.props.fetchallBanbikaskaryabibaran({
    //   distId: "%",
    //   name: "ban_type",
    //   page: 0,
    //   perPage: 10,
    // });
    this.props.fetchallSamajikkaryabibaran({
      distId: `${officeRole < 3 ? "%" : districtId}`,
      officeId: "%",
      name: "banbikas_karyabibaran",
      page: 0,
      perPage: 10,
    });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {karyabibaranRoutes.map((prop, key) => {
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

Karyabibaran.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Karyabibaran.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
  officeRole: state.app.user.office_type,
  districtId: state.app.user.dist_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanbikaskaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.fetchallbanbikaskaryabibaranRequest(payload)),
  fetchallSamajikkaryabibaran: (payload) =>
    dispatch(KaryabibaranActions.fetchallsamajikkaryabibaranRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karyabibaran);
