import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.nadikinarsamrakshyan_id,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      sthan: props.history.location.item.sthan,
      qty: props.history.location.item.qty,
      karyakram_miti: props.history.location.item.karyakram_miti,
      conservation_area: props.history.location.item.conservation_area,
      affected_area: props.history.location.item.affected_area,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
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
      id,
      sthan,
      qty,
      karyakram_miti,
      conservation_area,
      affected_area,
      created_by,
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
          office_id: this.props.user.office_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, id);
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

    let disabled =
      isEmpty(sthan) ||
      isEmpty(qty) ||
      isEmpty(karyakram_miti) ||
      isEmpty(conservation_area) ||
      isEmpty(affected_area)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ नदिकिनार संरक्षण सम्बन्धी विवरण शंसोधन  गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="स्थान :"
                value={sthan}
                direction="vertical"
                onChange={(e) => this.setState({ sthan: e })}
              />
              <Input
                className="w-30"
                title="परिमाण :"
                direction="vertical"
                value={qty}
                onChange={(e) => this.setState({ qty: e })}
              />
              <div className="w-30">
                <span className="dsl-b18">कार्यक्रम मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={karyakram_miti}
                  onChange={(e) => this.handleDate(e, "karyakram")}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="संरक्षण क्षेत्र :"
                value={conservation_area}
                direction="vertical"
                onChange={(e) => this.setState({ conservation_area: e })}
              />
              <Input
                className="w-30"
                title="प्रभावित क्षेत्र :"
                direction="vertical"
                value={affected_area}
                onChange={(e) => this.setState({ affected_area: e })}
              />
              <div className="w-30" />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शंशोधन गर्नुहोस ।"
                disabled={disabled}
                onClick={this.handleConfirm.bind(this)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
