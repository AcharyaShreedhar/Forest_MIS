import React, { Component } from "react";
import { equals, isEmpty } from "ramda";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { districtList } from "../../services/config";
import "nepali-datepicker-reactjs/dist/index.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office_id: props.history.location.item.office_id,
      office_name: props.history.location.item.office_name,
      office_location: props.history.location.item.office_location,
      dist_id: props.history.location.item.dist_id,
      created_by: props.history.location.item.created_by,
      updated_by: props.history.location.item.updated_by,
      showDialog: false,
    };
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDistrict(e) {
    this.setState({ dist_id: e[0] });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      office_id,
      office_name,
      office_location,
      dist_id,
      created_by,
      updated_by,
    } = this.state;
    const payload = {
      office: {
        data: {
          office_name: office_name,
          office_location: office_location,
          dist_id: equals(dist_id, "%") ? 0 : dist_id,
          created_by: created_by,
          updated_by: this.props.user.user_name,
        },
      },
    };
    this.props.onUpdate(payload, office_id);
  }

  render() {
    const { title } = this.props;
    const { office_name, office_location, dist_id, showDialog } = this.state;

    let disabled =
      isEmpty(office_name) || isEmpty(office_location) || isEmpty(dist_id)
        ? true
        : false;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="शंसोधन"
            body="के तपाईँ कार्यालय सम्बन्धि शंसोधन गर्न चाहनुहुन्छ ?"
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
                title="कार्यालय नाम :"
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
              {/* <div className="w-30">
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
              </div> */}
            </div>
            <div className="panel space mb-4">
              {/* <Input
                className="w-30"
                title="युजरको कार्यालय :"
                direction="vertical"
                value={user_office}
                onChange={(e) => this.setState({ user_office: e })}
              /> */}
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="जिल्ला :"
                  direction="vertical"
                  defaultIds={[equals(dist_id, 0) ? "%" : dist_id]}
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
