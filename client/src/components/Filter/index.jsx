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
      district: "%",
    };
    this.handletoDate = this.handletoDate.bind(this);
    this.handlefromDate = this.handlefromDate.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
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
    this.setState({ district: e[0] });
    this.props.onSelect(e[0], this.props.id);
  }

  render() {
    const { district, fromdate, todate } = this.state;
    const { districtsList, title, yesDate } = this.props;
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
          defaultIds={[district]}
          data={districtsList}
          getValue={(districtsList) => districtsList["value"]}
          onChange={(e) => this.handleDistrict(e)}
          value={district}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  yesDate: PropTypes.any,
  fromdate: PropTypes.string,
  todate: PropTypes.string,
  district: PropTypes.string,
  onToDate: PropTypes.func,
  onFromDate: PropTypes.func,
  onSelect: PropTypes.func,
};

Filter.defaultProps = {
  className: "",
  title: "",
  districtsList: {},
  fromdate: "",
  todate: "",
  district: "",
  yesDate: true,
  onToDate: () => {},
  onFromDate: () => {},
  onSelect: () => {},
};

export default Filter;
