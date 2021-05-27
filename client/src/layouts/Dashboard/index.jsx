import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    const { history, location,authenticated } = this.props;
    console.log('auth',authenticated)

    return (
      <div className="d-flex dashboard">
        {/* <NavbarComponent location={location} history={history} /> */}
        <SideNavbar />
        <Content location={location} history={history} authenticated={authenticated} />
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
  authenticated: false,
};

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (e) => dispatch(AppActions.locationsRequest(e)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
