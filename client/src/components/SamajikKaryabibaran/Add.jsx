import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      samajik_karyabibaran:"",
      samajik_ekai: "",
      samajik_parinam:"",
      samajik_bajetkharcha:"",
      ban_type:"",
      dist_id: "",
      created_by: "",
      updated_by: "",
      showDialog: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const {
        samajik_karyabibaran,
        samajik_ekai,
        samajik_parinam,
        samajik_bajetkharcha,
        ban_type,
    } = this.state;
    const payload = {
      samajikkaryabibaran: {
        data: {
          samajik_karyabibaran: samajik_karyabibaran,
          samajik_ekai: samajik_ekai,
          samajik_parinam: samajik_parinam,
          samajik_bajetkharcha: samajik_bajetkharcha,
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
        samajik_karyabibaran,
        samajik_ekai,
        samajik_parinam,
        samajik_bajetkharcha,
        ban_type,
        showDialog,
    } = this.state;

    return (
      <React.Fragment>
        <div className=" card p-5 border-5">
        <ConfirmationDialoge
            showDialog={showDialog}
            title="थप"
            body="के तपाईँ सामाजिक कार्य सम्बन्धि विवरण गर्न चाहनुहुन्छ ?"
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
              title="सामाजिक कार्याविवरण"
              value={samajik_karyabibaran}
              direction="vertical"
              onChange={(e) => this.setState({ samajik_karyabibaran: e })}
            />
            <Input
              className="mb-4"
              title="ईकाइ"
              direction="vertical"
              value={samajik_ekai}
              onChange={(e) => this.setState({ samajik_ekai: e })}
            />

            <Input
              className="mb-4"
              title="परिणाम"
              direction="vertical"
              value={samajik_parinam}
              onChange={(e) => this.setState({ samajik_parinam: e })}
            />
            <Input
              className="mb-4"
              title="बजेटखर्च"
              value={samajik_bajetkharcha}
              direction="vertical"
              onChange={(e) => this.setState({ samajik_bajetkharcha: e })}
            />

            <Input
              className="mb-4"
              title="वनको किसिम"
              direction="vertical"
              value={ban_type}
              onChange={(e) => this.setState({ ban_type: e })}
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
