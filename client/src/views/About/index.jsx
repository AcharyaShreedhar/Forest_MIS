import React, { Component } from "react";
import jsreport from "jsreport-browser-client-dist";

var json_data = {    
    "employees": [{    
            "id": "100",    
            "name": "Prasad Kambhammettu",    
            "designation": "Developer",    
            "exp": "6",
            "phone":"9846748631"   
        },    
        {    
            "id": "101",    
            "name": "Srinivas",    
            "designation": "Architect",    
            "exp": "9" ,
            "phone":"9846748631"     
        },    
        {    
            "id": "102",    
            "name": "Mallikarjun",    
            "designation": "Web Developer",    
            "exp": "3"    
        },    
        {    
            "id": "103",    
            "name": "Srivalli",    
            "designation": "Test Engineer",    
            "exp": "2",
            "phone":"9846748631"     
        },    
        {    
            "id": "104",    
            "name": "Sriram",    
            "designation": "Trainee Engineer",    
            "exp": "1",
            "phone":"9846748631"     
        }    
    ]    
}    
export class index extends Component {
  constructor() {
    super();
    this.state = {
      report: "",
      reportScript: "",
    };
  }
  componentDidMount() {
    jsreport.serverUrl = "http://localhost:5488";
    let reportRequest = { template: { name: "Employee" },data:json_data }
    jsreport.render(this.reportPreview, reportRequest);
  }
  render() {
    let test = this.state.report;
    return (
      <div>
        This is about component
        <div id="reportPlaceholder">
          <p>there should be a report here...</p>
          <div
            style={{ height: "700px" }}
            ref={(el) => (this.reportPreview = el)}
          />
        </div>
      </div>
    );
  }
}

export default index;
