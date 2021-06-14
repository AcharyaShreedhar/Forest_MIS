import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { NotFound } from "../../components";
import activitiesRoutes from "../../routes/activities";
import BiruwautpadanActions from "../../actions/biruwautpadan";

export class Forests extends Component {
  componentDidMount() {
    this.props.fetchallBiruwautpadan();
  }

  render() {
    return (
      <Switch>
        {activitiesRoutes.map((prop, key) => {
            console.log('activities routes',activitiesRoutes)
          if (prop.redirect) {
            return <Redirect exact from={prop.path} to={prop.to} key={key} />;
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

const mapDispatchToProps = (dispatch) => ({
  fetchallBiruwautpadan: () =>
    dispatch(BiruwautpadanActions.fetchallbiruwautpadanRequest()),
});

export default connect(null, mapDispatchToProps)(Forests);
