import React, { Component } from "react";
import { isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { uddhamList } from "../../services/config";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      uddham_type: "",
      darta_miti: "",
      rojgar_sankhya: "",
      dist_id: "",
      office_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleUddhamType = this.handleUddhamType.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUddhamType(e) {
    this.setState({ uddham_type: e[0] });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDate(e) {
    this.setState({ darta_miti: e });
  }

  handleSubmit() {
    const { name, darta_miti, address, uddham_type, rojgar_sankhya } =
      this.state;
    const payload = {
      uddham: {
        data: {
          name: name,
          darta_miti: darta_miti,
          address: address,
          uddham_type: uddham_type,
          rojgar_sankhya: rojgar_sankhya,
          dist_id: this.props.user.dist_id,
          office_id: this.props.user.office_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      name,
      darta_miti,
      address,
      uddham_type,
      rojgar_sankhya,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(name) ||
      isEmpty(darta_miti) ||
      isEmpty(address) ||
      isEmpty(uddham_type) ||
      isEmpty(rojgar_sankhya)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ रोजगार सिर्जना सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="उद्धम :"
                direction="vertical"
                value={name}
                onChange={(e) => this.setState({ name: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="उद्धमको प्रकार :"
                  direction="vertical"
                  defaultIds={[uddham_type]}
                  data={uddhamList}
                  getValue={(uddhamList) => uddhamList["value"]}
                  onChange={(e) => this.handleUddhamType(e)}
                  value={uddham_type}
                />
              </div>
              <div className="w-30">
                <span className="dsl-b18"> दर्ता मिती :</span>
                <NepaliDatePicker
                  inputClassName="form-control"
                  value={darta_miti}
                  onChange={(e) => this.handleDate(e)}
                  options={{ calenderLocale: "ne", valueLocale: "en" }}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="स्थान :"
                value={address}
                direction="vertical"
                onChange={(e) => this.setState({ address: e })}
              />
              <Input
                className="w-30"
                title="रोजगार संख्या :"
                type-="number"
                direction="vertical"
                value={rojgar_sankhya}
                onChange={(e) => this.setState({ rojgar_sankhya: e })}
              />
              <div className="w-30" />
            </div>
          </div>
          <div className="section mb-4" />
          <div className="mt-2 border-5">
            <div className="d-flex justify-content-end align-items-center">
              <Button
                className="mr-3"
                name="शेभ गर्नुहोस ।"
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

export default Add;
