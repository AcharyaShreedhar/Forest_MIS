import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darta_no: "",
      darta_miti: "",
      rastriyaban_naam: "",
      address: "",
      area: "",
      main_species: "",
      ghardhuri: "",
      lav_jana: "",
      created_by: "",
      updated_by: "",
      showDialog: false,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
        darta_no,
        darta_miti,
        rastriyaban_naam,
        address,
        area,
        main_species,
        ghardhuri,
        lav_jana,
    } = this.state;
    const payload = {
      rastriyaban: {
        data: {
          darta_no: darta_no,
          darta_miti: darta_miti,
          rastriyaban_naam: rastriyaban_naam,
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
        rastriyaban_naam,
        address,
        area,
        main_species,
        ghardhuri,
        lav_jana,
        showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ राष्ट्रिय वन थप गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
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
              title="राष्ट्रिय वनको नाम"
              direction="vertical"
              value={rastriyaban_naam}
              onChange={(e) => this.setState({ rastriyaban_naam: e })}
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
                onClick={this.handleConfirm.bind(this)}
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
  onClose: PropTypes.func,
};

Add.defaultProps = {
  darta_no: 1,
  onClose: () => {},
};

export default Add;
