import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HeaderComponent, NavbarComponent } from "../../components";
import { Content } from "./dashboard";
import AppActions from "../../actions/app";

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
    const { history, location } = this.props;

    return (
      <div className="dashboard">
        <HeaderComponent />
        <NavbarComponent location={location} history={history} />
        <Content location={location} history={history} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  location: PropTypes.any,
};

Dashboard.defaultProps = {
  token: "",
  location: {},
};

const mapDispatchToProps = (dispatch) => ({
  saveLocation: (e) => dispatch(AppActions.locationsRequest(e)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
