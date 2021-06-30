import React, { Component } from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./Filter.scss";

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(e) {
    this.setState({ renewal_date: e });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="filter">
        <span className="dsl-b22">मिति</span>
        <NepaliDatePicker
          inputClassName="form-control"
          className="ml-2"
          value={date}
          onChange={(e) => this.handleDate(e)}
          options={{ calenderLocale: "ne", valueLocale: "en" }}
        />
      </div>
    );
  }
}

export default Filter;
