import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import "./ReportGenerator.scss";

export class ReportGenerator extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <div className="generate">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="core-button small size-small download-table-xls-button"
            table={id}
            filename="tablexls"
            sheet="tablexls"
            buttonText="रिपोर्ट जेनेरेट गर्नुहोस"
          />
          <FontAwesomeIcon size="2x" icon={faFileExcel} className="ml-2" />
        </div>
      </div>
    );
  }
}

export default ReportGenerator;
