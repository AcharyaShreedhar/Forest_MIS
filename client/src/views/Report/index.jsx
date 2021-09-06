import React, { Component } from "react";
import { connect } from "react-redux";
import jsreport from "jsreport-browser-client-dist";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: "",
      reportScript: "",
      report_data: {
        name: "Kaski Division Forest Office",
        arthikbarsa: "२०७८|०७९",
        aghilloarthikbarsa: "२०७७|०७८",
        nabikaran_yojana: props.nabikaranData.data,
        banpaidawar_bikri: props.samuhabhitraBanpaidawar.data.banpaidawar_bikri,
        banxetra_atikraman: props.banxetraAtikraman.banxetra_atikramans,
        banyajantu_xeti_rahat: props.xetiRahatData.banyajantu_xeti_rahat,
        banyajantu_uddar: props.uddarData.banyajantu_uddar,
        dadelo: props.bandadeloxetiData.dadelo,
        banxetra_anyaprayojan:
          props.banxetraAnyaprayojanData.banxetra_anyaprayojan,
        mudda: props.muddaAnusandhandayariData.mudda,
        gairkastha_banpaidawar: props.gairkasthabanpaidawarbikribitaranData,
        kathdaura_bikri: props.kathdaurabikribitaranData,
      },
    };
  }
  componentDidMount() {
    jsreport.serverUrl = "http://localhost:5488";
    let reportRequest = {
      template: { name: "bansambhandhibibaran" },
      data: this.state.report_data,
    };
    jsreport.render(this.reportPreview, reportRequest);
  }
  render() {
    return (
      <div id="reportPlaceholder">
        <p>रिपोर्ट सेक्सन </p>
        <div
          style={{ height: "700px" }}
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
});

export default connect(mapStateToProps, null)(Report);
