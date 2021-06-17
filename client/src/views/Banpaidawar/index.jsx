import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import { isEmpty } from "ramda";
import banpaidawarRoutes from "../../routes/banpaidawar";
import BanpaidawarActions from "../../actions/banpaidawar";

export class Banpaidawar extends Component {
  componentDidMount() {
    this.props.fetchallBanpaidawarlilam();
    this.props.fetchallBanpaidawarosarpasar();
  }

  render() {

    const { authenticated } = this.props;
    return (
      <Switch>
        {banpaidawarRoutes.map((prop, key) => {
          if (prop.redirect && authenticated) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />;
          }
          if (prop.redirect && authenticated){
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        if(!prop.redirect && prop.auth && !authenticated){
          return <Redirect exact from = { prop.path} to="/" key={key} />;
        }
        return (
          <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
          />
        );
        }
        )}
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchallBanpaidawarlilam: () =>
  dispatch(BanpaidawarActions.fetchallbanpaidawarlilamRequest()),

  fetchallBanpaidawarosarpasar: () =>
  dispatch(BanpaidawarActions.fetchallbanpaidawarRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banpaidawar);
