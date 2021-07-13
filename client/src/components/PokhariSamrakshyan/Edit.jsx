import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.history.location.item.id,
      dist_id: props.history.location.item.dist_id,
      paalika: props.history.location.item.paalika,
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
    const {id, paalika, qty, karyakram_miti, laagat, created_by } =
      this.state;
    const payload = {
        samrakshyanpokharinirman: {
        data: {
          paalika: paalika,
          qty: qty,
          karyakram_miti: karyakram_miti,
          laagat: laagat,
          dist_id: this.props.user.dist_id,
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
    const {
      paalika,
      qty,
      karyakram_miti,
      laagat,
      showDialog,
    } = this.state;

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

            <Input
              className="mb-4"
              title="पालिका"
              value={paalika}
              direction="vertical"
              onChange={(e) => this.setState({ paalika: e })}
            />

            <Input
              className="mb-4"
              title="पारिमाण"
              direction="vertical"
              value={qty}
              onChange={(e) => this.setState({ qty: e })}
            />
            <span className="dsl-b18">कार्यक्रम मिति</span>
            <NepaliDatePicker
              inputClassName="form-control"
              className="mb-4"
              value={karyakram_miti}
              onChange={(e) => this.handleDate(e)}
              options={{ calenderLocale: "ne", valueLocale: "en" }}
            />
           <Input
              className="mb-4"
              title="लागत"
              value={laagat}
              direction="vertical"
              onChange={(e) => this.setState({ laagat: e })}
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
