import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.jaladhar_samrakshyan_id,
      dist_id: props.history.location.item.dist_id,
      office_id: props.history.location.item.office_id,
      sthan: props.history.location.item.sthan,
      qty: props.history.location.item.qty,
      karyakram_miti: props.history.location.item.karyakram_miti,
      laagat: props.history.location.item.laagat,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const { id, sthan, qty, karyakram_miti, laagat, created_by } = this.state;
    const payload = {
      jaladharsamrakshyan: {
        data: {
          sthan: sthan,
          qty: qty,
          karyakram_miti: karyakram_miti,
          laagat: laagat,
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
    this.setState({ karyakram_miti: e });
  }

  render() {
    const { title } = this.props;
    const { sthan, qty, karyakram_miti, laagat, showDialog } = this.state;
    let disabled =
      isEmpty(sthan) ||
      isEmpty(qty) ||
      isEmpty(karyakram_miti) ||
      isEmpty(laagat)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ जलाधार संरक्षण सम्बन्धी विवरण शंसोधन  गर्न चाहनुहुन्छ ?"
            confirmLabel="चाहन्छु "
            cancelLabel="चाहंदिन "
            onYes={this.handleSubmit}
            onClose={this.handleClose}
          />
          <div className="detail-content">
            <div className="title">
              <span className="dsl-b22">{title}</span>
            </div>
            <div className="panel mb-4 space">
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
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space">
              <Input
                className="w-30"
                title="लागत :"
                value={laagat}
                direction="vertical"
                onChange={(e) => this.setState({ laagat: e })}
              />
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
