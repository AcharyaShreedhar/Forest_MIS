import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Dropdown } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { equals } from "ramda";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darta_no: "",
      darta_miti: "",
      chaklaban_naam: "",
      address: "",
      area: "",
      main_species: "",
      ghardhuri: "",
      lav_jana: "",
      created_by: "",
      updated_by: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit() {
    const {
        darta_no,
        darta_miti,
        chaklaban_naam,
        address,
        area,
        main_species,
        ghardhuri,
        lav_jana,
    } = this.state;
    const payload = {
      samudayikban: {
        data: {
          darta_no: darta_no,
          darta_miti: darta_miti,
          chaklaban_naam: chaklaban_naam,
          address: address,
          area: area,
          main_species: main_species,
          ghardhuri: ghardhuri,
          lav_jana: lav_jana,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }
 
  handleDate(e, type) {
    this.setState({ darta_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
        darta_no,
        darta_miti,
        chaklaban_naam,
        address,
        area,
        main_species,
        ghardhuri,
        lav_jana,
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
              value={darta_no}
              direction="vertical"
              onChange={(e) => this.setState({ darta_no: e })}
            />
            <span className="dsl-b18">दर्ता मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={darta_miti}
              onChange={(e) => this.handleDate(e, "darta")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />

            <Input
              className="mb-4"
              title="चक्लावनको नाम"
              direction="vertical"
              value={chaklaban_naam}
              onChange={(e) => this.setState({ chaklaban_naam: e })}
            />
            <Input
              className="mb-4"
              title="ठेगाना"
              direction="vertical"
              value={address}
              onChange={(e) => this.setState({ address: e })}
            />
            <Input
              className="mb-4"
              title="क्षत्रफल(हे.)"
              value={area}
              direction="vertical"
              onChange={(e) => this.setState({ area: e })}
            />

            <Input
              className="mb-4"
              title="मुख्य प्रजाति"
              direction="vertical"
              as="textarea"
              value={main_species}
              onChange={(e) => this.setState({ main_species: e })}
            />
                       
            <Input
              className="mb-4"
              title="संलग्न घरधुरी"
              value={ghardhuri}
              direction="vertical"
              onChange={(e) => this.setState({ ghardhuri: e })}
            />
            <Input
              className="mb-4"
              title="लाभ संख्या"
              value={lav_jana}
              direction="vertical"
              onChange={(e) => this.setState({ lav_jana: e })}
            />
        </div>
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="Save"
                onClick={this.handleSubmit.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Add.propTypes = {
  darta_no: PropTypes.number,
};

Add.defaultProps = {
  darta_no: 1,
};

export default Add;
