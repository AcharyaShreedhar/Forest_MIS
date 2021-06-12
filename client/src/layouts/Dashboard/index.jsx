import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { isEmpty } from "ramda";
import { HeaderComponent, NavbarComponent } from "../../components";
import { Content } from "./dashboard";
import AppActions from "../../actions/app";
import { SideNavbar } from "../../components";
import "react-toastify/dist/ReactToastify.css";

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
    const { history, location, authenticated, token } = this.props;

    return (
      <div className="d-flex dashboard">
        {/* <NavbarComponent location={location} history={history} /> */}
        {/* <SideNavbar history={history}/> */}
        <ToastContainer autoClose={3000} />
        <Content
          location={location}
          history={history}
          loggedIn={!isEmpty(token)}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
