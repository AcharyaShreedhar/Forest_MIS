import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { isEmpty } from "ramda";
import { NotFound } from "../../components";
import SamrakshyanActions from "../../actions/samrakshyan";
import samrakshyanRoutes from "../../routes/samrakshyan";

export class Samrakshyan extends Component {
  componentDidMount() {
    // this.props.fetchallNadikinarsamrakshyan({
    //   fromDate: "2075-01-01",
    //   toDate: "2090-12-30",
    //   distId: "%",
    //   name: "karyakram_miti",
    //   page: 0,
    //   perPage: 10,
    // });
    
    this.props.fetchallPokharisamrakshyan({
        fromDate: "2075-01-01",
        toDate: "2090-12-30",
        distId: "%",
        name: "karyakram_miti",
        page: 0,
        perPage: 10,
      });
  }

  render() {
    const { authenticated } = this.props;
    return (
      <Switch>
        {samrakshyanRoutes.map((prop, key) => {
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

Samrakshyan.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.any,
};

Samrakshyan.defaultProps = {
  authenticated: false,
  history: () => {},
};

const mapStateToProps = (state) => ({
  authenticated: !isEmpty(state.app.token),
});

const mapDispatchToProps = (dispatch) => ({
  // fetchallNadikinarsamrakshyan: (payload) =>
  //   dispatch(SamrakshyanActions.fetchallnadikinarsamrakshyanRequest(payload)),
  
    fetchallPokharisamrakshyan: (payload) =>
    dispatch(SamrakshyanActions.fetchallsamrakshyanpokharinirmanRequest(payload)),  

});

export default connect(mapStateToProps, mapDispatchToProps)(Samrakshyan);
