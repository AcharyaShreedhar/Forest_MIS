import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { isEmpty } from "ramda";
import { Content } from "./dashboard";
import AppActions from "../../actions/app";
import BankaprakarActions from "../../actions/bankaprakar";
import DwandabebasthapanActions from "../../actions/dwandabebasthapan";
import ReportActions from "../../actions/report";
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
    this.props.fetchallBanTypes({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "handover_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchtotalBanyajantuuddar({
      distId: "%",
    });
    this.props.fetchtotalBanyajantuxeti({
      distId: "%",
    });
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa:"2078",
      upcommingArthikbarsa:"2079",
      distId: "%",
    });
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: "%",
    });
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
  fetchallBanTypes: (payload) =>
    dispatch(BankaprakarActions.fetchallbantypesRequest(payload)),
  fetchtotalBanyajantuuddar: (payload) =>
    dispatch(
      DwandabebasthapanActions.fetchtotalbanyajantuuddarRequest(payload)
    ),
  fetchtotalBanyajantuxeti: (payload) =>
    dispatch(DwandabebasthapanActions.fetchtotalbanyajantuxetiRequest(payload)),
  fetchNabikaranBibaran: (payload) =>
  dispatch(ReportActions.fetchnabikaranbibaranRequest(payload)),
  fetchSamuhaBhitraBanpaidawarBikri: (payload) =>
  dispatch(ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
