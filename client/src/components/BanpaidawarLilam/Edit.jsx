import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.lilam_id,
      lilam_date: props.history.location.item.lilam_date,
      banpaidawar_type: props.history.location.item.banpaidawar_type,
      unit: props.history.location.item.unit,
      quantity: props.history.location.item.quantity,
      minimum_price: props.history.location.item.minimum_price,
      sakaar_price: props.history.location.item.sakaar_price,
      remarks: props.history.location.item.remarks,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
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
      lilam_date,
      banpaidawar_type,
      unit,
      quantity,
      minimum_price,
      sakaar_price,
      remarks,
      created_by,
    } = this.state;
    const payload = {
      banpaidawarlilam: {
        data: {
          lilam_date: lilam_date,
          banpaidawar_type: banpaidawar_type,
          unit: unit,
          quantity: quantity,
          minimum_price: minimum_price,
          sakaar_price: sakaar_price,
          remarks: remarks,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: created_by || this.props.user.user_name,
          updated_by: this.props.user.user_name,
        },
      },
    };

    this.props.onUpdate(payload, id);
  }

  handleDate(e) {
    this.setState({ lilam_date: e });
  }

  render() {
    const { title } = this.props;
    const {
      lilam_date,
      banpaidawar_type,
      unit,
      quantity,
      minimum_price,
      sakaar_price,
      remarks,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(lilam_date) ||
      isEmpty(banpaidawar_type) ||
      isEmpty(unit) ||
      isEmpty(quantity) ||
      isEmpty(minimum_price) ||
      isEmpty(sakaar_price) ||
      isEmpty(remarks)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ वनपैदावार लिलाम सम्बन्धि विवरण शंसोधन गर्न चाहनुहुन्छ ?"
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
              <div className="w-30">
                <span className="dsl-b18">लिलाम मिति :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={lilam_date}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
              <Input
                className="w-30"
                title="वन पैदावारको किसिम :"
                value={banpaidawar_type}
                direction="vertical"
                onChange={(e) => this.setState({ banpaidawar_type: e })}
              />
              <Input
                className="w-30"
                title="इकाई :"
                direction="vertical"
                value={unit}
                onChange={(e) => this.setState({ unit: e })}
              />
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="परिमाण :"
                value={quantity}
                direction="vertical"
                onChange={(e) => this.setState({ quantity: e })}
              />
              <Input
                className="w-30"
                title="न्युनतम मूल्य (रु) :"
                direction="vertical"
                value={minimum_price}
                onChange={(e) => this.setState({ minimum_price: e })}
              />

              <Input
                className="w-30"
                title="सकार रकम (रु) :"
                value={sakaar_price}
                direction="vertical"
                onChange={(e) => this.setState({ sakaar_price: e })}
              />
            </div>
            <Input
              className="w-30"
              title="कैफियत :"
              value={remarks}
              direction="vertical"
              as="textarea"
              onChange={(e) => this.setState({ remarks: e })}
            />
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
