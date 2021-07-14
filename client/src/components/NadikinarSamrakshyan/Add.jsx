import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dist_id: "",
      sthan: "",
      qty: "",
      karyakram_miti: "",
      conservation_area: "",
      affected_area: "",
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
      sthan,
      qty,
      karyakram_miti,
      conservation_area,
      affected_area,
    } = this.state;
    const payload = {
      nadikinarsamrakshyan: {
        data: {
          sthan: sthan,
          qty: qty,
          karyakram_miti: karyakram_miti,
          conservation_area: conservation_area,
          affected_area: affected_area,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e, type) {
    this.setState({ karyakram_miti: e });
  }

  render() {
    const { title } = this.props;
    const {
      sthan,
      qty,
      karyakram_miti,
      conservation_area,
      affected_area,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ नदिकिनार संरक्षण सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
              title="स्थान"
              value={sthan}
              direction="vertical"
              onChange={(e) => this.setState({ sthan: e })}
            />

            <Input
              className="mb-4"
              title="परिमाण"
              direction="vertical"
              value={qty}
              onChange={(e) => this.setState({ qty: e })}
            />
            <span className="dsl-b18">कार्यक्रम मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={karyakram_miti}
              onChange={(e) => this.handleDate(e, "karyakram")}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
            <Input
              className="mb-4"
              title="संरक्षण क्षेत्र"
              value={conservation_area}
              direction="vertical"
              onChange={(e) => this.setState({ conservation_area: e })}
            />
            <Input
              className="mb-4"
              title="प्रभावित क्षेत्र"
              direction="vertical"
              value={affected_area}
              onChange={(e) => this.setState({ affected_area: e })}
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

export default Add;
