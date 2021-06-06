import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify'
import { HeaderComponent, NavbarComponent } from "../../components";
import { Content } from "./dashboard";
import AppActions from "../../actions/app";
import { SideNavbar } from "../../components";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      const payload = {
        route: location.pathname,
      };
      this.props.saveLocation(payload);
    });
  }

  render() {
    const { history, location, authenticated } = this.props;
    console.log("auth", authenticated);

    return (
      <div className="d-flex dashboard">
        {/* <NavbarComponent location={location} history={history} /> */}
        {/* <SideNavbar history={history}/> */}
        <ToastContainer autoClose={3000} />
        <Content location={location} history={history} loggedIn={authenticated} />
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

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (e) => dispatch(AppActions.locationsRequest(e)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
