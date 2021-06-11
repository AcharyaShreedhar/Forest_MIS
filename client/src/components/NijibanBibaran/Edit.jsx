import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, DatePicker, Dropdown } from "..";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./NijibanBibaran.scss";
import { equals } from "ramda";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.nijiban_bibaran_id,
      regno: props.history.location.item.darta_no,
      name: props.history.location.item.nijiban_dhaniko_naam,
      swikrit_miti: props.history.location.item.swikrit_miti,
      perm_addr: props.history.location.item.perm_addr,
      curr_addr: props.history.location.item.curr_addr,
      area: props.history.location.item.area,
      main_species: props.history.location.item.main_species,
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
      id,
      name,
      regno,
      swikrit_miti,
      perm_addr,
      curr_addr,
      area,
      main_species,
    } = this.state;
    const payload = {
      nijiban: {
        data: {
          nijiban_dhaniko_naam: name,
          darta_no: regno,
          swikrit_miti: swikrit_miti,
          perm_addr: perm_addr,
          curr_addr: curr_addr,
          area: area,
          main_species: main_species,
        },
      },
    };

    this.props.onUpdate(payload, id);
  }

  handleDate(e) {
    this.setState({ swikrit_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      name,
      regno,
      swikrit_miti,
      perm_addr,
      curr_addr,
      area,
      main_species,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <Input
              className="mb-4"
              title="दर्ता नं"
              value={regno}
              direction="vertical"
              onChange={(e) => this.setState({ regno: e })}
            />

            <Input
              className="mb-4"
              title="नीजि वन धनिको नाम"
              direction="vertical"
              value={name}
              onChange={(e) => this.setState({ name: e })}
            />
            <span className="dsl-b18">स्विकृत मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={swikrit_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="साविक ठेगाना"
              value={perm_addr}
              direction="vertical"
              onChange={(e) => this.setState({ perm_addr: e })}
            />

            <Input
              className="mb-4"
              title="हालको ठेगाना"
              direction="vertical"
              value={curr_addr}
              onChange={(e) => this.setState({ curr_addr: e })}
            />

            <Input
              className="mb-4"
              title="क्षत्रफल(हे.)"
              direction="vertical"
              value={area}
              onChange={(e) => this.setState({ area: e })}
            />
            <Input
              className="mb-4"
              title="वनका मुख्य तथा सहायक प्रजातिहरु"
              direction="vertical"
              as="textarea"
              value={main_species}
              onChange={(e) => this.setState({ main_species: e })}
            />
          </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Update"
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Edit.propTypes = {
  regno: PropTypes.number,
};

Edit.defaultProps = {
  regno: 1,
};

export default Edit;
