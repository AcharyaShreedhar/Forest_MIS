import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { Dropdown } from "../../components";
import "./Filter.scss";

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromdate: "2075-01-01",
      todate: "2090-12-30",
      district: ["%"],
      office: ["%"],
    };
    this.handletoDate = this.handletoDate.bind(this);
    this.handlefromDate = this.handlefromDate.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
  }

  handletoDate(e) {
    this.setState({ todate: e });
    this.props.onToDate(e, this.props.id);
  }
  handlefromDate(e) {
    this.setState({ fromdate: e });
    this.props.onFromDate(e, this.props.id);
  }
  handleDistrict(e) {
    this.setState({ district: e });
    this.props.onSelect(e, this.props.id);
    this.props.yesOffice && this.setState({ office: ["%"] });
  }

  handleOffice(e) {
    this.setState({ office: e });
    this.props.onSelectOffice(e, this.props.id);
  }

  render() {
    const { district, office, fromdate, todate } = this.state;
    const { districtsList, officesList, title, yesDate, yesOffice } =
      this.props;
    return (
      <div className="filter">
        {yesDate && (
          <Fragment>
            <span className="dsl-b22">{title}:</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="ml-2"
              value={fromdate}
              onChange={(e) => this.handlefromDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <span className="dsl-b22 mx-2">देखी </span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="ml-2"
              value={todate}
              onChange={(e) => this.handletoDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
          </Fragment>
        )}
        <Dropdown
          className="dropdownlabel ml-2"
          title="जिल्ला :"
          width="fit-content"
          defaultIds={district}
          data={districtsList}
          getValue={(districtsList) => districtsList["value"]}
          onChange={(e) => this.handleDistrict(e)}
          value={district}
          multi={true}
        />
        {yesOffice && (
          <Dropdown
            className="dropdownlabel ml-2"
            title="कार्यालय :"
            width="fit-content"
            defaultIds={office}
            data={officesList}
            getValue={(officesList) => officesList["value"]}
            onChange={(e) => this.handleOffice(e)}
            value={office}
            multi={true}
          />
        )}
      </div>
    );
  }
}
Filter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  yesDate: PropTypes.any,
  yesOffice: PropTypes.any,
  fromdate: PropTypes.string,
  todate: PropTypes.string,
  district: PropTypes.string,
  office: PropTypes.string,
  onToDate: PropTypes.func,
  onFromDate: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectOffice: PropTypes.func,
};

Filter.defaultProps = {
  className: "",
  title: "",
  districtsList: {},
  officesList: {},
  fromdate: "",
  todate: "",
  district: "",
  office: "",
  yesDate: true,
  yesOffice: false,
  onToDate: () => {},
  onFromDate: () => {},
  onSelect: () => {},
  onSelectOffice: () => {},
};

export default Filter;
