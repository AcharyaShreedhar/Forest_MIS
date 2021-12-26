import React, { Component } from "react";
import { Button } from "../../components";
import { connect } from "react-redux";
import { englishToNepaliNumber } from "nepali-number";
import jsreport from "jsreport-browser-client-dist";
import NepaliDate from "nepali-date-converter";
import AppActions from "../../actions/app";
import DwandabebasthapanActions from "../../actions/dwandabebasthapan";
import ReportActions from "../../actions/report";
import "./Report.scss";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: "",
      reportScript: "",
      arthikbarsa: "",
      aghilloarthikbarsa: "",
    };
    this.handleReport = this.handleReport.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let currentYear = "";
    let previousYear = "";
    let upcommingYear = "";
    let arthikbarsa = "";
    let aghilloarthikbarsa = "";
    NepaliDate.language = "np";

    if (new NepaliDate().getMonth <= "03") {
      upcommingYear = new NepaliDate().format("YYY");
      currentYear = new NepaliDate().getYear();
      currentYear -= 1;
      currentYear = currentYear.toString();
      currentYear = englishToNepaliNumber(currentYear);

      previousYear = new NepaliDate().getYear();
      previousYear -= 2;
      previousYear = previousYear.toString();
      previousYear = englishToNepaliNumber(previousYear);
      arthikbarsa = currentYear + "|" + upcommingYear;
      aghilloarthikbarsa = previousYear + "|" + new NepaliDate().format("YYY");
    } else {
      NepaliDate.language = "np";
      upcommingYear = new NepaliDate().getYear();
      upcommingYear += 1;
      upcommingYear = upcommingYear.toString().substr(1, 3);
      upcommingYear = englishToNepaliNumber(upcommingYear);
      currentYear = new NepaliDate().format("YYYY");
      previousYear = new NepaliDate().getYear();
      previousYear -= 1;
      previousYear = previousYear.toString();
      previousYear = englishToNepaliNumber(previousYear);
      arthikbarsa = currentYear + "|" + upcommingYear;
      aghilloarthikbarsa = previousYear + "|" + new NepaliDate().format("YYY");
    }

    var report_data = {};
    if (nextProps !== prevState) {
      report_data = {
        name:nextProps.user_office,
        arthikbarsa: arthikbarsa,
        aghilloarthikbarsa: aghilloarthikbarsa,
        nabikaran_yojana: nextProps.nabikaranData.data,
        banpaidawar_bikri:
          nextProps.samuhabhitraBanpaidawar.data.banpaidawar_bikri,
        banxetra_atikraman: nextProps.banxetraAtikraman.banxetra_atikramans,
        banyajantu_xeti_rahat: nextProps.xetiRahatData.banyajantu_xeti_rahat,
        banyajantu_uddar: nextProps.uddarData.banyajantu_uddar,
        dadelo: nextProps.bandadeloxetiData.dadelo,
        banxetra_anyaprayojan:
          nextProps.banxetraAnyaprayojanData.banxetra_anyaprayojan,
        mudda: nextProps.muddaAnusandhandayariData.mudda,
        gairkastha_banpaidawar: nextProps.gairkasthabanpaidawarbikribitaranData,
        kathdaura_bikri: nextProps.kathdaurabikribitaranData,
        biruwa: nextProps.biruwautpadankharidData,
        banpaidawar_uddham: nextProps.uddhamData.uddham,
        rojgari_srijana: nextProps.rojgarData,
        susasanko_abastha: nextProps.susasanData.susasanko_abastha,
        ban: nextProps.banhastantaranData,
      };
    }
    return { report_data };
  }

  handleReport() {
    jsreport.serverUrl = "https://forest-mis-report.herokuapp.com";
    let reportRequest = {
      template: { name: "bansambhandhibibaran" },
      data: this.state.report_data,
    };
    jsreport.render(null, reportRequest);
  }

  componentDidMount() {
    jsreport.serverUrl = "https://forest-mis-report.herokuapp.com";
    let reportRequest = {
      template: { name: "bansambhandhibibaran" },
      data: this.state.report_data,
      options: {
        office: {
          preview: true,
        },
      },
    };
    jsreport.render(this.reportPreview, reportRequest);
  }

  fetchReportResults(fromDate, toDate, distId) {
    this.props.fetchtotalBanyajantuuddar({
      distId: distId,
    });
    this.props.fetchtotalBanyajantuxeti({
      distId: distId,
    });
    this.props.fetchNabikaranBibaran({
      currentArthikbarsa: "2078",
      upcommingArthikbarsa: "2079",
      distId: distId,
    });
    this.props.fetchSamuhaBhitraBanpaidawarBikri({
      distId: distId,
    });
    this.props.fetchBanxetraAtikraman({
      previousArthikbarsa: "2077",
      currentArthikbarsa: "2078",
      distId: distId,
    });
    this.props.fetchBanyajantuXetiRahat({
      distId: distId,
    });
    this.props.fetchBanyajantuUddar({
      currentArthikbarsa: "2078",
      distId: distId,
    });
    this.props.fetchBandadeloXeti({
      distId: distId,
    });
    this.props.fetchBanxetraAnyaprayojan({
      distId: distId,
    });

    this.props.fetchMuddaanusandhandayari({
      previousArthikbarsa: "2078-03-31",
      distId: distId,
    });

    this.props.fetchGairakasthaBanpaidawarBikribitaran({
      currentArthikbarsa: "2078-03-05",
      distId: distId,
    });
    this.props.fetchKathdauraBikribitaran({
      currentArthikbarsa: "2078-03-05",
      distId: distId,
    });
    this.props.fetchBiruwaUtpadanKharid({
      distId: distId,
    });
    this.props.fetchUddhamBibaran({
      distId: distId,
    });
    this.props.fetchSrijanaBhayekoRojgari({
      distId: distId,
      currentArthikbarsa: "2078-04-01",
    });
    this.props.fetchUpavoktaSusasan({
      currentArthikbarsa: "2078-04-01",
      arthikbarsa: "077/78",
      distId: distId,
    });

    this.props.fetchBanHastantaran({
      currentArthikbarsa: "2078-04-01",
      distId: distId,
    });
  }

  render() {
    return (
      <div id="reportPlaceholder" className="report_style">
        <Button
          className="mr-3 save"
          name="शेभ गर्नुहोस ।"
          onClick={this.handleReport.bind(this)}
        />
        <div
          style={{ height: "100vh" }}
          ref={(el) => (this.reportPreview = el)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nabikaranData: state.report.nabikaran_yojana,
  samuhabhitraBanpaidawar: state.report.banpaidawar_bikri,
  banxetraAtikraman: state.report.banxetra_atikraman,
  xetiRahatData: state.report.banyajantu_xeti_rahat,
  uddarData: state.report.banyajantu_uddar,
  bandadeloxetiData: state.report.bandadelo_xeti,
  banxetraAnyaprayojanData: state.report.banxetra_anyaprayojan,
  muddaAnusandhandayariData: state.report.mudda_dayari,
  gairkasthabanpaidawarbikribitaranData: state.report.gairkastha_banpaidawar,
  kathdaurabikribitaranData: state.report.kathdaura_bikri,
  biruwautpadankharidData: state.report.biruwautpadan_kharid,
  uddhamData: state.report.banpaidawar_uddham,
  rojgarData: state.report.rojgari_srijana,
  susasanData: state.report.susasanko_abastha,
  banhastantaranData: state.report.ban_bibaran,
  user_office:state.app.user.user_office
});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);
