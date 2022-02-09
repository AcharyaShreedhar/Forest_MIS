import React, { Component } from "react";
import { equals, isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { districtList, officeType } from "../../services/config";
import "nepali-datepicker-reactjs/dist/index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office_name: "",
      office_location: "",
      dist_id: "",
      office_type: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOfficeType = this.handleOfficeType.bind(this);
  }

  handleDistrict(e) {
    this.setState({ dist_id: e[0] });
  }
  handleOfficeType(e) {
    this.setState({ office_type: e[0] });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const { office_name, office_location, dist_id, office_type } = this.state;
    const payload = {
      office: {
        data: {
          office_name: office_name,
          office_location: office_location,
          dist_id: equals(dist_id, "%") ? 0 : dist_id,
          office_type: equals(office_type, "%") ? 0 : office_type,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const { office_name, office_location, dist_id, office_type, showDialog } = this.state;

    let disabled =
      isEmpty(office_name) || isEmpty(office_location) || isEmpty(dist_id)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ कार्यालय सम्बन्धि विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="कार्यालयको नाम :"
                direction="vertical"
                value={office_name}
                onChange={(e) => this.setState({ office_name: e })}
              />
              <Input
                className="w-30"
                title="कार्यालयको ठेगाना :"
                direction="vertical"
                value={office_location}
                onChange={(e) => this.setState({ office_location: e })}
              />
            </div>
            <div className="panel space mb-4">
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
              <div className="w-30" >
                <Dropdown
                    className="dropdownlabel"
                    title="कार्यालयको प्रकार :"
                    direction="vertical"
                    defaultIds={[office_type]}
                    data={officeType}
                    getValue={(officeType) => officeType["value"]}
                    onChange={(e) => this.handleOfficeType(e)}
                    value={office_type}
                  />
              </div>
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
