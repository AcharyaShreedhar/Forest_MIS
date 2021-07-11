import React, { Component } from "react";
import { Button, Input, ConfirmationDialoge } from "../../components";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        karyaharu:"",
        ekai: "",
        banka_prakar:"",
        mahila	:"",
        purus:"",
        jamma:"",
        kaifiyat:"",
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
        karyaharu,
        ekai,
        banka_prakar,
        mahila,
        purus,
        jamma,
        kaifiyat,
    } = this.state;
    const payload = {
      rojgarsrijana: {
        data: {
            karyaharu: karyaharu,
            ekai: ekai,
            banka_prakar: banka_prakar,
            mahila: mahila,
            purus: purus,
            jamma: jamma,
            kaifiyat: kaifiyat,
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
        karyaharu,
        ekai,
        banka_prakar,
        mahila,
        purus,
        jamma,
        kaifiyat,
        showDialog,
    } = this.state;

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
            <Input
              className="mb-4"
              title="कार्यहरु"
              value={karyaharu}
              direction="vertical"
              onChange={(e) => this.setState({ karyaharu: e })}
            />
            <Input
              className="mb-4"
              title="ईकाइ"
              direction="vertical"
              value={ekai}
              onChange={(e) => this.setState({ ekai: e })}
            />

            <Input
              className="mb-4"
              title="वनका प्रकार"
              direction="vertical"
              value={banka_prakar}
              onChange={(e) => this.setState({ banka_prakar: e })}
            />
            <Input
              className="mb-4"
              title="महिला"
              value={mahila}
              direction="vertical"
              onChange={(e) => this.setState({ mahila: e })}
            />

            <Input
              className="mb-4"
              title="पुरुष"
              direction="vertical"
              value={purus}
              onChange={(e) => this.setState({ purus: e })}
            />
            <Input
              className="mb-4"
              title="जम्मा"
              direction="vertical"
              value={jamma}
              onChange={(e) => this.setState({ jamma: e })}
            />
            <Input
              className="mb-4"
              title="कैफियत"
              direction="vertical"
              value={kaifiyat}
              onChange={(e) => this.setState({ kaifiyat: e })}
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
