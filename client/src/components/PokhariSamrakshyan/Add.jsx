import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dist_id: "",
      paalika: "",
      qty: "",
      karyakram_miti: "",
      laagat: "",
      created_by: "",
      updated_by: "",
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
    const { paalika, qty, karyakram_miti, laagat } = this.state;
    const payload = {
      samrakshyanpokharinirman: {
        data: {
          paalika: paalika,
          qty: qty,
          karyakram_miti: karyakram_miti,
          laagat: laagat,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  handleDate(e) {
    this.setState({ karyakram_miti: e });
  }

  render() {
    const { title } = this.props;
    const { paalika, qty, karyakram_miti, laagat, showDialog } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ पोखरी संरक्षण सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="पालिका :"
                value={paalika}
                direction="vertical"
                onChange={(e) => this.setState({ paalika: e })}
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
            <Input
              className="w-30"
              title="लागत :"
              value={laagat}
              direction="vertical"
              onChange={(e) => this.setState({ laagat: e })}
            />
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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
