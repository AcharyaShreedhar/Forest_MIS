import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { isEmpty } from "ramda";
import { Content } from "./dashboard";
import AppActions from "../../actions/app";
import "react-toastify/dist/ReactToastify.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.history.listen((location, action) => {
      const payload = {
        route: location.pathname,
      };
      this.props.saveLocation(payload);
    });
    this.props.fetchDistricts(4);
  }

  render() {
    const { history, location, token, onLogout } = this.props;

    return (
      <div className="d-flex dashboard">
        <ToastContainer autoClose={3000} />
        <Content
          location={location}
          history={history}
          loggedIn={!isEmpty(token)}
          onLogout={onLogout}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  location: PropTypes.any,
  authenticated: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  token: "",
  location: {},
  authenticated: true,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (e) => dispatch(AppActions.locationsRequest(e)),
  onLogout: (e) => dispatch(AppActions.logoutRequest(e)),
  fetchDistricts: (e) => dispatch(AppActions.fetchalldistrictsRequest(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
