import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import karmachariRoutes from "../../routes/karmachari";
import KarmacharidarbandiActions from "../../actions/karmacharidarbandi";
import KarmacharibibaranActions from "../../actions/karmacharibibaran";

export class Karmachari extends Component {
  componentDidMount() {
    this.props.fetchallKarmacharidarbandi({
      name: "post",
      page: 0,
      perPage: 10,
    });
    
    this.props.fetchallKarmacharibibaran({
      name: "emp_fname_eng",
      page:0,
      perPage:10,
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
    dispatch(KarmacharidarbandiActions.fetchallkarmacharidarbandiRequest(payload)),
 
  fetchallKarmacharibibaran:(payload) =>
  dispatch(KarmacharibibaranActions.fetchallemployeesRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Karmachari);
