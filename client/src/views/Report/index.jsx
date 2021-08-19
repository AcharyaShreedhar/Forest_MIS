import React, { Component } from "react";
import { connect } from "react-redux";
import jsreport from "jsreport-browser-client-dist";

var json_data = {
  employees: [
    {
      id: "100",
      name: "Prasad Kambhammettu",
      designation: "Developer",
      exp: "6",
      phone: "9846748631",
    },
    {
      id: "101",
      name: "Srinivas",
      designation: "Architect",
      exp: "9",
      phone: "9846748631",
    },
    {
      id: "102",
      name: "Mallikarjun",
      designation: "Web Developer",
      exp: "3",
    },
    {
      id: "103",
      name: "Srivalli",
      designation: "Test Engineer",
      exp: "2",
      phone: "9846748631",
    },
    {
      id: "104",
      name: "Sriram",
      designation: "Trainee Engineer",
      exp: "1",
      phone: "9846748631",
    },
  ],
};
export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: "",
      reportScript: "",
      nabikaran_yojana: {
        name: "Kaski Division Forest Office",
        arthikbarsa: "२०७८|०७९",
        aghilloarthikbarsa: "२०७७|०७८ ",
        nabikaran_yojana: props.nabikaranData.data,
      },
    };
  }
  componentDidMount() {
    jsreport.serverUrl = "http://localhost:5488";
    let reportRequest = {
      template: { name: "bansambhandhibibaran" },
      data: this.state.nabikaran_yojana,
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
});

export default connect(mapStateToProps, null)(Report);
