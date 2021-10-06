import React, { Component } from "react";
import { Button, ConfirmationDialoge, Dropdown, Input } from "../../components";
import { banList } from "../../services/config";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banbikas_karyabibaran: "",
      banbikas_ikai: "",
      banbikas_parinam: "",
      banbikas_bajetkharcha: "",
      ban_type: 1,
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleBanType = this.handleBanType.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBanType(e) {
    this.setState({ ban_type: e[0] });
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleConfirm() {
    this.setState({ showDialog: !this.state.showDialog });
  }

  handleSubmit() {
    const {
      banbikas_karyabibaran,
      banbikas_ikai,
      banbikas_parinam,
      banbikas_bajetkharcha,
      ban_type,
    } = this.state;
    const payload = {
      banbikaskaryabibaran: {
        data: {
          banbikas_karyabibaran: banbikas_karyabibaran,
          banbikas_ikai: banbikas_ikai,
          banbikas_parinam: banbikas_parinam,
          banbikas_bajetkharcha: banbikas_bajetkharcha,
          ban_type: ban_type,
          dist_id: this.props.user.dist_id,
          created_by: this.props.user.user_name,
        },
      },
    };
    this.props.onSubmit(payload);
  }

  render() {
    const { title } = this.props;
    const {
      banbikas_karyabibaran,
      banbikas_ikai,
      banbikas_parinam,
      banbikas_bajetkharcha,
      ban_type,
      showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
          <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ वनविकास कार्यविवरण सम्बन्धी विवरण थप गर्न चाहनुहुन्छ ?"
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
                title="कार्य विवरण :"
                value={banbikas_karyabibaran}
                direction="vertical"
                as="textarea"
                onChange={(e) => this.setState({ banbikas_karyabibaran: e })}
              />
              <Input
                className="w-30"
                title="ईकाइ :"
                direction="vertical"
                value={banbikas_ikai}
                onChange={(e) => this.setState({ banbikas_ikai: e })}
              />

              <Input
                className="w-30"
                title="परिणाम :"
                direction="vertical"
                value={banbikas_parinam}
                onChange={(e) => this.setState({ banbikas_parinam: e })}
              />
            </div>
            <div className="panel space">
              <div className="w-30">
                <Dropdown
                  className="dropdownlabel"
                  title="वनको किसिम :"
                  direction="vertical"
                  defaultIds={[ban_type]}
                  data={banList}
                  getValue={(banList) => banList["value"]}
                  onChange={(e) => this.handleBanType(e)}
                  value={ban_type}
                />
              </div>
              <Input
                className="w-30"
                title="बजेट खर्च :"
                value={banbikas_bajetkharcha}
                direction="vertical"
                onChange={(e) => this.setState({ banbikas_bajetkharcha: e })}
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
