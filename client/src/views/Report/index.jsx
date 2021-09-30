import React, { Component } from "react";
import { Button } from "../../components";
import { connect } from "react-redux";
import jsreport from "jsreport-browser-client-dist";
import "./Report.scss";

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
        biruwa: props.biruwautpadankharidData,
        banpaidawar_uddham: props.uddhamData.uddham,
        rojgari_srijana: props.rojgarData,
        susasanko_abastha: props.susasanData.susasanko_abastha,
        ban: props.banhastantaranData,
      },
    };
    this.handleReport = this.handleReport.bind(this);
  }

  handleReport() {
    jsreport.serverUrl = "http://localhost:5488";
    let reportRequest = {
      template: { name: "bansambhandhibibaran" },
      data: this.state.report_data,
    };
    jsreport.render(null, reportRequest);
  }

  componentDidMount() {
    jsreport.serverUrl = "http://localhost:5488";
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
});

export default connect(mapStateToProps, null)(Report);
