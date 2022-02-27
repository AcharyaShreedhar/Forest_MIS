import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { isEmpty } from "ramda";
import { Content } from "./dashboard";
import NepaliDate from "nepali-date-converter";
import AppActions from "../../actions/app";
import BankaprakarActions from "../../actions/bankaprakar";
import DwandabebasthapanActions from "../../actions/dwandabebasthapan";
import ReportActions from "../../actions/report";
import "react-toastify/dist/ReactToastify.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      const payload = {
        route: location.pathname,
      };
      this.props.saveLocation(payload);
    });
    let currentArthikbarsa = "";
    let previousArthikbarsa = "";
    let upcommingArthikbarsa = "";
    let currentYear = "";
    let previousYear = "";
    let upcommingYear = "";

    if (new NepaliDate().getMonth <= "03") {
      upcommingYear = new NepaliDate().getYear();
      currentYear = new NepaliDate().getYear() - 1;
      currentYear -= 1;
      previousYear = new NepaliDate().getYear();
      previousYear -= 2;
      upcommingArthikbarsa = upcommingYear + "-04-01";
      currentArthikbarsa = currentYear + "-04-01";
      previousArthikbarsa = previousYear + "-04-01";
    } else {
      upcommingYear = new NepaliDate().getYear();
      upcommingYear += 1;
      currentYear = new NepaliDate().getYear();
      previousYear = new NepaliDate().getYear();
      previousYear -= 1;
      upcommingArthikbarsa = upcommingYear + "-04-01";
      currentArthikbarsa = currentYear + "-04-01";
      previousArthikbarsa = previousYear + "-04-01";
    }
    this.props.fetchDistricts(4);
    this.props.fetchallBanTypes({
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "handover_date",
      page: 0,
      perPage: 10,
    });
    this.props.fetchtotalBanyajantuuddar({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchtotalBanyajantuxeti({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa,
      upcommingArthikbarsa,
      distId: "%",
      officeId: "%",
    });
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBanxetraAtikraman({
      previousArthikbarsa,
      currentArthikbarsa,
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBanyajantuXetiRahat({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBanyajantuUddar({
      currentArthikbarsa,
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBandadeloXeti({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBanxetraAnyaprayojan({
      distId: "%",
      officeId: "%",
    });

    this.props.fetchMuddaanusandhandayari({
      previousArthikbarsa,
      distId: "%",
      officeId: "%",
    });

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      currentArthikbarsa,
      distId: "%",
      officeId: "%",
    });
    this.props.fetchKathdauraBikribitaran({
      currentArthikbarsa,
      distId: "%",
      officeId: "%",
    });
    this.props.fetchBiruwaUtpadanKharid({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchUddhamBibaran({
      distId: "%",
      officeId: "%",
    });
    this.props.fetchSrijanaBhayekoRojgari({
      distId: "%",
      officeId: "%",
      currentArthikbarsa,
    });
    this.props.fetchUpavoktaSusasan({
      currentArthikbarsa,
      arthikbarsa: "077/78",
      distId: "%",
      officeId: "%",
    });

    this.props.fetchBanHastantaran({
      currentArthikbarsa,
      distId: "%",
      officeId: "%",
    });
  }

  render() {
    const {
      history,
      location,
      token,
      onLogout,
      menuRequest,
      menuStatus,
      role,
    } = this.props;

    return (
      <div className="d-flex dashboard">
        <ToastContainer autoClose={3000} />
        <Content
          location={location}
          history={history}
          loggedIn={!isEmpty(token)}
          onLogout={onLogout}
          onToggle={this.handleToggle}
          menuRequest={menuRequest}
          menuStatus={menuStatus}
          role={role}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  location: PropTypes.any,
  role: PropTypes.any,
  authenticated: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  token: "",
  role: "",
  location: {},
  authenticated: true,
};

const mapStateToProps = (state) => ({
  token: state.app.token,
  role: state.app.user.user_type,
  menuStatus: state.app.menuStatus,
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
    dispatch(
      ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranRequest(payload)
    ),
  fetchBanxetraAtikraman: (payload) =>
    dispatch(ReportActions.fetchbanxetraatikramanniyantranRequest(payload)),
  fetchBanyajantuXetiRahat: (payload) =>
    dispatch(ReportActions.fetchbanyajantuxetirahatRequest(payload)),
  fetchBanyajantuUddar: (payload) =>
    dispatch(ReportActions.fetchbanyajantuuddarbibaranRequest(payload)),
  fetchBandadeloXeti: (payload) =>
    dispatch(ReportActions.fetchbandadeloxetibibaranRequest(payload)),
  fetchBanxetraAnyaprayojan: (payload) =>
    dispatch(ReportActions.fetchbanxetraanyaprayojanbibaranRequest(payload)),
  fetchMuddaanusandhandayari: (payload) =>
    dispatch(ReportActions.fetchmuddaanusandhandayaribibaranRequest(payload)),
  fetchGairakasthaBanpaidawarBikribitaran: (payload) =>
    dispatch(
      ReportActions.fetchgairakasthabanpaidawarbikribitaranRequest(payload)
    ),
  fetchKathdauraBikribitaran: (payload) =>
    dispatch(ReportActions.fetchkathdaurabikribitaranRequest(payload)),
  fetchBiruwaUtpadanKharid: (payload) =>
    dispatch(ReportActions.fetchbiruwautpadankharidRequest(payload)),
  fetchUddhamBibaran: (payload) =>
    dispatch(ReportActions.fetchuddhambibaranRequest(payload)),
  fetchSrijanaBhayekoRojgari: (payload) =>
    dispatch(ReportActions.fetchsrijanabhayekorojgariRequest(payload)),
  fetchUpavoktaSusasan: (payload) =>
    dispatch(ReportActions.fetchupavoktasusasanRequest(payload)),
  fetchBanHastantaran: (payload) =>
    dispatch(ReportActions.fetchbanhastantaranbibaranRequest(payload)),
  menuRequest: (payload) => dispatch(AppActions.menuRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
