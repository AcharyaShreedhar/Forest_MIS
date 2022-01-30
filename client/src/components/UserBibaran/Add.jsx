import React, { Component } from "react";
import { equals, isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { districtList, usertypeList } from "../../services/config";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_pass: "",
      user_type: "",
      dist_id: "",
      user_office: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleUserType = this.handleUserType.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDistrict(e) {
    this.setState({ dist_id: e[0] });
  }
  handleUserType(e) {
    this.setState({ user_type: e[0] });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const { user_name, user_pass, user_type, user_office, dist_id } =
      this.state;
    const payload = {
      user: {
        data: {
          user_name: user_name,
          user_pass: user_pass,
          user_type: user_type,
          user_office: user_office,
          dist_id: equals(dist_id, "%") ? 0 : dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      user_name,
      user_pass,
      user_type,
      user_office,
      dist_id,
      showDialog,
    } = this.state;

    let disabled =
      isEmpty(user_name) ||
      isEmpty(user_name) ||
      isEmpty(dist_id) ||
      isEmpty(user_office) ||
      isEmpty(user_type)
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
                title="युजरको नाम :"
                direction="vertical"
                value={user_name}
                onChange={(e) => this.setState({ user_name: e })}
              />
              <Input
                className="w-30"
                title="पासवर्ड  :"
                direction="vertical"
                value={user_pass}
                type="password"
                onChange={(e) => this.setState({ user_pass: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="युजरको प्रकार :"
                  direction="vertical"
                  defaultIds={[user_type]}
                  data={usertypeList}
                  getValue={(usertypeList) => usertypeList["value"]}
                  onChange={(e) => this.handleUserType(e)}
                  value={user_type}
                />
              </div>
            </div>
            <div className="panel space mb-4">
              <Input
                className="w-30"
                title="युजरको कार्यालय :"
                direction="vertical"
                value={user_office}
                onChange={(e) => this.setState({ user_office: e })}
              />
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="जिल्ला :"
                  direction="vertical"
                  defaultIds={[dist_id]}
                  data={districtList}
                  getValue={(districtList) => districtList["value"]}
                  onChange={(e) => this.handleDistrict(e)}
                  value={dist_id}
                />
              </div>
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
