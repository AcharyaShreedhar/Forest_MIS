import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
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
            buttonText="रिपोर्ट"
          />
          <FontAwesomeIcon size="2x" icon={faFileAlt} className="ml-2" />
        </div>
      </div>
    );
  }
}

export default ReportGenerator;
